import { motion } from "framer-motion";

export default function App() {
  const name = "Ninavath Jairam Rathod";
  const title = "Full-Stack MERN Developer";
  const location = "Hyderabad, India";
  const phone = "+91 8688775130";
  const email = "jairamrathod92@gmail.com";
  const github = "https://github.com/";
  const linkedin = "https://www.linkedin.com/in/jairam-rathod-11b1692ab/";
  const resume = "/cvvvvv.pdf";

  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT",
    "HTML", "CSS", "JavaScript", "TypeScript", "Redux", "Docker",
    "CI/CD", "AWS", "Azure"
  ];

  const projects = [
    {
      title: "Full Stack MERN E-Commerce Website",
      description: "Complete e-commerce platform with authentication, cart, orders and payments.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: github
    },
    {
      title: "AI Blog App (MERN + Google Gemini API)",
      description: "Blog app with AI-powered content generation and summarization.",
      tech: ["MERN", "Google Gemini API"],
      link: github
    },
    {
      title: "Real-Time Chat App",
      description: "Chat app with real-time messaging using MERN + Socket.io.",
      tech: ["MERN", "Socket.io"],
      link: github
    }
  ];

  const experience = [
    {
      role: "Full-Stack Developer Intern",
      company: "UdrCrafts (Remote)",
      date: "Sept 2025",
      bullets: [
        "Built MERN apps with real-time features.",
        "Ensured 99.9% uptime with secure APIs.",
        "Improved MongoDB query performance by 45%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-5xl mx-auto">

        <header className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
            JR
          </div>

          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-indigo-600">{title}</p>
            <p className="text-sm text-gray-600">{location} • {phone}</p>

            <div className="flex gap-3 mt-2 text-sm underline">
              <a href={github}>GitHub</a>
              <a href={linkedin}>LinkedIn</a>
              <a href={resume}>Resume (PDF)</a>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-2 space-y-8">

            <section>
              <h2 className="text-xl font-bold mb-2">About</h2>
              <p>
                Aspiring Computer Science graduate with hands-on MERN experience and strong DSA skills.
                Passionate about building scalable web applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Projects</h2>
              <div className="space-y-4">
                {projects.map((p, i) => (
                  <div key={i} className="border p-4 rounded-lg bg-white shadow">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-gray-600">{p.description}</p>
                    <p className="text-sm text-gray-500">Tech: {p.tech.join(", ")}</p>
                    <a className="underline text-sm" href={p.link}>View Code</a>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Experience</h2>
              {experience.map((e, i) => (
                <div key={i} className="border p-4 rounded-lg bg-white shadow">
                  <h3 className="font-semibold">{e.role} — {e.company}</h3>
                  <p className="text-sm text-gray-500">{e.date}</p>
                  <ul className="list-disc ml-5 mt-2">
                    {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </section>

          </div>

          <aside className="space-y-6">

            <section className="border p-4 rounded-lg bg-white shadow">
              <h3 className="font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 border rounded-full text-xs">{s}</span>
                ))}
              </div>
            </section>

            <section className="border p-4 rounded-lg bg-white shadow">
              <h3 className="font-bold mb-2">Contact</h3>
              <p>Email: <a className="underline" href={`mailto:${email}`}>{email}</a></p>
              <p>Phone: {phone}</p>
            </section>

            <section className="border p-4 rounded-lg bg-white shadow">
              <h3 className="font-bold mb-2">Education</h3>
              <p>B.Tech — IIIT Nagpur (2022–2026) • CGPA: 5.60</p>
              <p className="mt-2">Higher Secondary — Narayana College • 61.40%</p>
            </section>

          </aside>
        </main>

      </div>
    </div>
  );
}
