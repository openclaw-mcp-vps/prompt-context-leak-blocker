import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Context Leak Blocker — Prevent AI Prompt Data Leaks",
  description: "Intercept AI API calls, scan prompts for PII and secrets, and block or sanitize sensitive data before it reaches AI providers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="548b8aab-70bc-4120-a769-09b076413e13"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
