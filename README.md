# Club Connect

React and Express event-management site for college clubs.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Deploy to Vercel

1. Push this project to a Git provider and import the repository in [Vercel](https://vercel.com/new), or run `npx vercel` from the project root.
2. Leave the detected build settings unchanged. Vercel runs `npm run build`, publishes `dist`, and deploys `api/[...path].js` as the REST API.

The app's REST API is served at `/api/events` and `/api/registrations` in both local and deployed environments.

> The included API uses seeded in-memory data for a runnable demo. Serverless functions do not retain in-memory changes reliably; connect the handlers in `server/app.js` to a hosted database (such as Vercel Postgres, Neon, or Supabase) before using admin changes in production.
