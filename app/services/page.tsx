import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Rent a Car with or without Driver | Kohistan Traders Pakistan",
  description:
    "Browse Kohistan Traders' car rental services in Pakistan. Economy to luxury, daily to yearly, weddings to tours – we've got you covered.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brown-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/services-hero.jpg"
            alt="Car rental services"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6 text-white">Our Car Rental Services</h1>
            <p className="body-lg text-brown-200">Comprehensive transportation solutions for every need</p>
          </div>
        </div>
      </section>

      {/* Flexible Rental Plans */}
      <section id="rental-plans" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="heading-lg mb-6 text-brown-900">Flexible Rental Plans</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Whether you need a vehicle for a few hours or several months, we have rental plans designed to fit your
              schedule and budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-4 text-brown-900">Daily Rentals</h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Minimum 10 hours rental period</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">
                      Perfect for day trips, business meetings, or airport transfers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Available with or without driver</span>
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20daily%20car%20rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-4 text-brown-900">Weekly Rentals</h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Cost-effective solution for extended stays</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Ideal for business trips or family vacations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Flexible pickup and drop-off options</span>
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20weekly%20car%20rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-4 text-brown-900">Monthly & Yearly</h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Significant discounts for long-term commitments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Corporate contracts with customized terms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm text-brown-600">Regular maintenance included</span>
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20monthly/yearly%20car%20rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Driver Options */}
      <section id="driver-options" className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-6 text-brown-900">With or Without Driver</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Choose your preferred mode of convenience. All our drivers are verified, experienced, and professionally
              trained.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-xl card-hover">
              <div className="h-64 bg-brown-200">
                <Image
                  src="/images/services/self-drive.jpg"
                  alt="Self-drive rental"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-sm mb-3 text-brown-900">Self-Drive Option</h3>
                <ul className="mb-6 space-y-2 text-brown-600">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Complete privacy and independence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Flexible schedule on your own terms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Valid driving license required</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Security deposit applicable</span>
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20self-drive%20car%20rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <div className="h-64 bg-brown-200">
                <Image
                  src="/images/services/chauffeur-driven.jpg"
                  alt="Chauffeur-driven rental"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-sm mb-3 text-brown-900">With Professional Driver</h3>
                <ul className="mb-6 space-y-2 text-brown-600">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Experienced and vetted professional drivers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Local knowledge of routes and destinations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">Relax and focus on your work or sightseeing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="body-sm">No security deposit required</span>
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20chauffeur-driven%20car%20rental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wedding Cars */}
      <section id="weddings" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-6 text-brown-900">Weddings & Events</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Make your special day even more memorable with our premium lineup of luxury vehicles, complete with
              professional chauffeurs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/cars/mercedes-c-class.jpg"
                  alt="Mercedes wedding car"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="heading-sm mb-1 text-brown-900">Mercedes C & E Series</h3>
                <p className="body-sm text-brown-600">Elegant and sophisticated choice for the bride and groom</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/cars/audi-a4.jpg"
                  alt="Audi wedding car"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="heading-sm mb-1 text-brown-900">Audi A3, A4, A5, A6</h3>
                <p className="body-sm text-brown-600">Modern luxury with distinctive style</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/cars/premium-cars.jpg"
                  alt="Premium SUV wedding car"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="heading-sm mb-1 text-brown-900">Premium SUVs</h3>
                <p className="body-sm text-brown-600">Spacious and impressive vehicles for the wedding party</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-lg bg-brown-50 p-6">
            <h3 className="heading-sm mb-4 text-brown-900">Wedding Package Includes:</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="body-sm text-brown-600">Professional chauffeur in formal attire</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="body-sm text-brown-600">Elegant vehicle decoration (optional)</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="body-sm text-brown-600">Punctual pickup and drop-off</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="body-sm text-brown-600">Immaculately cleaned and prepared vehicle</span>
              </li>
            </ul>

            <div className="mt-6 text-center">
              <Link
                href="https://wa.me/923003712954?text=I'm%20interested%20in%20wedding%20car%20rental"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-primary">
                  Inquire About Wedding Cars
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section id="corporate" className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-6 text-brown-900">Corporate Services</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Tailored transportation solutions for businesses of all sizes. From executive travel to employee
              transportation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="heading-sm mb-4 text-brown-900">Corporate Benefits:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Customized billing cycles</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Volume discounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">24/7 priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Flexible contract terms</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4 text-brown-900">Corporate Solutions:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Executive transportation</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Airport transfers</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Employee shuttle services</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Event transportation</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="body-sm text-brown-600">Long-term vehicle leasing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="https://wa.me/923003712954?text=I'm%20interested%20in%20corporate%20car%20rental%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary">
                Contact for Corporate Rates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brown-800 to-brown-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-white">Ready to Book Your Ride?</h2>
          <p className="body-lg mb-8 mx-auto max-w-2xl text-brown-200">
            Contact us now to discuss your transportation needs and get a customized quote.
          </p>
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
