export default function About() {
  return (
    <div className="min-h-screen font-sans">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm px-10 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold m-0">Vinyasaurus Flex 🦕</h2>
        <nav>
          <a href="/" className="ml-6 no-underline text-black">Home</a>
          <a href="/about" className="ml-6 no-underline text-black font-semibold">About</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-white text-center px-10"
style={{ backgroundImage: "url('/yoga2.jpg')", backgroundSize: "cover", backgroundPosition: "top" }}
        style={{ backgroundImage: "url('/yoga2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">About</h1>
          <p className="text-white/80 text-sm">The story behind Vinyasaurus Flex</p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-2xl mx-auto px-6 py-20">

        {/* Creator */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">The Creator</p>
          <h2 className="text-3xl font-semibold mb-6">Hi, I'm Liz Draper.</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a yoga teacher whose personal practice consists of vinyasa, restorative, slow flow, and the
            humbling world of hand balances and inversions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through teaching, I've learned that the best sequences are often the ones that are built in the moment — 
            not the ones that are planned out in advance. Personally, I don't plan my flows. I teach based on intuition — 
            reading the energy in the room and letting the class unfold from there. A rigid sequence gets in the way of that. But...... If you prefer a more structured approach, 
            that’s what set sequences are for. You can just follow the  PDF, so your attention stays on teaching instead of planning.
          </p>
        </div>

        <div className="w-full h-px bg-gray-100 mb-16" />

        {/* Why I built this */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Why I Built This</p>
          <h2 className="text-2xl font-semibold mb-6">A loose plan, not a script.</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vinyasaurus Flex isn't about following a sequence to the letter. It's about having just enough of a roadmap that
            you can teach confidently off the dome — without losing your creativity or spontaneity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Think of it as a starting point, not a rulebook. You enter a peak pose and get a suggested flow. Where you
            actually go from there? That's still up to you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This tool is for teachers who trust their instincts but want a little more confidence standing at the front of
            the room — especially when the blank page of "what am I teaching today?" feels overwhelming.
          </p>
        </div>

        <div className="w-full h-px bg-gray-100 mb-16" />

        {/* Philosophy */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">The Philosophy</p>
          <h2 className="text-2xl font-semibold mb-6">Confidence, not choreography.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "🌊", title: "Flow with the room", body: "Energy shifts. Your sequence should too." },
              { emoji: "🤸", title: "Trust your body", body: "Inversions and hand balances teach you that the best breakthroughs happen when you let go of the plan." },
              { emoji: "✨", title: "Loose plans, full presence", body: "A rough draft gives you confidence. Intuition gives you magic." },
            ].map(({ emoji, title, body }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-5">
                <div className="text-2xl mb-3">{emoji}</div>
                <p className="text-sm font-semibold mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Footer CTA */}
      <section className="bg-gray-50 py-16 text-center px-6">
        <h3 className="text-xl font-semibold mb-2">Ready to build a flow?</h3>
        <p className="text-gray-500 text-sm mb-6">Pick a peak pose and let the sequence find you.</p>
        <a href="/#builder" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition">
          Build a sequence
        </a>
      </section>

    </div>
  );
}