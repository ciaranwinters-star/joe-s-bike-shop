import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Joe's Bike Shop | Arklow, Co. Wicklow",
  description: "Joe's Bike Shop serving Arklow, Co. Wicklow. Call us on 085 871 2671.",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#1A3A5C" }} className="text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">Joe's Bike Shop</a>
            <nav className="hidden md:flex gap-8 text-sm">
          <a href="/" className="hover:text-[#E87722] transition-colors font-medium">Home</a>
            </nav>
            <a href="tel:0858712671" style={{ background: "#E87722" }} className="text-white px-4 py-2 rounded font-semibold text-sm hover:opacity-90 transition">
              085 871 2671
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ background: "#1A3A5C" }} className="text-white py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm opacity-80">
            <p className="font-semibold mb-1">Joe's Bike Shop</p>
            <p>Arklow, Co. Wicklow &bull; 085 871 2671</p>
            <p className="mt-2 opacity-60">&copy; {new Date().getFullYear()} Joe's Bike Shop. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
