import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex h-16 items-center justify-center">
            <div className="flex space-x-8">
              <a href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
                Home
              </a>
              <a href="/about" className="text-sm font-medium transition-colors hover:text-blue-600">
                About
              </a>
              <a href="/notes" className="text-sm font-medium transition-colors hover:text-blue-600">
                Notes
              </a>
              <a href="/projects" className="text-sm font-medium transition-colors hover:text-blue-600">
                Projects
              </a>
              <a href="/contact" className="text-sm font-medium transition-colors hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">Software Engineer & Developer</p>
      </main>
    </div>
  );
}
