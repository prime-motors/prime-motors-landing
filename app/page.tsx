export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl space-y-10 animate-fade-in">
        {/* Top label row (brought back) */}
        <div className="text-center space-y-1 text-[11px] sm:text-xs tracking-[0.18em] uppercase text-zinc-500">
          <div className="font-medium">Prime Motors SRL</div>
          <div className="text-zinc-600">Autoservice · Chișinău, Moldova</div>
        </div>

        {/* Center block */}
        <div className="text-center space-y-6">
          {/* Coming soon label */}
          <p className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-zinc-500">
            Coming Soon
          </p>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            We&apos;re preparing a new digital home.
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
            A refined online experience for Prime Motors SRL is on the way. Soon
            you&apos;ll be able to explore our services, schedule visits, and
            connect with our team directly from the website.
          </p>

          {/* Divider */}
          <div className="h-px w-24 mx-auto bg-zinc-800"></div>
        </div>

        {/* Contact section (still centered) */}
        <div className="text-center text-xs sm:text-sm text-zinc-500 space-y-2">
          <p>
            <span className="text-zinc-400">Phone</span>{' '}
            <a
              href="tel:+37360004260"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              +373 60004260
            </a>
          </p>

          <p>
            <span className="text-zinc-400">Email</span>{' '}
            <a
              href="mailto:contacts@primemotors.md"
              className="text-zinc-300 hover:text-white transition-colors break-all"
            >
              contacts@primemotors.md
            </a>
          </p>

          <p>
            <span className="text-zinc-400">Address</span>{' '}
            <a
              href="https://maps.app.goo.gl/6qYC9jaJzjPpNnup7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              str. Uzinelor 104, or. Chișinău, Moldova
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
