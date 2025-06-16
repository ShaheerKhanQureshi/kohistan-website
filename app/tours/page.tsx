import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Car, Users, Calendar, Mountain, Camera, Hotel } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Northern Area Tour Car Rental with Guide | Kohistan Traders",
  description:
    "Explore Pakistan's Northern Areas with guided car tours. Comfortable rides with expert drivers. Custom tour packages available.",
}

export default function ToursPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brown-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/tours-hero.jpg"
            alt="Northern Pakistan mountains"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl mb-6 text-white">Northern Areas Tour Packages</h1>
            <p className="body-lg text-brown-200">
              Discover Pakistan's breathtaking northern beauty with our guided tour packages
            </p>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="heading-lg mb-6 text-brown-900">Popular Tour Destinations</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Explore the most stunning destinations in Pakistan's northern regions with our carefully crafted tour
              packages.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/hunza-valley.jpg"
                  alt="Hunza Valley"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Hunza Valley</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    5-7 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Experience the majestic beauty of Hunza Valley with its stunning mountain views, ancient forts, and
                  friendly locals.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Karimabad, Altit Fort, Baltit Fort
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Rakaposhi & Ultar Sar Views
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Perfect for Photography
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Hunza%20Valley%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/skardu.jpg"
                  alt="Skardu"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Skardu</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    6-8 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Gateway to K2 and home to pristine lakes, dramatic landscapes, and adventure opportunities.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Shangrila Resort, Satpara Lake
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Deosai Plains, Sheosar Lake
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    K2 Base Camp Access
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Skardu%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/naran-kaghan.jpg"
                  alt="Naran Kaghan"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Naran Kaghan</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    3-5 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Lush green valleys, crystal clear lakes, and scenic mountain roads perfect for family trips.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Saif-ul-Malook Lake, Babusar Top
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Malka Parbat Views
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Family Friendly
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Naran%20Kaghan%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/swat-valley.jpg"
                  alt="Swat Valley"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Swat Valley</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    4-6 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Known as the "Switzerland of Pakistan" with its green meadows, rivers, and historical sites.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Kalam, Mahodand Lake, Ushu Forest
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Malam Jabba Ski Resort
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Buddhist Heritage Sites
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Swat%20Valley%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/gilgit.jpg"
                  alt="Gilgit"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Gilgit</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    5-7 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  The heart of northern Pakistan, offering access to multiple valleys and mountain ranges.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Fairy Meadows, Naltar Valley
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Nanga Parbat Base Camp
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Cultural Diversity
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Gilgit%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/murree.jpg"
                  alt="Murree"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Murree</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    2-3 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  A classic hill station perfect for weekend getaways and family vacations.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Mall Road, Patriata Chair Lift
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Pindi Point, Kashmir Point
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Easy Access from Islamabad
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Murree%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>
            {/* Quetta & Ziarat Card */}
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/quetta.jpg"
                  alt="Quetta & Ziarat"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Quetta & Ziarat</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    3–4 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Discover the unique culture, Juniper forests, and historic beauty of Balochistan.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Hanna Lake, Ziarat Residency
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Juniper Forest, Sandeman Tangi
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Cultural Food & Heritage
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Quetta%20and%20Ziarat%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Kashmir & Neelum Valley Card */}
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/kashmir.jpg"
                  alt="Kashmir & Neelum Valley"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Kashmir & Neelum Valley</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    4–5 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  A lush paradise with stunning rivers, valleys, and scenic villages.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Keran, Sharda, Kel
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Ratti Gali Lake, Arang Kel
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    River View Stays
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Kashmir%20Neelum%20Valley%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Khunjerab Pass Card */}
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/khunjerab.jpg"
                  alt="Khunjerab Pass"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Khunjerab Pass</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    5–6 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  A high-mountain gateway on the China-Pakistan border with breathtaking views.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Sost, Khunjerab National Park
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Pak-China Border, Snow-Capped Peaks
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Scenic Drive via Karakoram Highway
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Khunjerab%20Pass%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>
            {/* Fairy Meadows Card */}
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/fairy-meadows.jpg"
                  alt="Fairy Meadows"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Fairy Meadows</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    4–6 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  A magical alpine meadow offering the best views of Nanga Parbat, ideal for trekkers and nature lovers.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Tato Village, Raikot Bridge
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Nanga Parbat Base Camp
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Wooden Huts & Bonfire Nights
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Fairy%20Meadows%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Chitral & Kalash Valley Card */}
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/chitral.jpg"
                  alt="Chitral & Kalash"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Chitral & Kalash</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    5–7 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Explore the cultural richness of Kalash tribes and the serene beauty of Chitral Valley.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Bumburet, Rumbur, Chitral Town
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Tirich Mir Views
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Unique Tribal Festivals
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Chitral%20and%20Kalash%20Valley%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-primary">Inquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Lahore Cultural Tour Card */}
            <Card className="overflow-hidden border-0 shadow-xl card-hover">
              <div className="h-48 bg-brown-200">
                <Image
                  src="/images/tours/lahore.jpg"
                  alt="Lahore"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="heading-sm text-brown-900">Lahore (Cultural Tour)</h3>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    2–3 Days
                  </span>
                </div>
                <p className="mb-4 body-sm text-brown-600">
                  Discover the rich history, architecture, and vibrant street food scene of Lahore.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-brown-600">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Badshahi Mosque, Lahore Fort
                  </li>
                  <li className="flex items-center">
                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                    Shalimar Gardens, Wazir Khan Mosque
                  </li>
                  <li className="flex items-center">
                    <Camera className="mr-2 h-4 w-4 text-primary" />
                    Food Street & Local Bazaars
                  </li>
                </ul>
                <Link
                  href="https://wa.me/923003712954?text=I'm%20interested%20in%20Lahore%20cultural%20tour%20package"
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

      {/* What's Included */}
      <section className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-6 text-brown-900">What's Included in Our Tour Packages</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              We provide comprehensive tour packages to ensure you have a comfortable and memorable experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">4x4 SUVs or Vans</h3>
                <p className="body-sm text-brown-600">
                  Comfortable and reliable vehicles suitable for mountain terrain and long journeys.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">Experienced Drivers & Guides</h3>
                <p className="body-sm text-brown-600">
                  Professional drivers with local knowledge and optional tour guides for cultural insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Hotel className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">Hotel Booking Support</h3>
                <p className="body-sm text-brown-600">
                  Optional assistance with hotel reservations and accommodation recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">Flexible Itinerary</h3>
                <p className="body-sm text-brown-600">
                  Customizable tour plans that can be adjusted based on your preferences and time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">Route Planning</h3>
                <p className="body-sm text-brown-600">
                  Carefully planned routes to maximize sightseeing while ensuring safety and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl card-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-3 text-brown-900">Photography Stops</h3>
                <p className="body-sm text-brown-600">
                  Strategic stops at the most scenic locations for photography and sightseeing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-6 text-brown-900">Perfect For</h2>
            <p className="body-lg max-w-3xl text-brown-600">
              Our tour packages cater to different types of travelers and occasions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-3 text-brown-900">Family Tours</h3>
              <p className="mb-4 body-sm text-brown-600">
                Safe and comfortable family-friendly tours with activities suitable for all ages.
              </p>
              <ul className="space-y-2 text-sm text-brown-600">
                <li>• Child-friendly destinations</li>
                <li>• Comfortable accommodation options</li>
                <li>• Flexible schedules</li>
                <li>• Safety-first approach</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-3 text-brown-900">Photography Trips</h3>
              <p className="mb-4 body-sm text-brown-600">
                Specialized tours for photography enthusiasts with access to the best viewpoints.
              </p>
              <ul className="space-y-2 text-sm text-brown-600">
                <li>• Golden hour timing</li>
                <li>• Scenic viewpoint access</li>
                <li>• Extended photo stops</li>
                <li>• Local photography tips</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brown-200 p-8 card-hover bg-gradient-to-br from-brown-50 to-brown-100">
              <h3 className="heading-sm mb-3 text-brown-900">Corporate Retreats</h3>
              <p className="mb-4 body-sm text-brown-600">
                Team building and corporate retreat packages with professional service.
              </p>
              <ul className="space-y-2 text-sm text-brown-600">
                <li>• Group transportation</li>
                <li>• Professional coordination</li>
                <li>• Customized itineraries</li>
                <li>• Corporate billing options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tour */}
      <section className="bg-brown-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-lg mb-6 text-brown-900">Custom Itinerary from Karachi to All Pakistan</h2>
            <p className="body-lg mb-8 text-brown-600">
              Want to explore multiple destinations or have specific places in mind? We create custom tour packages
              tailored to your preferences, budget, and timeline.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="heading-sm mb-3 text-brown-900">Custom Tour Benefits</h3>
                <ul className="space-y-2 text-left text-sm text-brown-600">
                  <li>• Personalized itinerary planning</li>
                  <li>• Flexible duration and destinations</li>
                  <li>• Budget-friendly options</li>
                  <li>• Local expertise and recommendations</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="heading-sm mb-3 text-brown-900">Planning Process</h3>
                <ul className="space-y-2 text-left text-sm text-brown-600">
                  <li>• Consultation to understand your needs</li>
                  <li>• Detailed itinerary proposal</li>
                  <li>• Cost breakdown and options</li>
                  <li>• Final booking and confirmation</li>
                </ul>
              </div>
            </div>

            <Link
              href="https://wa.me/923003712954?text=I'm%20interested%20in%20a%20custom%20tour%20package%20from%20Karachi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary">
                Plan My Custom Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-brown-800 to-brown-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-white">Ready for Your Northern Adventure?</h2>
          <p className="body-lg mb-8 mx-auto max-w-2xl text-brown-200">
            Contact us now to book your tour package or get a customized quote for your dream trip.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/923003712954?text=I'm%20interested%20in%20northern%20area%20tour%20packages"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                WhatsApp for Tour Plans
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                Contact Us
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
