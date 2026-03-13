import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="flex justify-end p-10 gap-x-12 text-sm font-medium uppercase tracking-widest">
        <Link href="/" className="hover:opacity-50">Home</Link>
        <Link href="/projects" className="hover:opacity-50">Projects</Link>
        <Link href="/contact" className="hover:opacity-50">Contact</Link>
      </nav>

      {/* Content */}
      <section className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tighter">Blog</h1>
        <p className="mb-10 text-gray-600">Building and advising companies in consumer and retail.</p>
        
        {/* Simple iframe for Substack */}
        <div className="w-full border border-gray-100 rounded-lg overflow-hidden">
          <iframe 
            src="https://primaveranotes.substack.com/embed" 
            width="100%" 
            height="320" 
            style={{ border: 0, background: 'white' }}
          ></iframe>
        </div>
      </section>
    </main>
  );
}