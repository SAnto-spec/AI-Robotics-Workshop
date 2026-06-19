# FutureMinds: Kids AI & Robotics Summer Workshop Landing Page

FutureMinds is a premium, responsive, and highly interactive workshop landing page designed for children aged 8–14 and their parents. It is built using modern **React (TypeScript)**, **Vite**, and **Tailwind CSS v4** on the frontend, and backed by a robust **Express.js API** connected to **MongoDB** on the backend.

---

## 🎨 Design System

Inspired by modern, child-friendly educational platforms like Kidrove, the application features:
- **Cartoon/Playful Theme**: Thick outline borders (`border-3 border-slate-800`), bold rounded typography (Nunito & Quicksand fonts), and offset flat drop shadows.
- **Bento Grid Cards**: Key statistics and learning outcomes are organized in varying card spans (`md:col-span-2`, `md:col-span-3`), creating a packed visual layout.
- **Soft Glassmorphism Accents**: Soft transparent panel backgrounds (`bg-white/60`) with backdrop blurring (`backdrop-blur-lg` / `backdrop-blur-xl`) and thin translucent highlights.
- **Playful Custom SVGs**: Responsive robot mascots and floating STEM/AI icons.

---

## 📁 Folder Structure

```
c:/Workshop_web/
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
│   ├── index.html             # SEO Meta details & dynamic description
│   ├── tsconfig.json          # TypeScript compilation settings
│   └── vite.config.js         # Vite configuration (Tailwind plugin)
└── backend/                   # Express.js REST API
    ├── config/
    │   └── db.js              # Mongoose DB connector with error logs
    ├── models/
    │   └── Enquiry.js         # Mongoose Schema mapping leads
    ├── server.js              # CORS headers, field checks & REST endpoint
    └── .env                   # Environment keys (PORT, Database URI)
```

---

## 🛠️ Setup & Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A running [MongoDB](https://www.mongodb.com/) instance (local or Atlas cluster)

### 1. Backend Server Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create or configure your `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_uri
   ```
4. Start the server in development mode (with hot-reloading):
   ```bash
   npm run dev
   ```
   The backend will be running at [http://localhost:5000](http://localhost:5000).

### 2. Frontend Client Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables to point to the backend server:
   - Create a `.env` file in the `frontend` folder:
     ```env
     VITE_API_URL=http://localhost:5000
     ```
     *(Note: `VITE_API_URL` should point to the base URL of the API. If omitted, it defaults to `http://localhost:5000`.)*
4. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be running at [http://localhost:5173](http://localhost:5173).

---

## ⚡ Build for Production

To compile and bundle the frontend into optimized, production-ready assets:
```bash
cd frontend
npm run build
```
This runs TypeScript checking (`tsc`) and compiles the assets using Vite into the `dist/` directory, ready to be deployed on static hosting providers like Vercel or Netlify.

---

## 🔒 Form Validation & API Details

### API Endpoint: `POST /api/enquiry`
Expects a JSON payload containing:
- `name`: string (required, min 2 characters)
- `email`: string (required, valid email pattern)
- `phone`: string (required, 7-15 digits only)

#### Response States:
- **`201 Created`**: Lead successfully registered and saved to MongoDB.
- **`400 Bad Request`**: Validation failed on the server, returning a map of field-specific errors.
- **`500 Internal Server Error`**: Database connection failure or runtime error. The frontend handles this gracefully by presenting a user-friendly error dialog.
