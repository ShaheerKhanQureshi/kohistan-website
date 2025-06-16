import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Our Fleet | Kohistan Traders Car Rental Pakistan",
  description:
    "Explore our diverse fleet of rental cars - from economy to luxury vehicles. Available with or without driver in Karachi, Lahore, and Islamabad.",
}

export default function FleetPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brown-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/fleet-hero.jpg"
            alt="Our fleet of vehicles"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6 text-white">Our Fleet</h1>
            <p className="body-lg text-brown-200">From economy to luxury, we have the perfect vehicle for your needs</p>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="economy" className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex h-auto w-auto justify-start gap-2 bg-transparent p-0">
                <TabsTrigger
                  value="economy"
                  className="rounded-md border border-brown-200 bg-white px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Economy
                </TabsTrigger>
                <TabsTrigger
                  value="mid-range"
                  className="rounded-md border border-brown-200 bg-white px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Mid-Range
                </TabsTrigger>
                <TabsTrigger
                  value="executive"
                  className="rounded-md border border-brown-200 bg-white px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Executive
                </TabsTrigger>
                <TabsTrigger
                  value="premium"
                  className="rounded-md border border-brown-200 bg-white px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Premium & 4x4
                </TabsTrigger>
                <TabsTrigger
                  value="luxury"
                  className="rounded-md border border-brown-200 bg-white px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Luxury Wedding
                </TabsTrigger>
                <TabsTrigger
                  value="vans"
                  className="rounded-md border border-brown-200 bg-white px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Vans & Groups
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Economy Cars */}
            <TabsContent value="economy" className="mt-0">
              <div className="mb-8">
                <h2 className="heading-lg mb-4 text-brown-900">Economy Cars</h2>
                <p className="body-lg text-brown-600">
                  Fuel-efficient and budget-friendly vehicles perfect for city driving and daily commutes.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/suzuki-alto.jpg"
                      alt="Suzuki Alto"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Suzuki Alto</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Economy
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">4 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Suzuki%20Alto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/daihatsu-mira.png"
                      alt="Daihatsu Mira"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Daihatsu Mira</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Economy
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">4 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Daihatsu%20Mira"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/suzuki-wagonr.jpg"
                      alt="Suzuki WagonR"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Suzuki WagonR</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Economy
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Suzuki%20WagonR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mid-Range Cars */}
            <TabsContent value="mid-range" className="mt-0">
              <div className="mb-8">
                <h2 className="heading-lg mb-4 text-brown-900">Mid-Range Cars</h2>
                <p className="body-lg text-brown-600">
                  Comfortable and stylish vehicles with additional features for a better driving experience.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-white-200">
                    <Image
                      src="/images/cars/suzuki-cultus.png"
                      alt="Suzuki Cultus"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Suzuki Cultus</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Mid-Range
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Suzuki%20Cultus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/kia-picanto.jpg"
                      alt="kia-picanto"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Kia Picanto</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Mid-Range
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Suzuki%20Cultus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/honda-city.jpg"
                      alt="Honda City"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Honda City</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Mid-Range
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Honda%20City"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/changan-alsvin.jpg"
                      alt="changan-alsvin"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Changan Alsvin</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Mid-Range
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Yaris"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-white-200">
                    <Image
                      src="/images/cars/toyota-yaris.png"
                      alt="Toyota Yaris"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Yaris</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Mid-Range
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Yaris"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Executive Cars */}
            <TabsContent value="executive" className="mt-0">
              <div className="mb-8">
                <h2 className="heading-lg mb-4 text-brown-900">Executive Cars</h2>
                <p className="body-lg text-brown-600">
                  Premium sedans perfect for business meetings, corporate travel, and special occasions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-white-200">
                    <Image
                      src="/images/cars/toyota-corolla.jpg"
                      alt="Toyota Corolla"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Corolla</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Executive
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Corolla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-white-200">
                    <Image
                      src="/images/cars/honda-brv.png"
                      alt="Honda BRV"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Honda BRV</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Executive
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">7 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Corolla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/kia-sportage.jpg"
                      alt="kia-sportage"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Kia Sportage</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Executive
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Corolla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/suzuki-apv.jpg"
                      alt="suzuki-apv"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Suzuki APV</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Executive
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">7 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Honda%20Civic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/honda-civic.jpg"
                      alt="Honda Civic"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Honda Civic</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Executive
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Honda%20Civic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Premium & 4x4 */}
            <TabsContent value="premium" className="mt-0">
              <div className="mb-8">
                <h2 className="heading-lg mb-4 text-brown-900">Premium & 4x4 Vehicles</h2>
                <p className="body-lg text-brown-600">
                  High-end SUVs and 4x4 vehicles perfect for tours, family trips, and off-road adventures.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-white-200">
                    <Image
                      src="/images/cars/toyota-revo.jpg"
                      alt="Toyota Revo"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Revo</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Premium
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual/Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Diesel</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">7 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>4x4:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Revo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/toyota-fortuner.jpg"
                      alt="Toyota fortuner"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Fortuner</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Premium
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Auto</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Diesel/Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">7 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>4x4:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Revo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/toyota-prado.jpg"
                      alt="Toyota Prado"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Prado</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Premium
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Diesel/Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">7 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>4x4:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Prado"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/toyota-landcruiser.jpg"
                      alt="Toyota Land Cruiser"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Land Cruiser</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Premium
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Diesel/Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">7 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>4x4:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Land%20Cruiser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Luxury Wedding Cars */}
            <TabsContent value="luxury" className="mt-0">
              <div className="mb-8">
                <h2 className="heading-lg mb-4 text-brown-900">Luxury Wedding Cars</h2>
                <p className="body-lg text-brown-600">
                  Premium luxury vehicles exclusively available with professional chauffeurs for wedding events.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/mercedes-c-class.jpg"
                      alt="Mercedes C & E Series"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Mercedes C & E Series</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Luxury
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Mercedes%20for%20wedding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/audi-a4.jpg"
                      alt="Audi A3, A4, A5, A6"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Audi A3, A4, A5, A6</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Luxury
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">5 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">Included</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20an%20Audi%20for%20wedding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Vans & Group Transport */}
            <TabsContent value="vans" className="mt-0">
              <div className="mb-8">
                <h2 className="heading-lg mb-4 text-brown-900">Vans & Group Transport</h2>
                <p className="body-lg text-brown-600">
                  Spacious vehicles perfect for group travel, family trips, and corporate transportation.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/toyota-hiace.jpg"
                      alt="Toyota Hiace"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Hiace</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Van
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Diesel</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">15 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver Included</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Hiace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/toyota-coaster.jpg"
                      alt="Toyota Coaster"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Coaster</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Bus
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Manual</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Diesel</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">30 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver Included</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Coaster"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/toyota-voxy.jpg"
                      alt="Toyota Voxy"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900">Toyota Voxy</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        MPV
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">8 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                       <li className="flex items-center justify-between">
                        <span>Driver Included</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Voxy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/nissan-serena.jpeg"
                      alt=" nissan-serena"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900"> Nissan Serena</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        MPV
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">8 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Driver Included</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Voxy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-xl card-hover">
                  <div className="h-48 bg-brown-200">
                    <Image
                      src="/images/cars/kia-carnival.jpg"
                      alt=" kia Carnival"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="heading-sm text-brown-900"> kia Carnival</h3>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        MPV
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm text-brown-600">
                      <li className="flex items-center justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">Automatic</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Fuel Type:</span>
                        <span className="font-medium">Petrol</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Seating Capacity:</span>
                        <span className="font-medium">8 Persons</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AC:</span>
                        <span className="font-medium">Yes</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Driver Included</span>
                        <span className="font-medium">Yes</span>
                      </li>
                    </ul>
                    <Link
                      href="https://wa.me/923003712954?text=I'm%20interested%20in%20renting%20a%20Toyota%20Voxy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full btn-primary gap-2">
                        <MessageSquare className="h-4 w-4" /> Inquire Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brown-800 to-brown-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-white">Need Help Choosing the Right Vehicle?</h2>
          <p className="body-lg mb-8 mx-auto max-w-2xl text-brown-200">
            Our team is here to help you select the perfect vehicle for your needs and budget.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
            <Link
              href="https://wa.me/923003712954?text=I%20need%20help%20choosing%20a%20rental%20car"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                WhatsApp Us
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
