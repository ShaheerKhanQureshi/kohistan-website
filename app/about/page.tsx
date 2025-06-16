import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "About Kohistan Traders – Trusted Car Rental Company in Pakistan",
  description:
    "Learn more about Kohistan Traders – a leading car rental company with 10+ years of service, dedicated to quality, customer satisfaction, and convenience.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brown-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/about-hero.jpg"
            alt="About Kohistan Traders"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6 text-white">About Kohistan Traders</h1>
            <p className="body-lg text-brown-200">A decade of excellence in car rental services across Pakistan</p>
          </div>
        </div>
      </section>

      {/* About Content with Images */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading-lg mb-8 text-brown-900">Our Story</h2>
              <div className="mb-12 space-y-6 text-brown-700">
                <p className="body-lg">
                  Established over a decade ago, Kohistan Traders has been delivering reliable, secure, and premium Rent
                  a Car services to clients across Karachi, Lahore, and Islamabad.
                </p>
                <p className="body-lg">
                  We believe in offering our customers a smooth and stress-free experience, whether they are renting for
                  a day or a year. Our commitment to customer satisfaction and quality service makes us a top choice
                  among travelers, businesses, and families.
                </p>
                <p className="body-lg">
                  With a diverse fleet ranging from economical daily drivers to luxury vehicles for special occasions,
                  we cater to all transportation needs with professionalism and care.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about/company-story.jpg"
                alt="Kohistan Traders company story"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/images/about/mission-vision.jpg"
                alt="Our mission and vision"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-lg mb-8 text-brown-900">Our Mission</h2>
              <div className="space-y-6 text-brown-700">
                <p className="body-lg">
                  At Kohistan Traders, our mission is to provide safe, reliable, and affordable transportation solutions
                  that exceed customer expectations. We strive to:
                </p>
                <ul className="ml-6 list-disc space-y-3 body-md">
                  <li>Maintain the highest standards of vehicle quality and cleanliness</li>
                  <li>Offer transparent pricing with no hidden charges</li>
                  <li>Provide professional and courteous service at all times</li>
                  <li>Continuously expand our fleet to meet evolving customer needs</li>
                  <li>Support tourism and business travel across Pakistan with specialized services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="mt-20 text-center">
            <Image
              src="/images/about/why-choose-us.jpg"
              alt="Why choose Kohistan Traders"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </div> */}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg mb-12 text-center text-brown-900">Leadership Spotlight</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-64 bg-brown-200">
                <Image
                  src="/images/team/sheraz-khan.jpg"
                  alt="Sheraz Khan Qureshi"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="heading-sm mb-2 text-brown-900">Sheraz Khan Qureshi</h3>
                <p className="mb-4 text-primary font-medium">Founder & Owner</p>
                <p className="mb-6 body-sm text-brown-600">
                  Visionary behind Kohistan Traders, bringing premium car rental services to your doorstep.
                </p>
                <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-primary">
                    <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-64 bg-brown-200">
                <Image
                  src="/images/team/shaheer-khan.jpg"
                  alt="Shaheer Khan Qureshi"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="heading-sm mb-2 text-brown-900">Shaheer Khan Qureshi</h3>
                <p className="mb-4 text-primary font-medium">Managing Director</p>
                <p className="mb-6 body-sm text-brown-600">
                  Driving digital excellence and operational transparency for a seamless experience.
                </p>
                <Link href="https://wa.me/923432603163" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-primary">
                    <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-64 bg-brown-200">
                <Image
                  src="/images/team/shahmeer-khan.jpg"
                  alt="Shahmeer Khan Qureshi"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="heading-sm mb-2 text-brown-900">Shahmeer Khan Qureshi</h3>
                <p className="mb-4 text-primary font-medium">Head of Operations</p>
                <p className="mb-6 body-sm text-brown-600">
                  Handling operations nationwide to ensure timely, safe, and quality service delivery.
                </p>
                <Link href="https://wa.me/923150029547" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-primary">
                    <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg mb-12 text-center text-brown-900">Why Choose Kohistan Traders</h2>

          {/* Image inside section */}
          <div className="mb-12 flex justify-center">
            <Image
              src="/images/about/why-choose-us.jpg"
              alt="Why choose Kohistan Traders"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl w-full max-w-4xl"
            />
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-4 text-brown-900">Experience</h3>
              <p className="body-sm text-brown-600">
                Over 10 years of experience in the car rental industry, serving thousands of satisfied customers.
              </p>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-4 text-brown-900">Quality Fleet</h3>
              <p className="body-sm text-brown-600">
                Well-maintained vehicles ranging from economy to luxury, regularly serviced for safety and comfort.
              </p>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-4 text-brown-900">Nationwide Presence</h3>
              <p className="body-sm text-brown-600">
                Operating in three major cities - Karachi, Lahore, and Islamabad - with plans for further expansion.
              </p>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-4 text-brown-900">Professional Drivers</h3>
              <p className="body-sm text-brown-600">
                Experienced, vetted, and courteous drivers who know the roads and prioritize your safety.
              </p>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-4 text-brown-900">Flexible Options</h3>
              <p className="body-sm text-brown-600">
                From hourly rentals to yearly contracts, with or without drivers - tailored to your specific needs.
              </p>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-4 text-brown-900">24/7 Support</h3>
              <p className="body-sm text-brown-600">
                Round-the-clock customer service to assist you with bookings, inquiries, or roadside assistance.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brown-800 to-brown-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-white">Ready to Experience Our Service?</h2>
          <p className="body-lg mb-8 text-brown-200">Contact us today to discuss your transportation needs.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
            <Link href="/fleet">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                View Our Fleet
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
