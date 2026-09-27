# Club Connect

A responsive college-club event management application. Students can explore and register for campus events, while club administrators can manage events and view registrations from a compact dashboard.

## Highlights

### Student experience

- Editorial-style home page with club introduction, featured event, and upcoming-event section.
- Complete event directory with search by event name and category filters.
- Event cards showing title, category, date, time, venue, description, and registration action.
- Registration form that collects name, email, college/year, and phone number.
- Mobile-friendly layouts for every screen size.

### Admin experience

- Event dashboard with live-event and registration counts.
- Create a new event, edit an existing event, or delete an event and its associated registrations.
- Mark an event as featured and choose its visual accent colour.
- View all student registrations in a searchable table.

## Technology

| Area | Tool |
| --- | --- |
| Client | React 18 + Vite |
| Server | Express 4 |
| Styling | Custom responsive CSS |
| Local development | Concurrent Vite and Express processes |
| Deployment | Vercel static hosting + Node serverless function |

## Project structure

```text
.
├── api/
│   └── [...path].js       # Vercel catch-all serverless API entry point
├── server/
│   ├── app.js             # Shared Express routes
│   ├── data.js            # Demo seed data and in-memory store
│   └── index.js           # Local Express server listener
├── src/
│   ├── main.jsx           # React application and UI components
│   └── styles.css         # Responsive application styling
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Run locally

Install dependencies:

```bash
npm install
```

On PowerShell systems where execution policy blocks `npm.ps1`, use `npm.cmd install` instead.

Start the client and API together:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The API listens on [http://localhost:4000](http://localhost:4000), while Vite proxies browser `/api` requests to it.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts Vite and Express together. |
| `npm run client` | Starts the Vite client only on port 5173. |
| `npm run server` | Starts the Express API only on port 4000. |
| `npm run build` | Produces the optimized client bundle in `dist/`. |

## REST API

The API is served under `/api` in both local and deployed environments.

### Events

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/events` | List all events. |
| `POST` | `/api/events` | Create an event. |
| `PUT` | `/api/events/:id` | Update an event. |
| `DELETE` | `/api/events/:id` | Delete an event and its registrations. |

Example event payload:

```json
{
  "title": "Design Sprint: 48 Hours",
  "category": "Workshop",
  "date": "2026-10-08",
  "time": "10:00",
  "venue": "Innovation Lab",
  "description": "Form a team, tackle a real brief and build something worth sharing.",
  "featured": false,
  "color": "orange"
}
```

Valid built-in categories are `Culture`, `Workshop`, `Sports`, and `Talk`. Supported visual colours are `blue`, `violet`, `orange`, `pink`, and `green`.

### Registrations

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/registrations` | List registrations, including the corresponding event title. |
| `POST` | `/api/registrations` | Register a student for an event. |

Example registration payload:

```json
{
  "eventId": "1",
  "name": "Aarav Mehta",
  "email": "aarav@campus.edu",
  "collegeYear": "B.Tech · Year 3",
  "phone": "+91 98765 43210"
}
```

The API validates that required fields are present and verifies the target event before it accepts a registration.

## Deploy on Vercel

The repository is already configured for Vercel in `vercel.json`:

- Framework: `vite`
- Build command: `npm run build`
- Static output directory: `dist`
- API handler: `api/[...path].js`

### Deploy from the Vercel dashboard

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Visit [Vercel](https://vercel.com/new) and import the repository.
3. Confirm that the **Root Directory** is the folder containing `package.json` and `vercel.json`.
4. Under **Build and Deployment**, set:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

If Vercel reports `No Output Directory named "build" found`, its project settings are still using a Create React App override. Change the Output Directory from `build` to `dist` (or clear the override), then redeploy.

### Deploy with the CLI

```bash
npx vercel
```

For a production deployment:

```bash
npx vercel --prod
```

## Data and production readiness

The included application uses seeded **in-memory** data in `server/data.js` so it can run immediately with no external setup. This is appropriate for a demo but not for persistent production administration:

- Serverless instances can be restarted at any time.
- Multiple instances do not share in-memory state.
- Added events and registrations can disappear after a cold start or new deployment.

Before accepting real registrations, replace the `events` and `registrations` store in `server/data.js` with a hosted database. Good choices for Vercel include Vercel Postgres, Neon, Supabase, or any managed PostgreSQL database. Store connection values in Vercel Project Settings → Environment Variables rather than committing secrets to the repository.

## Build verification

Run a production build before deployment:

```bash
npm run build
```

The completed output is generated in `dist/`, which is intentionally excluded from Git by `.gitignore` because Vercel creates it during deployment.
