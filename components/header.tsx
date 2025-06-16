"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Menu, X, MessageSquare } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import ContactModal from "@/components/contact-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Fleet", href: "/fleet" },
    { name: "Tours", href: "/tours" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-brown-900/95 backdrop-blur-md border-b border-brown-700 shadow-lg"
            : "bg-brown-900/90 backdrop-blur-sm border-b border-brown-700/50",
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="h-20 w-auto flex items-center pr-4">
                  <Image
                    src="/images/logo-kt.png"
                    alt="Kohistan Traders Logo"
                    width={100}
                    height={100}
                    className="object-contain max-h-16"
                    priority
                  />
                </div>


                {/* <div>
                  <span className="text-2xl font-bold text-white font-display">Kohistan</span>
                  <span className="block text-sm text-primary-300 font-sans tracking-wider -mt-1 uppercase">
                    Traders
                  </span>
                </div> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary-300 relative font-sans py-2 px-1 group",
                  pathname === item.href ? "text-primary-400" : "text-brown-200",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 rounded-full transition-all duration-300 group-hover:w-full",
                    pathname === item.href && "w-full",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => setIsContactModalOpen(true)}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-full font-sans transition-all duration-300 focus-ring"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary-600 text-white rounded-full font-sans shadow-lg hover:shadow-xl transition-all duration-300 focus-ring"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Only visible on smaller screens */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 focus-ring">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-brown-900 border-brown-700">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-brown-700 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 relative">
                      <Image
                        src="/images/logo-kt.png"
                        alt="Kohistan Traders Logo"
                        width={32}
                        height={32}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold text-white font-display">Kohistan Traders</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "px-4 py-3 text-lg font-medium transition-all duration-300 hover:text-primary-300 hover:bg-white/5 rounded-lg font-sans",
                        pathname === item.href ? "text-primary-400 bg-white/10" : "text-brown-200",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="mt-auto space-y-4 border-t border-brown-700 py-6">
                  <Button
                    onClick={() => {
                      setIsOpen(false)
                      setIsContactModalOpen(true)
                    }}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full font-sans"
                  >
                    <Phone className="h-4 w-4 mr-2" /> Call Now
                  </Button>
                  <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary-600 text-white rounded-full font-sans">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
