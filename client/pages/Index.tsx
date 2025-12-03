export default function Index() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="flex flex-col items-center w-full px-4 md:px-0">
        <div className="w-[450px] max-w-[90vw] rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-6 shadow-xl md:px-8 md:py-10">
          <div className="mb-6 flex justify-center">
            <svg
              className="h-12 w-12"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="6"
                width="36"
                height="36"
                rx="4"
                stroke="url(#gradient)"
                strokeWidth="2"
              />
              <circle
                cx="24"
                cy="24"
                r="8"
                fill="url(#gradient)"
                opacity="0.2"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="mb-2 text-center text-base font-medium text-white md:text-xl">
            Setting up{" "}
            <a
              href="https://builder.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Builder.io
            </a>{" "}
            environment
          </h1>

          <p className="mb-6 text-center text-sm text-gray-400">
            This can take up to a few minutes
          </p>

          <div className="mb-6 flex justify-center gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/60"
              >
                {i === 0 && (
                  <svg
                    className="animate-spin h-5 w-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="16"
                      strokeDashoffset="4"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400">Initializing…</p>
        </div>

        <div className="mt-4 w-[450px] max-w-[90vw] rounded-xl border border-neutral-800 bg-neutral-900/80 px-6 py-4 shadow-xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden h-8 w-8 shrink-0 rounded-full border border-purple-500/40 bg-purple-500/20 flex items-center justify-center text-purple-300 md:flex">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM3.5 12a7 7 0 1113 0H3.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-white">Get 200 bonus credits</p>
                <p className="text-sm text-gray-400">
                  Sign up now and receive 200 extra credits when you upgrade to
                  the Pro plan.
                </p>
              </div>
            </div>
            <a
              href="https://www.builder.io/fusion?fus_ref=8b4dbadaf2844e6281b6b58078951b82"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded border border-purple-500/50 px-3 py-2 font-medium text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-200"
            >
              Start building
            </a>
          </div>
        </div>

        <div className="mt-4 h-screen w-full max-w-[90vw]">
          <iframe
            src="about:blank"
            title="8b4dbadaf2844e6281b6b58078951b82-nova-world - Builder.io Content"
            className="h-full w-full border-0"
            allowFullScreen
            loading="eager"
            style={{ opacity: 1, transition: "opacity 0.3s ease-in-out" }}
          />
        </div>
      </div>
    </div>
  );
}
