import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Car, Calendar, MapPin, Award, Clock, Star, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brown-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/home-hero.jpg"
            alt="Luxury car rental service in Pakistan"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary-300 backdrop-blur-sm font-sans">
              <Star className="mr-2 h-4 w-4" />
              PREMIUM CAR RENTAL
            </div>

            <h1 className="heading-xl mb-8 text-white">
              Drive Anywhere.
              <span className="block text-primary-400">Ride with Confidence.</span>
            </h1>

            <p className="body-lg mb-8 text-brown-200 max-w-2xl">
              Pakistan's most trusted car rental service for over a decade. Experience luxury, comfort, and reliability.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <div className="flex items-center rounded-lg bg-brown-800/50 px-4 py-2 backdrop-blur-sm">
                <MapPin className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-brown-200 font-sans">Karachi • Lahore • Islamabad</span>
              </div>
              <div className="flex items-center rounded-lg bg-brown-800/50 px-4 py-2 backdrop-blur-sm">
                <Calendar className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-brown-200 font-sans">Daily • Weekly • Monthly • Yearly</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
              </Link>
              <Link href="/fleet">
                <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4 backdrop-blur-sm">
                  <Car className="mr-2 h-5 w-5" />
                  View Fleet
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <div className="flex gap-8 rounded-2xl bg-white/10 backdrop-blur-md px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 font-display">10+</div>
              <div className="text-sm text-brown-200 font-sans">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 font-display">3</div>
              <div className="text-sm text-brown-200 font-sans">Major Cities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 font-display">24/7</div>
              <div className="text-sm text-brown-200 font-sans">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-4 text-brown-900">Why Choose Kohistan Traders</h2>
            <p className="body-lg mx-auto max-w-2xl text-brown-600">
              Experience the difference with Pakistan's premier car rental service
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border-0 bg-gradient-to-br from-brown-50 to-brown-100 shadow-lg card-hover">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">10+ Years Trusted</h3>
                <p className="body-sm text-brown-600">
                  Delivering reliable car rental services across Pakistan with excellence
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-brown-50 to-brown-100 shadow-lg card-hover">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">3 Major Cities</h3>
                <p className="body-sm text-brown-600">
                  Operating in Karachi, Lahore, and Islamabad with local expertise
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-brown-50 to-brown-100 shadow-lg card-hover">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">Premium Fleet</h3>
                <p className="body-sm text-brown-600">From economy to luxury vehicles for every need and budget</p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-brown-50 to-brown-100 shadow-lg card-hover">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">24/7 Support</h3>
                <p className="body-sm text-brown-600">Round-the-clock assistance for all your rental needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-4 text-brown-900">Our Premium Services</h2>
            <p className="body-lg mx-auto max-w-3xl text-brown-600">
              From daily commutes to wedding events and northern tours, we offer comprehensive luxury car rental
              solutions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/services/daily-rental.jpg"
                  alt="Flexible rental plans"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="gradient-overlay"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium font-sans">
                    FLEXIBLE PLANS
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="heading-sm mb-4 text-brown-900">Flexible Rental Plans</h3>
                <ul className="mb-6 space-y-3 text-brown-600">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Daily Rentals (Minimum 10 Hours)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Weekly & Monthly Packages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Corporate Yearly Contracts</span>
                  </li>
                </ul>
                <Link href="/services">
                  <Button className="w-full btn-primary">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/services/wedding-cars.jpg"
                  alt="Wedding cars"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="gradient-overlay"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium font-sans">
                    LUXURY EVENTS
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="heading-sm mb-4 text-brown-900">Weddings & Events</h3>
                <ul className="mb-6 space-y-3 text-brown-600">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Premium Luxury Cars</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Professional Chauffeurs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Elegant Presentation</span>
                  </li>
                </ul>
                <Link href="/services#weddings">
                  <Button className="w-full btn-primary">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/services/northern-tours.jpg"
                  alt="Northern tours"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="gradient-overlay"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium font-sans">
                    ADVENTURE TOURS
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="heading-sm mb-4 text-brown-900">Tour Packages</h3>
                <ul className="mb-6 space-y-3 text-brown-600">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Northern Areas Tours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Expert Drivers & Guides</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                    <span className="body-sm">Custom Itineraries</span>
                  </li>
                </ul>
                <Link href="/tours">
                  <Button className="w-full btn-primary">Explore Tours</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-4 text-brown-900">Our Premium Fleet</h2>
            <p className="body-lg mx-auto max-w-2xl text-brown-600">
              From economy to luxury, we have the perfect vehicle for your journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Economy",
                desc: "Suzuki Alto, Daihatsu Mira, WagonR",
                link: "/fleet#economy",
                image: "/images/cars/economy-cars.jpg",
              },
              {
                title: "Mid-Range",
                desc: "Suzuki Cultus, Swift, Honda City",
                link: "/fleet#mid-range",
                image: "/images/cars/mid-range-cars.jpg",
              },
              {
                title: "Executive",
                desc: "Toyota Corolla, Honda Civic",
                link: "/fleet#executive",
                image: "/images/cars/executive-cars.jpg",
              },
              {
                title: "Premium & 4x4",
                desc: "Toyota Revo, Prado, Fortuner",
                link: "/fleet#premium",
                image: "/images/cars/premium-cars.jpg",
              },
            ].map((category, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="gradient-overlay"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="heading-sm mb-2 text-brown-900">{category.title}</h3>
                  <p className="body-sm mb-4 text-brown-600">{category.desc}</p>
                  <Link href={category.link}>
                    <Button variant="outline" size="sm" className="w-full btn-secondary">
                      View Cars
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/fleet">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                View Full Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brown-800 to-brown-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <h2 className="heading-lg mb-4 text-white">Ready to Book Your Premium Ride?</h2>
              <p className="body-lg text-brown-200">Contact us now for the best rates and availability.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="tel:+923003712954">
                <Button size="lg" className="btn-primary text-lg px-8 py-4 shadow-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </Link>
              <Link href="https://wa.me/923003712954" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
