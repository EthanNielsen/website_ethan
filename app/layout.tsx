import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethan Nielsen | Portfolio",
  description: "Professional portfolio of Ethan Nielsen - Engineering, Business, and Innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* No need to include the Tableau script here as we're loading it dynamically */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      // Check if we need to redirect
      (function() {
        var redirect = new URLSearchParams(window.location.search).get('redirect');
        if (redirect) {
          history.replaceState(null, null, redirect);
        }
      })();
    `,
          }}
        />
      </head>
      <body className={inter.className}>
        <header className="bg-slate-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Ethan Nielsen</div>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-blue-300">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-800 text-white p-6 mt-10">
          <div className="container mx-auto">
            <div className="flex justify-center mb-4">
              <a
                href="https://www.linkedin.com/in/ethan-nielsen-78780524b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-300 transition-colors"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <p className="text-center">© {new Date().getFullYear()} Ethan Nielsen. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
