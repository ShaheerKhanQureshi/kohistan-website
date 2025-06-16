import Link from "next/link"
import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923003712954?text=Hello!%20I'd%20like%20to%20book%20a%20car%20rental%20with%20Kohistan%20Traders."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare className="h-8 w-8" />
      <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 animate-pulse"></div>
    </Link>
  )
}
