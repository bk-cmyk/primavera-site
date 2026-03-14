import Link from 'next/link';

export default function ProjectsPage() {
  const apps = [
    {
      title: "Workout Generator",
      tech: "Python / Streamlit",
      description: "A new day. A new workout.",
      link: "https://bonnies-workouts.streamlit.app/" // Link to your Streamlit cloud URL
    },
    {
      title: "Holiday Deal Finder",
      tech: "Python / API Aggregator",
      description: "Find the best Black Friday deals across Amazon and Walmart.",
      link: "https://holiday-deal-finder.streamlit.app/"
    }
  ];

  const advisory = [
    "Advised $10M US personal care company on licensing contract to a multi-national CPG company.",
    "Advised $50M digital health startup in capital raising process.",
    "Identified new business opportunities for $2M yoga studio chain based in NYC.",
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <nav className="flex justify-end p-10 gap-x-12 text-sm font-medium uppercase tracking-widest">
        <Link href="/" className="hover:opacity-50">Home</Link>
        <Link href="/blog" className="hover:opacity-50">Blog</Link>
        <Link href="/contact" className="hover:opacity-50">Contact</Link>
      </nav>

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-16 tracking-tighter uppercase">Projects</h1>

        {/* Section 1: Built Apps (The Grid) */}
        <div className="mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Select Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {apps.map((app) => (
              <div key={app.title} className="group border-t border-gray-100 pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{app.title}</h3>
                  <span className="text-[10px] font-mono bg-gray-100 px-2 py-1 rounded uppercase tracking-tighter">
                    {app.tech}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {app.description}
                </p>
                <a href={app.link} className="text-sm font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                  VIEW PROJECT
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Advisory (The Resume Style) */}
        <div className="max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Advisory & Consulting</h2>
          <ul className="space-y-6">
            {advisory.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 text-gray-300">—</span>
                <p className="text-lg text-gray-800 leading-snug">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
