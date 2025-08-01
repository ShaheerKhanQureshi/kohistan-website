import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-brown-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
               <div className="container mx-auto flex h-20 items-center justify-between px-4">
              <div className="flex items-center pr-4">
              <Image
                src="/images/logo-kt.png"
                 alt="Kohistan Traders Logo"
                   width={160}
                    height={160}
                  className="object-contain w-[140px] h-auto"
                  priority
  />
</div>

            {/* <div>
                <span className="text-2xl font-bold text-white">Kohistan</span>
                <span className="block text-sm text-primary-300 -mt-1">TRADERS</span>
              </div> */}
            </div>
            <p className="mb-6 text-brown-300 max-w-md">
              Your trusted premium car rental partner across Pakistan for over a decade. Experience luxury, comfort, and
              reliability with every journey.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-brown-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-brown-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-brown-300 hover:text-primary-400 hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brown-300 hover:text-primary-400 hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-brown-300 hover:text-primary-400 hover:underline transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-brown-300 hover:text-primary-400 hover:underline transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-brown-300 hover:text-primary-400 hover:underline transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brown-300 hover:text-primary-400 hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-brown-300 font-medium">Sheraz Khan Qureshi</p>
                  <Link
                    href="tel:+923003712954"
                    className="text-brown-400 hover:text-primary-400 hover:underline transition-colors"
                  >
                    0300-3712954
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare className="mr-3 h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-brown-300 font-medium">WhatsApp Support</p>
                  <Link
                    href="https://wa.me/923003712954"
                    className="text-brown-400 hover:text-primary-400 hover:underline transition-colors"
                  >
                    Chat with us
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary-400 mt-0.5" />
                <Link
                  href="mailto:shaheerkq@gmail.com"
                  className="text-brown-400 hover:text-primary-400 hover:underline transition-colors"
                >
                  shaheerkq@gmail.com
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-brown-300">Karachi • Lahore • Islamabad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brown-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-brown-400">
              &copy; {new Date().getFullYear()} Kohistan Traders. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-brown-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-brown-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
