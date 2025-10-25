# 🚀 Learning Path Recommender

An **AI-powered web application** that generates personalized **learning roadmaps** for tech careers — complete with skills, phases, and curated learning resources.

Users can:
- 🎯 Generate a learning roadmap for any career (e.g., Frontend Developer, AI Engineer)
- 💾 Save plans locally to track later
- ✅ Mark completed resources to track progress
- 🗑️ Delete saved plans with a modern hover animation
- 🌙 Enjoy a sleek, Apple-inspired dark theme with smooth UI transitions

---

## 🧩 Tech Stack

**Frontend**
- ⚛️ React (Vite)
- 🎨 TailwindCSS for styling
- 🖱️ Lucide Icons for visuals and animations

**Backend**
- 🟢 Node.js + Express
- 🤖 OpenAI API (`gpt-4o-mini`)
- 💾 LocalStorage for client-side persistence

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/Learning-Path-Recommender.git
cd Learning-Path-Recommender

2. Install dependencies

npm install
cd server && npm install

3. Configure your OpenAI API key

Create a .env file inside the /server directory:

OPENAI_API_KEY=your_api_key_here

4. Run the backend

cd server
npm run dev

➡ Runs on: http://localhost:5000
5. Run the frontend

cd ..
npm run dev

➡ Access the app at: http://localhost:5173
🧠 Features
Feature	Description
AI-Powered Roadmap	Uses OpenAI to create structured learning paths for any role
Phase System	Breaks roadmap into phases with topics, skills, and resources
Save to LocalStorage	Save and revisit plans without a database
Progress Tracking	Check off resources as you complete them
Modern UI	Inspired by Apple.com with clean, rounded panels
Delete Plans	Remove saved plans using a sleek hover-based trash icon
📂 Folder Structure

Learning-Path-Recommender/
│
├── client/                   # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Roadmap.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Saved.jsx
│   │   │   └── MyPlans.jsx
│   │   └── App.jsx
│   └── index.css
│
├── server/                   # Node.js Backend
│   ├── index.js
│   ├── routes/
│   │   └── recommend.js
│   ├── utils/
│   │   └── openai.js
│   └── .env
│
└── README.md

🖥️ Example Output

Input Example

    Role: Frontend Developer
    Experience: 1 year
    Focus: UI/UX Design

AI Output

{
  "career": "Frontend Developer",
  "summary": "A structured roadmap for advancing from beginner to mid-level frontend development.",
  "phases": [
    {
      "title": "Foundations",
      "durationWeeks": 6,
      "skills": ["HTML", "CSS", "JavaScript Basics"],
      "resources": [
        { "name": "MDN Web Docs", "link": "https://developer.mozilla.org" },
        { "name": "freeCodeCamp Frontend Guide", "link": "https://freecodecamp.org" }
      ]
    }
  ]
}

🎨 Design Highlights

    Dark Apple-inspired aesthetic (#0b1020 / #111938)

    Animated buttons and hover effects

    Progress bars and checkable items

    Cursive font (Recursive) for resource links

    Rounded panels with shadow depth

🛠️ Future Improvements

    🔐 Add user authentication (save plans in the cloud)

    📊 Dashboard analytics for progress tracking

    🌍 Shareable roadmap links

    💡 Role suggestions & AI tips

🧰 Requirements

    Node.js v18+

    OpenAI API key

    Modern browser (Chrome, Edge, Firefox)

🖤 Author

Abinan Jeyachandran
📍 Canada
💼 Software Developer
🌐 GitHub
