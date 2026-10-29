
import Image from "next/image";
import { Check, MapPin, Play, ArrowRight } from "lucide-react";
import { banks, img } from "@/data/content";

type PicProps = {
  id: number;
  className?: string;
  w?: number;
  h?: number;
  alt: string;
};

function Pic({
  id,
  className = "",
  w = 900,
  h = 700,
  alt,
}: PicProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={img(id, w, h)}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

/* ABOUT PROJECT */
export function About() {
  return (
    <section className="bg-white py-[55px] md:py-[65px] lg:py-[82px]">
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1260px] items-center gap-8 md:grid-cols-[minmax(0,1fr)_528px] md:gap-[55px] lg:gap-[100px]">
        <div className="min-w-0 md:ml-[50px]">
          <p className="text-[12px] md:ml-[5px] font-bold uppercase leading-[18px] text-[#287873]">
            About Project
          </p>

          <h2 className="mt-[3px] text-[28px] font-bold uppercase leading-[1.4] tracking-[0.2px] text-[#292c35] md:text-[34px]">
            A Lifestyle Shaped
            <br />
            Around You.
          </h2>

          <p className="mt-[20px] max-w-[555px] text-[15px] leading-[27px] text-[#353741] md:text-[18px] md:leading-[32.5px]">
            Discover Felixa Vistas, a lifestyle plotted development in
            Padappai, Chennai, offering the freedom to build your dream
            home. With excellent connectivity to Vandalur, Padappai,
            Mudichur and Tambaram, along with 25+ lifestyle amenities
            and a peaceful green environment, it brings together
            everyday convenience and comfortable living.
          </p>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden rounded-[5px] md:h-[325px] lg:h-[380px]">
          <Image
            src="/image/Modern White and Oak Kitchen with Island.jpg"
            alt="Modern white and oak kitchen with island"
            fill
            sizes="(min-width: 768px) 528px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* VIDEO BANNER */
export function VideoBanner() {
  return (
    // <section className="bg-white px-5 pb-0 -mt-[20px] pt-[30px] md:mt-0 md:px-0 md:pt-[80px] lg:pt-[100px]">
      <section className="bg-white px-5 pb-0 -mt-[20px] pt-[30px] md:mt-0 md:px-0 md:pt-[40px] lg:pt-[25px]">
      <div className="mx-auto w-full max-w-[1200px] md:w-[calc(100%-150px)]">
        <div className="relative h-[320px] overflow-hidden rounded-[10px] sm:h-[400px] md:h-[500px]">
          <Image
            src="/image/Modern Condo Entrance with Lush Landscaping.png"
            alt="Modern Condo Entrance with Lush Landscaping"
            fill
            sizes="(min-width: 768px) 90vw, 100vw"
            className="object-cover object-center"
          />

          <button
            type="button"
            aria-label="Play project video"
            className="absolute left-1/2 top-1/2 grid size-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#287873] transition-transform hover:scale-105"
          >
            <Play className="ml-1 size-[18px] fill-current" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* WHY US */

export function WhyUs() {
  const items = [
    "Development of Furniture Modelss",
    "Valuation Services",
  ];

  return (
    <section className="bg-white pb-[40px] pt-[68px] md:pb-[35px] md:pt-[64px]">
<div className="relative mx-auto grid w-[calc(100%-40px)] max-w-[1260px] items-start gap-8 md:left-[85px] md:top-[40px] md:grid-cols-[minmax(0,478px)_minmax(0,520px)] md:gap-[50px]">        {/* Image */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-[4px] md:h-[423px]">
          <Image
            src="/image/Cozy Minimalist Living Room with Rustic.jpg"
            alt="Cozy Minimalist Living Room with Rustic furniture"
            fill
            sizes="(min-width: 768px) 478px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content: moved down with top padding and right side positioning */}
        <div className="min-w-0 md:ml-[50px] md:pt-[60px]">
          <p className="text-[12px] font-bold uppercase leading-[18px] text-[#287873]">
            Why Us
          </p>

          <h2 className="text-[27px] font-bold leading-[36px] text-[#292c35] md:text-[32px] md:leading-[40px]">
            Why Felixa Vistas?
          </h2>

          <p className="mt-[5px] max-w-[520px] text-[14px] leading-[25px] text-[#353741] md:text-[16px] md:leading-[29px]">
            Choose Felixa Vistas for its highway-facing location in
            Padappai, excellent connectivity to Vandalur, Mudichur and
            Tambaram, and 25+ lifestyle amenities. With ready-to-
            construct plots, a secure gated community and peaceful green
            surroundings, it offers the freedom to build your dream home
            your way.
          </p>

          <ul className="mt-[18px] space-y-[17px]">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-[14px]">
                <span className="mt-[3px] grid size-[19px] shrink-0 place-items-center rounded-full bg-[#292c35] text-white">
                  <Check className="size-[12px]" strokeWidth={3} />
                </span>

                <div className="min-w-0">
                  <p className="text-[13px] font-bold leading-[22px] text-[#292c35] md:text-[15px]">
                    {item}
                  </p>

                  <p className="mt-[4px] max-w-[430px] text-[11px] leading-[20px] text-[#41434b] md:text-[12px] md:leading-[22px]">
                    Sometimes features require a short description.
                    This can be detailed description
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


/* AMENITIES */
export function Amenities() {
  const amenities = [
    {
      title: "Landscaped Gardens",
      image: "/image/Symmetrical Formal Garden Pathway.png",
    },
    {
      title: "Children's Play Area",
      image: "/image/Golden Hour Basketball Court-2.png",
    },
    {
      title: "Sports Court",
      image: "/image/Golden Location Pin Over Countryside.jpg",
    },
  ];

  return (
   <section
  id="all-amenities"
  className="overflow-hidden bg-white pt-[8px] pb-[12px] md:py-[36px] lg:py-[42px]"
>
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1260px] gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-[28px]">
        <div>
          <p className="text-[12px] font-extrabold uppercase leading-[17px] text-[#287873]">
            Amenities
          </p>

          <h2 className="mt-[4px] text-[29px] font-bold leading-[1.2] text-[#292c35] md:text-[30px]">
            Designed for Better
            <br />
            Living.
          </h2>

          <a
            href="#all-amenities"
            className="mt-[10px] inline-flex items-center gap-2 text-[10px] text-[#292c35] underline"
          >
            Check All
            <ArrowRight className="size-[16px]" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-3">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="relative h-[205px] overflow-hidden rounded-[3px] md:h-[252px]"
            >
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                sizes="(min-width: 768px) 170px, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <p className="absolute inset-x-1 bottom-[12px] text-center text-[12px] font-semibold text-white">
                {amenity.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* QUOTE BANNER */
export function QuoteBanner() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full">
        <Image
          src="/image/Almaris Hotel Luxury Suite.jpg"
          alt="Almaris Hotel Luxury Suite"
          width={1920}
          height={50}
          className="h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}





/* LOCATION ADVANTAGES */
export function Location() {
  return (
    <section className="bg-white py-[45px] md:py-[65px]">
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1104px] items-center gap-8 md:grid-cols-[minmax(0,1fr)_478px] md:gap-[60px]">
        <div>
          <p className="text-[12px] font-bold uppercase leading-[18px] text-[#287873]">
            Location Advantages
          </p>

          <h2 className="mt-[3px] text-[27px] font-bold uppercase leading-[1.35] text-[#292c35] md:text-[34px]">
            A Prime Address, Closer
            <br />
            to Everything.
          </h2>

          <p className="mt-[16px] max-w-[500px] text-[14px] leading-[25px] text-[#383a43] md:text-[16px] md:leading-[29px]">
            Located on the highway in Padappai, Chennai, Felixa Vistas
            offers convenient connectivity to Vandalur, Mudichur and
            Tambaram. Just a 10-minute drive from Vandalur Bus Stand,
            its strategic location brings everyday convenience closer
            while offering a peaceful, green environment to call home.
          </p>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden rounded-[5px] md:h-[344px] md:w-[478px]">
          <Image
            src="/image/Golden%20Location%20Pin%20Over%20Countryside.jpg"
            alt="Golden Location Pin Over Countryside"
            fill
            sizes="(min-width: 768px) 478px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* TIMELINE */





export function Timeline() {
  const categories = [
    "IT Parks",
    "Hospitals",
    "Entertainment",
    "Schools & Colleges",
  ];

  const locations = [
    { name: "Location 1", distance: "000 km" },
    { name: "Location 2", distance: "000 km" },
    { name: "Location 3", distance: "000 km" },
    { name: "Location 4", distance: "000 km" },
  ];

  return (
    <section className="w-full bg-white px-[4.45%] pt-[68px] pb-[48px]">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-[36px] font-bold leading-[1.2] tracking-[-0.8px] text-black md:text-[48px]">
          Modern timeline slide.
        </h2>

        {/* Description */}
        <p className="mt-[14px] max-w-[850px] text-[16px] leading-[24px] text-black">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
          <br className="hidden lg:block" />
          corporate strategy foster collaborative thinking to further the overall value proposition.
        </p>

        {/* Category buttons */}
        <div className="mt-[57px] flex flex-wrap items-center gap-[15px]">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`flex h-[42px] items-center justify-center rounded-[7px] border px-[20px] text-[13px] font-medium whitespace-nowrap ${
                index === 0
                  ? "border-[#287873] bg-[#287873] text-white"
                  : "border-[#a8c9c6] bg-white text-[#287873]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-[60px]">
          {/* Horizontal line - bold/thick dark teal */}
          <div className="absolute left-[16px] right-0 top-[12px] h-[3px] bg-[#1f4d49]" />

          {/* Location points */}
          <div className="relative grid grid-cols-4">
            {locations.map((location) => (
              <div key={location.name} className="min-w-0">
                {/* Circle - white background with bold dark border */}
                <span className="relative z-10 block size-[28px] rounded-full border-[4px] border-[#1f4d49] bg-white" />

                {/* Location name */}
                <p className="mt-[20px] text-[16px] font-bold leading-[24px] text-[#1f4d49]">
                  {location.name}
                </p>

                {/* Distance */}
                <p className="mt-[6px] text-[14px] leading-[22px] text-[#6b7280]">
                  {location.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* HOME LOAN FACILITIES */

export function HomeLoans() {
  return (
    <section className="bg-[#f8f3ed] py-[34px] md:py-[38px]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1260px]">
        <p className="text-[11px] font-bold uppercase leading-[17px] text-[#287873]">
          Home Loan Facilities
        </p>

        <h2 className="mt-[2px] max-w-[470px] text-[28px] font-bold uppercase leading-[36px] text-[#292c35] md:text-[32px] md:leading-[40px]">
          A Smarter, Simpler Path
          <br />
          to Homeownership.
        </h2>

        <p className="mt-[12px] max-w-[1000px] text-[15px] leading-[26px] text-[#41434b] md:text-[16px] md:leading-[28px]">
          Felixa Vistas makes your home-buying journey more convenient
          with APF approval from leading banks, including SBI, HDFC,
          ICICI, Axis Bank, IDBI and LIC. With home loan facilities of
          up to 80%, you can take a confident step towards owning your
          dream plot.
        </p>

        {/* Six Bank Logos */}
        <div className="mx-auto mt-[22px] max-w-[650px]">
          <Image
            src="/image/Indian-Bank.png"
            alt="Axis Bank, ICICI Bank, LIC, IDBI Bank, HDFC Bank and SBI logos"
            width={1600}
            height={600}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 650px"
          />
        </div>
      </div>
    </section>
  );
}
