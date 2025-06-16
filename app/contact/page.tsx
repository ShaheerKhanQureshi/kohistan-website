"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-brown-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/contact-hero.jpg"
            alt="Contact us"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6 text-white">Contact Us</h1>
            <p className="body-lg text-brown-200">24/7 Car Rental Booking Support - We're here to help!</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="heading-lg mb-6 text-brown-900">Get in Touch</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Ready to book your rental car or have questions about our services? Contact us through any of the
              following methods.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="heading-sm mb-6 text-brown-900">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your rental needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="heading-sm mb-2 text-brown-900">Email Us</h3>
                  <p className="text-brown-600">
                    <Link href="mailto:shaheerkq@gmail.com" className="text-primary hover:underline">
                      shaheerkq@gmail.com
                    </Link>
                  </p>
                  <p className="mt-2 text-sm text-brown-500">We'll respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="heading-sm mb-2 text-brown-900">Our Locations</h3>
                  <div className="space-y-2 text-brown-600">
                    <p>📍 Karachi Office</p>
                    <p>📍 Lahore Office</p>
                    <p>📍 Islamabad Office</p>
                  </div>
                  <p className="mt-2 text-sm text-brown-500">Serving all three major cities</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="heading-sm mb-2 text-brown-900">Available 24/7</h3>
                  <p className="text-brown-600">Round-the-clock support for booking and assistance</p>
                  <p className="mt-2 text-sm text-brown-500">Emergency support always available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contacts */}
      <section className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-6 text-brown-900">WhatsApp Contacts</h2>
            <p className="body-lg max-w-3xl mx-auto text-brown-600">
              For instant support and quick booking, contact our team directly via WhatsApp.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto h-20 w-20 bg-brown-200 rounded-full overflow-hidden">
                  <Image
                    src="/images/team/sheraz-khan.jpg"
                    alt="Sheraz Khan Qureshi"
                    width={80}
                    height={80}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1 text-brown-900">Sheraz Khan Qureshi</h3>
                <p className="mb-4 text-sm text-primary">Founder & Owner</p>
                <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-primary gap-2">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp: 0300-3712954
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto h-20 w-20 bg-brown-200 rounded-full overflow-hidden">
                  <Image
                    src="/images/team/shaheer-khan.jpg"
                    alt="Shaheer Khan Qureshi"
                    width={80}
                    height={80}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1 text-brown-900">Shaheer Khan Qureshi</h3>
                <p className="mb-4 text-sm text-primary">Managing Director</p>
                <Link href="https://wa.me/923432603163" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-primary gap-2">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp: 0343-2603163
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto h-20 w-20 bg-brown-200 rounded-full overflow-hidden">
                  <Image
                    src="/images/team/shahmeer-khan.jpg"
                    alt="Shahmeer Khan Qureshi"
                    width={80}
                    height={80}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="heading-sm mb-1 text-brown-900">Shahmeer Khan Qureshi</h3>
                <p className="mb-4 text-sm text-primary">Head of Operations</p>
                <Link href="https://wa.me/923150029547" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-primary gap-2">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp: 0315-0029547
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-6 text-brown-900">Our Office & Service</h2>
            <p className="body-lg max-w-3xl mx-auto text-brown-600">
              Get a glimpse of our professional service and office locations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/contact/office-1.jpg"
                alt="Kohistan Traders Office"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="heading-sm">Professional Office</h3>
                <p className="body-sm">Modern facilities for customer service</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/contact/office-2.jpg"
                alt="Customer Service Team"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="heading-sm">Expert Team</h3>
                <p className="body-sm">Dedicated customer support staff</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/contact/customer-service.jpg"
                alt="24/7 Customer Support"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="heading-sm">24/7 Support</h3>
                <p className="body-sm">Always available for assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-6 text-brown-900">Our Locations</h2>
            <p className="body-lg max-w-3xl mx-auto text-brown-600">Find us in Karachi, Lahore, and Islamabad.</p>
          </div>

          <div className="h-96 w-full bg-brown-200 rounded-2xl shadow-xl">
            {/* Replace with actual Google Maps embed */}
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-brown-600">Google Maps will be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brown-800 to-brown-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-white">Ready to Book Your Ride?</h2>
          <p className="body-lg mb-8 mx-auto max-w-2xl text-brown-200">
            Contact us now for the best rates and availability.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="tel:+923003712954">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" /> Call Now
              </Button>
            </Link>
            <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                <MessageSquare className="h-5 w-5 mr-2" /> WhatsApp Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
