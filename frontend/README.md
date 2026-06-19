# FutureMinds: Kids AI & Robotics Workshop - Frontend Client

This is the frontend client for the **FutureMinds** workshop landing page, built using **React (TypeScript)**, **Vite**, and **Tailwind CSS v4**. It features a modern, playful, and responsive design tailored for kids aged 8–14 and their parents.

---

## 🎨 Playful Design & Bento Cards

The user interface follows modern educational platforms (like Kidrove):
- **Cartoon/Playful Aesthetic**: Styled with thick outlines (`border-3 border-slate-800`), bubbly tag elements, and flat offsets cartoon shadows.
- **Bento Grid Cards**: Information cards (Details & Outcomes) are organized in columns and spans (`md:col-span-2`, `md:col-span-3`) for a clean, packed layout.
- **Soft Glassmorphism**: Cards use translucent overlay panels (`bg-white/60`) and blur filters (`backdrop-blur-lg`).
- **Interactive Emojis & Custom SVGs**: Features a floating robot mascot and custom kids-robot coding illustration on the hero header.

---

## 📁 Component Structure

```
src/
├── components/
│   ├── Navbar.tsx     # Sticky glassmorphic navbar with logo
│   ├── Hero.tsx       # Heading, CTA buttons, and vector illustration
│   ├── Details.tsx    # Bento layout presenting age, fee, mode, date metrics
│   ├── Outcomes.tsx   # Bento layout presenting curriculum highlights
│   ├── FAQ.tsx        # Accordion toggles for parent inquiries
│   ├── RegisterForm.tsx # Validation form with loading state and API posting
│   └── Footer.tsx     # Branding links & support emails
├── App.tsx            # Root framework tieing modules together
├── index.css          # Playful variables, Google Fonts (Nunito/Quicksand)
└── main.tsx           # React bootstrap entry point
```

---

## 🛠️ Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
By default, the form targets the local backend server running on `http://localhost:5000/api/enquiry`. If you host your backend at a different address, create a `.env` file in this directory:
```env
VITE_API_URL=https://your-backend-api.com/api/enquiry
```

### 3. Run Development Server
```bash
npm run dev
```
The client dev server will start at [http://localhost:5173](http://localhost:5173).

---

## 📦 Production Bundling

To compile TypeScript and bundle assets for static web hosting (Vercel, Netlify, etc.):
```bash
npm run build
```
This builds optimized code in the `dist/` folder.
