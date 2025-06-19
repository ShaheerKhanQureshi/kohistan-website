"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, MapPin, X, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl rounded-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        <CardHeader className="relative bg-gradient-to-r from-brown-800 to-brown-900 text-white rounded-t-2xl">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full focus-ring"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <CardTitle className="heading-md text-white">Contact Kohistan Traders</CardTitle>
          <p className="body-md text-brown-200">Get in touch with us for immediate assistance</p>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Quick Contact */}
            <div>
              <h3 className="heading-sm text-brown-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                {/* Call */}
                <Link href="tel:+923003712954" className="block interactive">
                  <div className="flex items-center p-4 rounded-xl border border-brown-200 hover:border-primary hover:bg-brown-50 transition-all duration-300 group card-hover">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brown-900 font-display">Call Now</p>
                      <p className="text-brown-600 font-sans">0300-3712954</p>
                    </div>
                  </div>
                </Link>

                {/* WhatsApp */}
                <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer" className="block interactive">
                  <div className="flex items-center p-4 rounded-xl border border-brown-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group card-hover">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brown-900 font-display">WhatsApp</p>
                      <p className="text-brown-600 font-sans">Chat with us instantly</p>
                    </div>
                  </div>
                </Link>

                {/* Email */}
                <Link href="mailto:shaheerkq@gmail.com" className="block interactive">
                  <div className="flex items-center p-4 rounded-xl border border-brown-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group card-hover">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brown-900 font-display">Email Us</p>
                      <p className="text-brown-600 font-sans">shaheerkq@gmail.com</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-brown-50 to-brown-100">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="font-semibold text-brown-900 font-display">Available 24/7</span>
                </div>
                <p className="text-brown-600 text-sm font-sans">Round-the-clock support for booking and assistance</p>
              </div>
            </div>

            {/* Team Contacts */}
            <div>
              <h3 className="heading-sm text-brown-900 mb-6">Our Team</h3>
              <div className="space-y-4">
                {/* Sheraz */}
                <div className="p-4 rounded-xl border border-brown-200 card-premium">
                  <div className="flex items-center mb-3">
                    <div className="h-12 w-12 bg-brown-200 rounded-full mr-3 overflow-hidden">
                      <Image
                        src="/images/team/sheraz-khan.jpg"
                        alt="Sheraz Khan Qureshi"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown-900 font-display">Sheraz Khan Qureshi</h4>
                      <p className="text-sm text-primary font-sans">Founder & Owner</p>
                    </div>
                  </div>
                  <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-white rounded-full font-sans">
                      <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp: 0300-3712954
                    </Button>
                  </Link>
                </div>

                {/* Shaheer */}
                <div className="p-4 rounded-xl border border-brown-200 card-premium">
                  <div className="flex items-center mb-3">
                    <div className="h-12 w-12 bg-brown-200 rounded-full mr-3 overflow-hidden">
                      <Image
                        src="/images/team/shaheer-khan.jpg"
                        alt="Shaheer Khan Qureshi"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown-900 font-display">Shaheer Khan Qureshi</h4>
                      <p className="text-sm text-primary font-sans">Managing Director</p>
                    </div>
                  </div>
                  <Link href="https://wa.me/923432603163" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-white rounded-full font-sans">
                      <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp: 0343-2603163
                    </Button>
                  </Link>
                </div>

                {/* Shahmeer */}
                <div className="p-4 rounded-xl border border-brown-200 card-premium">
                  <div className="flex items-center mb-3">
                    <div className="h-12 w-12 bg-brown-200 rounded-full mr-3 overflow-hidden">
                      <Image
                        src="/images/team/shahmeer-khan.jpg"
                        alt="Shahmeer Khan Qureshi"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown-900 font-display">Shahmeer Khan Qureshi</h4>
                      <p className="text-sm text-primary font-sans">Head of Operations</p>
                    </div>
                  </div>
                  <Link href="https://wa.me/923150029547" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-white rounded-full font-sans">
                      <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp: 0315-0029547
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-brown-50 to-brown-100">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              <h3 className="heading-sm text-brown-900">Our Locations</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <p className="font-semibold text-brown-900 font-display">Karachi</p>
                <p className="text-sm text-brown-600 font-sans">Main Operations Hub</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-brown-900 font-display">Lahore</p>
                <p className="text-sm text-brown-600 font-sans">Northern Operations</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-brown-900 font-display">Islamabad</p>
                <p className="text-sm text-brown-600 font-sans">Capital Region</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
