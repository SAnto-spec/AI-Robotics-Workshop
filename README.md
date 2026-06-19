# FutureMinds: Kids AI & Robotics Summer Workshop Landing Page

FutureMinds is a premium, responsive, and highly interactive workshop landing page designed for children aged 8–14 and their parents. It is built using modern **React (TypeScript)**, **Vite**, and **Tailwind CSS v4** on the frontend, and backed by a robust **Express.js API** connected to **MongoDB** on the backend.

The project is structured as a unified repository (monorepo) managing both the frontend client and backend API under a single Git workspace.

---

## 🎨 Design System

Inspired by modern, child-friendly educational platforms, the application features:
- **Cartoon/Playful Theme**: Thick outline borders (`border-3 border-slate-800`), bold rounded typography (Nunito & Quicksand fonts), and offset flat drop shadows.
- **Bento Grid Cards**: Key statistics and learning outcomes are organized in varying card spans (`md:col-span-2`, `md:col-span-3`), creating a packed visual layout.
- **Soft Glassmorphism Accents**: Soft transparent panel backgrounds (`bg-white/60`) with backdrop blurring (`backdrop-blur-lg` / `backdrop-blur-xl`) and thin translucent highlights.
- **Playful Custom SVGs**: Responsive robot mascots and floating STEM/AI icons.

---

## 📁 Repository & Folder Structure

```text
Workshop_web/                  # Root Repository Directory
├── backend/                   # Express.js REST API
│   ├── config/
│   │   └── db.js              # Mongoose DB connector with error logs
│   ├── models/
│   │   └── Enquiry.js         # Mongoose Schema mapping leads
│   ├── server.js              # CORS headers, field checks & REST endpoint
│   ├── .env                   # Local Environment keys (PORT, Database URI)
│   └── package.json           # Backend dependency configurations
├── frontend/                  # React + Vite + Tailwind CSS (TypeScript)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx     # Floating Glassmorphic Navigation
│   │   │   ├── Hero.tsx       # Custom SVG Cartoon Robot Illustration
│   │   │   ├── Details.tsx    # Bento Grid schedules & cohort values
│   │   │   ├── Outcomes.tsx   # Bento Grid learning modules
│   │   │   ├── FAQ.tsx        # Dynamic parent accordion FAQs
│   │   │   ├── RegisterForm.tsx # Parent Signup Form with type-safe state
│   │   │   └── Footer.tsx     # Custom Branding footer
│   │   ├── App.tsx            # Main Framework Assembler
│   │   ├── index.css          # Playful styling utilities & Google Fonts
│   │   └── main.tsx           # Typed entry point mounting React
│   ├── .env                   # Local Frontend env (VITE_API_URL)
│   ├── index.html             # SEO Meta details & dynamic description
│   ├── tsconfig.json          # TypeScript compilation settings
│   └── vite.config.js         # Vite configuration (Tailwind plugin)
├── .gitignore                 # Root GitIgnore (excludes node_modules, build folders, .env)
└── README.md                  # Unified Project Documentation
```

---

## ⚙️ Environment Configuration

To configure the project correctly for local development or production, set up the following environment variables in their respective folders:

### 1. Backend Environment Variables (`backend/.env`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | The port the backend server listens on | `5000` |
| `MONGO_URI` | MongoDB Atlas / Local Connection URI | `mongodb+srv://...` |

### 2. Frontend Environment Variables (`frontend/.env`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_API_URL` | Base URL of the API server (no trailing slash) | `http://localhost:5000` or `https://api.yourdomain.com` |

*(Note: If `VITE_API_URL` is omitted, the frontend automatically defaults to `http://localhost:5000`.)*

---

## 🛠️ Setup & Running Locally

To get both the frontend and backend running locally on your machine, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A running [MongoDB](https://www.mongodb.com/) database instance (local or Mongo Atlas)

### Step 1: Run the Backend API
1. Open a new terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Set up the backend configuration:
   Create a `.env` file inside `backend/` and configure your database URI (see [Environment Configuration](#1-backend-environment-variables-backendenv) above).
4. Run the API in development mode (starts hot-reloading with nodemon):
   ```bash
   npm run dev
   ```
   The backend server runs locally at: `http://localhost:5000`

### Step 2: Run the Frontend Client
1. Open a second terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Configure frontend variables:
   Create a `.env` file inside `frontend/` and add the backend base URL (see [Environment Configuration](#2-frontend-environment-variables-frontendenv) above).
4. Launch the client in development mode:
   ```bash
   npm run dev
   ```
   The frontend application runs locally at: `http://localhost:5173`

---

## ⚡ Production Build & Deployment

### Backend Deployment
When deploying the Express backend (e.g., to **Render**, **Heroku**, or **DigitalOcean**):
1. Point your platform to the `backend/` directory.
2. Set the `Build Command` to: `npm install`
3. Set the `Start Command` to: `node server.js` (or `npm start`)
4. Add your database connection string under the environment variable `MONGO_URI`.

### Frontend Deployment
To compile the React frontend into highly optimized static production-ready files:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Build the app:
   ```bash
   npm run build
   ```
3. Deploy the resulting `/dist` folder to your static hosting provider (e.g., **Netlify**, **Vercel**, or **GitHub Pages**). Make sure to set `VITE_API_URL` in your platform's environment variables to point to your live backend base URL.

---

## 🔒 Form Validation & API Details

### API Endpoint: `POST /api/enquiry`
Expects a JSON payload containing:
- `name`: string (required, minimum 2 characters)
- `email`: string (required, valid email format)
- `phone`: string (required, 7-15 digits only)

#### Response Statuses:
- **`201 Created`**: Lead successfully registered and saved to MongoDB.
- **`400 Bad Request`**: Validation failed on the server, returning a map of field-specific errors.
- **`500 Internal Server Error`**: Database connection failure or runtime error. The frontend handles this gracefully by presenting a user-friendly error dialog.
