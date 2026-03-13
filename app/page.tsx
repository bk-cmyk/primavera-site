import Link from 'next/link';

export default function Home() {
  return (
    // 'min-h-screen' ensures the blue goes all the way to the bottom of the window
    <main className="min-h-screen w-full bg-[#0000FF] flex flex-col text-white font-sans">
      
      {/* Navigation Tabs */}
  <nav className="w-full p-8 flex justify-end gap-8 text-sm font-medium tracking-widest uppercase"> 
  <Link href="/projects" className="text-white hover:opacity-70">PROJECTS</Link>
  <Link href="/blog" className="text-white hover:opacity-70">BLOG</Link>
  <Link href="/contact" className="text-white hover:opacity-70">CONTACT</Link>
</nav>

      {/* Hero Content - Centered vertically and horizontally */}
      <div className="flex-grow flex flex-col justify-center px-10 md:px-20 max-w-6xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Primavera Ventures
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed opacity-90">
          Building and advising consumer and eCommerce companies 
        </p>
      </div>

    </main>
  );
}