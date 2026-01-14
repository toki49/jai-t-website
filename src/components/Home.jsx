function Home() {
  return (
    <div className="flex-1 bg-[#f5f5f0] px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col gap-8">

        {/* Page Title */}
        <h1
          className="
            text-center font-bold text-gray-800
            text-[clamp(1.25rem,3.5vw,2.1rem)]
            leading-tight
            break-words
          "
        >
          Classifying real-world deployments of AI in the criminal justice system.
        </h1>

        {/* Stat Boxes */}
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl mx-auto">
          <div className="flex-1 min-w-0 rounded-xl border-2 border-gray-700 bg-white px-5 py-4 text-center">
            <div className="font-semibold text-gray-800">
              City Count
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Total number of cities tracked in the JAI-T database
            </p>
            <div className="mt-2 text-3xl font-bold text-[#0a3d62]">
              100
            </div>
          </div>

          <div className="flex-1 min-w-0 rounded-xl border-2 border-gray-700 bg-white px-5 py-4 text-center">
            <div className="font-semibold text-gray-800">
              Application Count
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Total number of AI tools found in the criminal justice system
            </p>
            <div className="mt-2 text-3xl font-bold text-[#0a3d62]">
              215
            </div>
          </div>
        </div>

        {/* Datawrapper Map */}
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-sm">
          <div className="relative w-full aspect-[4/3]">
            <iframe
              src="https://datawrapper.dwcdn.net/YbVsD/9/"
              title="JAI-T Data Visualization"
              className="absolute inset-0 w-full h-full border-0"
              scrolling="no"
              allowFullScreen
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto text-gray-800 text-[1.05rem] leading-relaxed space-y-3">
          <p>
            The <strong>Justice and Artificial Intelligence Tracker (JAI-T)</strong> is a centralized resource that documents use cases of AI-driven technologies within the criminal justice system. Developed by the{" "}
            <a
              href="https://mccourt.georgetown.edu/evidence-for-justice-lab/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Evidence for Justice Lab at Georgetown University
            </a>,
            JAI-T tracks how law enforcement agencies, court systems, and correctional institutions are exploring and applying AI tools—from facial recognition to public-facing chatbots.
          </p>

          <p>
            JAI-T promotes transparency, enhances public understanding, and spotlights real-world justice technology deployments.
          </p>
          <div className="max-w-5xl mx-auto text-gray-800 text-[1.05rem] leading-relaxed space-y-3">
            <p>This is the <strong>January 2026 version </strong>of the JAI-T Tracker. Updates with new use cases and expanded details will be released over time - so stay tuned!</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
