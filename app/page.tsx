export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Sensitive Data From Leaking Into AI Context Windows
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Prompt Context Leak Blocker intercepts your AI API calls, scans every prompt for PII, API keys, and secrets, then blocks or sanitizes before the request ever reaches the model.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $39/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["PII Detection", "Catches emails, SSNs, phone numbers, addresses"],
            ["Secret Scanning", "Blocks API keys, tokens, and credentials"],
            ["Proxy Integration", "Drop-in replacement for your AI provider endpoint"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt scans",
              "Configurable detection rules",
              "Block or sanitize mode",
              "Real-time monitoring dashboard",
              "Supports OpenAI, Anthropic, Gemini",
              "Email alerts on blocked attempts"
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Protecting Prompts
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "How does it integrate with my existing AI calls?",
              "Point your AI SDK base URL to our proxy endpoint. No other code changes needed — we intercept, scan, and forward (or block) transparently."
            ],
            [
              "What sensitive data patterns does it detect?",
              "Out of the box: emails, phone numbers, SSNs, credit card numbers, AWS/GCP/OpenAI API keys, JWTs, private keys, and custom regex rules you define."
            ],
            [
              "What happens when sensitive data is detected?",
              "You choose: block the request entirely and return an error, or sanitize by replacing sensitive values with safe placeholders before forwarding to the AI provider."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Prompt Context Leak Blocker. All rights reserved.
      </footer>
    </main>
  );
}
