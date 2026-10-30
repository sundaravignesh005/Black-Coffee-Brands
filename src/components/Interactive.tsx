'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { amenities, faqs, img, nearby } from '@/data/content';




export function Amenities() {
  return (
<section className="wrap grid gap-10 pt-2 pb-6 md:grid-cols-[320px_1fr] md:py-24">      <div>
        <p className="eyebrow text-[15px] font-bold">Amenities</p>

        <h2 className="h2 mt-3 text-[30px] font-bold normal-case">
          Designed for better living.
        </h2>

        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium"
        >
          Check All <ArrowRight className="size-4" />
        </a>
      </div>

      <div className="flex snap-x items-end gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
        {amenities.map((a) => (
          <figure
            key={a.name}
            className={`group relative w-[200px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-xl ${a.h}`}
          >
            <Image
              src={a.id}
              alt={a.name}
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:from-black/80" />

            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm text-white transition-transform duration-300 group-hover:-translate-y-2">
              {a.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}









type Tab = keyof typeof nearby;

export function Nearby() {
  const tabs = Object.keys(nearby) as Tab[];
  const [tab, setTab] = useState<Tab>('IT Parks');
  return (
    <section className="wrap pb-24">
      <h2 className="text-4xl font-bold">Modern timeline slide.</h2>
      <p className="mt-3 max-w-[760px] text-sm leading-6 text-mute">
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
      </p>
      <div className="mt-8 flex flex-wrap gap-3" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={t === tab} onClick={() => setTab(t)}
            className={`rounded-md border px-4 py-2 text-xs font-medium ${t === tab ? 'border-teal bg-teal text-white' : 'border-teal/40 text-teal'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="relative mt-12 grid grid-cols-2 gap-y-8 md:grid-cols-4">
        <div className="absolute top-[6px] right-0 left-0 hidden h-[5px] bg-[#1f4d49] md:block" />
        {nearby[tab].map(([name, dist]) => (
          <div key={name} className="relative">
            <span className="relative z-10 block size-6 rounded-full border-[4px] border-[#1f4d49] bg-white" />
            <p className="mt-3 text-sm font-bold text-[#1f4d49]">{name}</p>
            <p className="text-xs text-mute">{dist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}






export function Faq() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="bg-white py-[65px] md:py-[80px]">
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1200px] grid-cols-1 items-start gap-8 md:grid-cols-[320px_minmax(0,1fr)] md:gap-[30px]">

        {/* LEFT CONTENT */}
        <div className="pt-[2px]">
          <h2 className="max-w-[320px] text-[32px] font-medium leading-[1.2] tracking-[-0.8px] text-black md:text-[34px]">
            Frequently Asked
            <br />
            Question
          </h2>

          <p className="mt-[17px] text-[12px] leading-[18px] text-[#777777]">
            Everything you need to know before
            <br className="hidden md:block" />
            your stay with HomeHouse.
          </p>

          <a
            href="#visit"
            className="mt-[27px] inline-flex items-center gap-[7px] text-[11px] font-medium text-[#292929] underline underline-offset-2"
          >
            Visit us Now
            <ArrowRight className="size-[17px]" />
          </a>
        </div>

        {/* FAQ ACCORDION */}
        <div className="w-full">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={f.q}
                className={`transition-colors duration-200 ${
                  isOpen
                    ? "rounded-[12px] bg-[#f3f3f3]"
                    : "border-b border-[#f1f1f1] bg-white"
                }`}
              >
                <button
                  type="button"
                  className={`flex min-h-[72px] w-full items-center justify-between gap-5 px-[17px] text-left text-[15px] font-medium leading-[22px] text-black md:text-[15px]${
                    isOpen
                      ? "pt-[19px] pb-[8px]"
                      : "py-[20px]"
                  }`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>

                  {isOpen ? (
                    <Minus
                      className="size-[19px] shrink-0 text-black"
                      strokeWidth={1.7}
                    />
                  ) : (
                    <Plus
                      className="size-[19px] shrink-0 text-black"
                      strokeWidth={1.7}
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="px-[17px] pb-[26px]">
                    <p className="max-w-[560px] text-[11px] leading-[19px] text-[#777777] md:text-[12px] md:leading-[20px]">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export function VisitForm() {
  const [sent, setSent] = useState(false);
  const field = 'w-full border-b border-neutral-300 py-2 text-sm outline-none focus:border-teal';
  return (
    <section id="visit" className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/Dreamy Teal-Tinted Countryside Sky.jpg"
          alt="Dreamy Teal-Tinted Countryside Sky"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
      
      {/* Content */}
      <div className="wrap relative z-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl bg-white p-8">
          <p className="eyebrow">Your next chapter starts here</p>
          <h2 className="mt-2 text-3xl font-bold">Book your site visit</h2>
          <div className="mt-6 space-y-4">
            <label className="block text-xs">Your name<input required placeholder="Full name" className={field} /></label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block text-xs">Mobile number<input required type="tel" placeholder="+91" className={field} /></label>
              <label className="block text-xs">Email address<input required type="email" placeholder="you@example.com" className={field} /></label>
            </div>
            <label className="block text-xs">When are you planning to buy?
              <select className={field}><option>Select your timeline</option><option>Immediately</option><option>1-3 months</option><option>3-6 months</option></select>
            </label>
            <label className="block text-xs">When can you visit the site?
              <select className={field}><option>Select your timeline</option><option>This week</option><option>Next week</option><option>This month</option></select>
            </label>
            <label className="flex items-center gap-2 text-xs"><input required type="checkbox" /> I agree to be contacted by Rajparis about my enquiry.</label>
            <button className="w-full rounded-md bg-teal py-3 text-sm font-medium text-white">{sent ? 'Thank you! We will call you' : "I'm interested →"}</button>
            <p className="text-xs text-mute">Your information is confidential and will only be used to assist with your enquiry.</p>
          </div>
        </form>
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
          <iframe title="Padappai map" className="absolute inset-0 size-full border-0 grayscale" loading="lazy"
            src="https://www.google.com/maps?q=Padappai,Chennai&output=embed" />
        </div>
      </div>
    </section>
  );
}
