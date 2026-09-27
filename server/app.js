import express from 'express'
import cors from 'cors'
import { events, registrations, setEvents, setRegistrations } from './data.js'

export const app = express()
app.use(cors())
app.use(express.json())
const id = () => `${Date.now()}${Math.random().toString(16).slice(2)}`

app.get('/api/events', (_, res) => res.json(events))
app.post('/api/events', (req, res) => {
  const { title, category, date, time, venue, description, featured = false, color = 'blue' } = req.body
  if (![title, category, date, time, venue, description].every(Boolean)) return res.status(400).json({ message: 'Please complete every event field.' })
  const event = { id: id(), title, category, date, time, venue, description, featured, color }
  setEvents([...events, event])
  res.status(201).json(event)
})
app.put('/api/events/:id', (req, res) => {
  const found = events.find(event => event.id === req.params.id)
  if (!found) return res.status(404).json({ message: 'Event not found.' })
  const updated = { ...found, ...req.body, id: found.id }
  setEvents(events.map(event => event.id === found.id ? updated : event))
  res.json(updated)
})
app.delete('/api/events/:id', (req, res) => {
  if (!events.some(event => event.id === req.params.id)) return res.status(404).json({ message: 'Event not found.' })
  setEvents(events.filter(event => event.id !== req.params.id))
  setRegistrations(registrations.filter(item => item.eventId !== req.params.id))
  res.status(204).end()
})
app.get('/api/registrations', (_, res) => res.json(registrations.map(item => ({ ...item, event: events.find(event => event.id === item.eventId)?.title ?? 'Deleted event' }))))
app.post('/api/registrations', (req, res) => {
  const { eventId, name, email, collegeYear, phone } = req.body
  if (![eventId, name, email, collegeYear, phone].every(Boolean)) return res.status(400).json({ message: 'Please complete every registration field.' })
  if (!events.some(event => event.id === eventId)) return res.status(404).json({ message: 'Event not found.' })
  const registration = { id: id(), eventId, name, email, collegeYear, phone, createdAt: new Date().toISOString() }
  setRegistrations([...registrations, registration])
  res.status(201).json(registration)
})
