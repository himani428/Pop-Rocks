# Pop Rocks Dance Academy — Full Stack Website

A full-stack website for **Pop Rocks Dance Academy** (Mathura), built with:

- **Frontend:** React (Vite) — aesthetic "backstage pass" candy-pop design, fully responsive
- **Backend:** Node.js + Express — simple JSON file database (no native modules, installs anywhere)
- **Auth:** JWT-based register/login, so users can enroll in classes and book choreography events

```
pop-rocks/
├── frontend/     → React app (Vite)
├── backend/      → Node + Express API
└── render.yaml   → optional one-click Render blueprint for the backend
```

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed. Open **two terminals**.

### Terminal 1 — Backend

```bash
cd backend
npm install
cp .env.example .env
npm start
```

The API will run at `http://localhost:5000`. On first run it auto-creates `backend/data/db.json`
with the classes, trainers, services and pricing already filled in — no database setup needed.

> To make code changes and auto-restart, use `npm run dev` instead (uses nodemon).

### Terminal 2 — Frontend

```bash
cd frontend
npm i
npm start
```

The site will open at `http://localhost:5173`. It already points at the local backend
(`frontend/.env` → `VITE_API_URL=http://localhost:5000/api`).

That's it — register an account on the site, enroll in a class or book an event, and you'll see
it appear under **Dashboard**.

---

## 2. Project structure & how to edit content

Almost everything you'll want to change is in **plain data files**, not scattered across the UI:

| What | Where |
|---|---|
| Classes / batches, timings, trainers per batch | `backend/db.js` → `DEFAULT_CLASSES` |
| Trainer bios & photos | `backend/db.js` → `DEFAULT_TRAINERS` |
| Event choreography services (sangeet, birthdays...) | `backend/db.js` → `DEFAULT_SERVICES` |
| Pricing plans | `backend/db.js` → `DEFAULT_PRICING` |
| Hero text, About/mission copy | `frontend/src/components/Hero.jsx`, `About.jsx` |
| Colors, fonts | `frontend/src/index.css` (`:root` variables at the top) |
| Photos | Search `pexels.com` for real placeholders, or drop your own images into `frontend/src/assets` and `import` them |

After changing `backend/db.js`, **delete `backend/data/db.json`** and restart the server — it will
regenerate the seed data. (If you don't delete it, your edits won't show, since the JSON file is
the actual "database" once created.)

The frontend also keeps a copy of the same seed data in `frontend/src/data/fallback.js` — this is
only used if the API can't be reached, so the site never looks broken. Keep it in sync if you
change the backend data.

---

## 3. Deploying — step by step

You'll deploy the **backend to Render** and the **frontend to Vercel**, both from a single GitHub
repo.

### Step A — Push the code to GitHub

```bash
cd pop-rocks
git init
git add .
git commit -m "Initial commit — Pop Rocks Dance Academy"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Step B — Deploy the backend on Render

1. Go to [render.com](https://render.com) → **New** → **Web Service**.
2. Connect your GitHub repo.
3. Configure it:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
4. Add environment variables (Render dashboard → Environment):
   - `JWT_SECRET` → any long random string
   - `CLIENT_ORIGIN` → your Vercel URL, e.g. `https://poprocks.vercel.app` (you can update this after Step C)
5. Click **Create Web Service**. Render gives you a URL like `https://pop-rocks-backend.onrender.com`.

> A `render.yaml` blueprint is included at the project root if you prefer **New → Blueprint** instead of setting fields manually.

> **Note on the free tier:** Render's free web services spin down when idle and lose their
> filesystem on redeploy — so `db.json` resets occasionally. That's fine for a demo/small studio
> site. When you're ready for permanent data, swap `backend/db.js` for a real database (e.g.
> MongoDB Atlas free tier, or Render's own free Postgres) — the rest of the code (`routes/`)
> doesn't need to change much since it all goes through `readDb()`/`writeDb()`.

### Step C — Deploy the frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. Import the same GitHub repo.
3. Configure it:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
4. Add an environment variable:
   - `VITE_API_URL` → your Render backend URL + `/api`, e.g. `https://pop-rocks-backend.onrender.com/api`
5. Click **Deploy**. Vercel gives you a URL like `https://poprocks.vercel.app`.
6. Go back to Render and update `CLIENT_ORIGIN` to this real Vercel URL, then redeploy the backend
   (Render → Manual Deploy) so CORS allows requests from your live site.

A `vercel.json` is already included in `frontend/` so client-side routes like `/login` and
`/dashboard` work correctly instead of 404ing on refresh.

### Step D — Point your own domain at it

**Frontend (main domain, e.g. `www.poprocksdanceacademy.com`):**
1. In Vercel → your project → **Settings → Domains** → add your domain.
2. Vercel shows you a DNS record (usually a `CNAME` to `cname.vercel-dns.com`, or an `A` record for
   an apex domain). Add that record with whoever you bought the domain from (GoDaddy, Namecheap,
   Google Domains, etc.).
3. Wait for DNS to propagate (a few minutes to a few hours) — Vercel auto-issues HTTPS.

**Backend (optional custom subdomain, e.g. `api.poprocksdanceacademy.com`):**
1. In Render → your service → **Settings → Custom Domain** → add `api.yourdomain.com`.
2. Add the CNAME record Render gives you at your domain registrar.
3. Update `VITE_API_URL` in Vercel to `https://api.yourdomain.com/api` and redeploy the frontend.
4. Update `CLIENT_ORIGIN` in Render to your final frontend domain.

You don't have to use a custom domain for the backend — the free `onrender.com` URL works fine
forever, you'd only want a custom one for polish.

---

## 4. If you want to add something later

- **New class/batch:** add an object to `DEFAULT_CLASSES` in `backend/db.js` (and mirror it in
  `frontend/src/data/fallback.js`), delete `backend/data/db.json`, restart the backend.
- **New event service:** same idea, in `DEFAULT_SERVICES`.
- **Change prices:** edit `DEFAULT_PRICING` in `backend/db.js`.
- **Add an admin view of enrollments/bookings:** everything is already saved in
  `backend/data/db.json` (or your future real database) — you can open that file directly, or ask
  for a simple `/admin` page to be added next.
- **Swap the database:** replace the contents of `backend/db.js` with calls to a real database.
  Every route only calls `readDb()` / `writeDb()`, so the rest of the backend won't need changes.

---

## 5. Tech stack summary

- React 19 + Vite + React Router
- `framer-motion` for hero animation, `lucide-react` for icons
- Express + JWT (`jsonwebtoken`) + `bcryptjs` for auth
- Zero-native-dependency JSON file database (works out of the box on Render/Vercel/local — no
  Postgres/Mongo setup required to get started)
