import Image from "next/image";

export function Footer() {
  const col = "text-[12px] leading-[20px] text-white/85";

  return (
    <footer className="bg-[#0d1b2a] text-white">
      <div className="mx-auto max-w-[1430px] px-6 pt-[48px] pb-[38px] md:px-[6%]">
        <div className="grid grid-cols-1 items-center gap-y-8 md:grid-cols-[1fr_1.25fr_1fr] md:gap-x-8">

          {/* LEFT: PROJECT LOCATION + HEAD OFFICE */}
          <div className="flex flex-col justify-center gap-[48px] text-center md:text-center">
            <div>
              <h3 className="mb-[2px] text-[16px] font-bold">
                Project location
              </h3>
              <p className="text-[11px] tracking-[2px] text-white/80">
                *****
              </p>
            </div>

            <div>
              <h3 className="mb-[3px] text-[16px] font-bold">
                Head office
              </h3>
              <p className={col}>
                16, Balaraman Road, Adyar, Chennai 600 020
              </p>
            </div>
          </div>

          {/* CENTER: LOGO + QR CODE + RERA */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-[12px] text-center leading-none">
              <p className="text-[22px] font-extrabold tracking-[-1px]">
                FELI<span className="text-[#f5a623]">X</span>A
              </p>
              <p className="font-logo -mt-[5px] text-[43px] font-normal tracking-[-2px]">
                VISTAS
              </p>
            </div>

            <div className="flex items-center justify-center gap-[20px]">
              {/* QR CODE IMAGE */}
              <div className="relative size-[76px] shrink-0 overflow-hidden rounded-[7px] bg-white p-[5px] shadow-sm">
                <Image
                  src="/image/Minimalist QR Code on Dark Background.jpg"
                  alt="Felixa Vistas QR Code"
                  fill
                  sizes="76px"
                  className="object-contain p-[5px]"
                />
              </div>

              <div className="min-w-0">
                <p className="whitespace-nowrap text-[12px] font-bold">
                  RERA No: TNRERA/**/**/****/****
                </p>
                <p className="mt-[3px] text-[11px] text-white/80">
                  WWW.RERA.TN.GOV.IN
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: PHONE + EMAIL */}
          <div className="flex flex-col justify-center gap-[48px] text-center md:text-center">
            <div>
              <h3 className="mb-[2px] text-[16px] font-bold">
                Phone and WhatsApp
              </h3>
              <p className="text-[11px] tracking-[2px] text-white/80">
                *****
              </p>
            </div>

            <div>
              <h3 className="mb-[2px] text-[16px] font-bold">
                Email
              </h3>
              <p className="text-[11px] tracking-[2px] text-white/80">
                *****
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
        
    </footer>
  );
}