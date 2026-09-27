export const seedEvents = [
  { id: '1', title: 'Aurora Cultural Night', category: 'Culture', date: '2026-10-18', time: '18:30', venue: 'Open Air Theatre', description: 'A night of music, dance, spoken word and the brilliant people who make our campus glow.', color: 'violet', featured: true },
  { id: '2', title: 'Design Sprint: 48 Hours', category: 'Workshop', date: '2026-10-08', time: '10:00', venue: 'Innovation Lab', description: 'Form a team, tackle a real brief and build something worth sharing.', color: 'orange', featured: false },
  { id: '3', title: 'Inter-College Football Cup', category: 'Sports', date: '2026-10-12', time: '07:30', venue: 'North Ground', description: 'Bring your colours, your chants and your game face for the opening fixtures.', color: 'blue', featured: false },
  { id: '4', title: 'Open Mic Under the Stars', category: 'Culture', date: '2026-10-25', time: '19:00', venue: 'Central Lawn', description: 'A warm stage for songs, stories, poetry and every voice in between.', color: 'pink', featured: false },
  { id: '5', title: 'Career Stories: Alumni Panel', category: 'Talk', date: '2026-11-02', time: '16:00', venue: 'Seminar Hall B', description: 'Honest conversations with alumni about choices, pivots and first jobs.', color: 'green', featured: false }
]

export let events = [...seedEvents]
export let registrations = [
  { id: 'r1', eventId: '1', name: 'Aarav Mehta', email: 'aarav@campus.edu', collegeYear: 'B.Tech · Year 3', phone: '+91 98765 43210', createdAt: '2026-09-25T10:00:00Z' },
  { id: 'r2', eventId: '2', name: 'Meera Nair', email: 'meera@campus.edu', collegeYear: 'B.Des · Year 2', phone: '+91 98765 43102', createdAt: '2026-09-26T11:30:00Z' }
]

export const setEvents = (value) => { events = value }
export const setRegistrations = (value) => { registrations = value }
