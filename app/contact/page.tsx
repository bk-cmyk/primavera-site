import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <nav className="flex justify-end p-10 gap-x-12 text-sm font-medium uppercase tracking-widest">
        <Link href="/" className="hover:opacity-50">Home</Link>
        <Link href="/projects" className="hover:opacity-50">Projects</Link>
        <Link href="/blog" className="hover:opacity-50">Blog</Link>
      </nav>

      <section className="max-w-2xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-4 tracking-tighter">Contact</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Interested in collaborating? Reach out below.
        </p>

        {/* The Contact Form */}
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          {/* This hidden input connects the form to your email */}
          <input type="hidden" name="access_key" value="YOUR64bdf2e3-4f02-4df2-b08d-d38714dbc93b" />
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
            <textarea 
              name="message" 
              required 
              rows={4}
              className="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors resize-none"
              placeholder="How can Primavera help?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}