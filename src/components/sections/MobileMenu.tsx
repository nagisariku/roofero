import * as React from "react"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet"

interface MobileMenuProps {
  currentPath: string
}

export default function MobileMenu({ currentPath }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const getLinkClass = (path: string) => {
    const isActive = currentPath === path
    return isActive
      ? "text-electric-lime font-sans text-xl font-semibold transition-colors hover:no-underline py-3 border-b border-white/5 flex items-center justify-between"
      : "text-white/80 hover:text-electric-lime font-sans text-xl font-medium transition-colors hover:no-underline py-3 border-b border-white/5 flex items-center justify-between"
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          <i className="ph ph-list text-[24px]"></i>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-brand-dark text-white border-l border-white/10 p-6 flex flex-col justify-between max-w-[320px] w-[80%] z-[100]"
        showCloseButton={true}
      >
        <div className="flex flex-col h-full justify-between pt-8">
          <div className="flex-1 overflow-y-auto pr-1 no-scrollbar">
            <SheetHeader className="p-0 mb-4 flex flex-row items-center gap-2">
              <div className="size-8 bg-electric-lime rounded-full flex items-center justify-center text-deep-black">
                <i className="ph-fill ph-leaf text-[18px]"></i>
              </div>
              <SheetTitle className="font-heading text-xl font-semibold text-white">
                Roofero
              </SheetTitle>
            </SheetHeader>

            <p className="text-white/60 font-sans text-xs mb-6 leading-relaxed">
              Roofero is a premier provider of certified roofing and home repair services. We deliver high-quality craftsmanship, reliable solutions, and lasting protection.
            </p>

            <nav className="flex flex-col mb-8">
              <a
                href="/"
                className={getLinkClass("")}
                onClick={() => setOpen(false)}
              >
                <span>Home</span>
                <i className="ph ph-caret-right text-white/30 text-sm"></i>
              </a>
              <a
                href="/pricing"
                className={getLinkClass("/pricing")}
                onClick={() => setOpen(false)}
              >
                <span>Pricing</span>
                <i className="ph ph-caret-right text-white/30 text-sm"></i>
              </a>
              <a
                href="/about-us"
                className={getLinkClass("/about-us")}
                onClick={() => setOpen(false)}
              >
                <span>About Us</span>
                <i className="ph ph-caret-right text-white/30 text-sm"></i>
              </a>
              <a
                href="/services"
                className={getLinkClass("/services")}
                onClick={() => setOpen(false)}
              >
                <span>Services</span>
                <i className="ph ph-caret-right text-white/30 text-sm"></i>
              </a>
              <a
                href="/projects"
                className={getLinkClass("/projects")}
                onClick={() => setOpen(false)}
              >
                <span>Projects</span>
                <i className="ph ph-caret-right text-white/30 text-sm"></i>
              </a>
            </nav>

            <div className="flex flex-col gap-3 text-sm text-white/70 font-sans border-t border-white/10 pt-6 mb-6">
              <div className="flex items-center gap-2">
                <i className="ph ph-phone text-[16px] text-electric-lime shrink-0"></i>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph ph-envelope text-[16px] text-electric-lime shrink-0"></i>
                <a href="mailto:contact@rofoora.com" className="text-white/70 hover:text-electric-lime transition-colors">
                  contact@rofoora.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph ph-map-pin text-[16px] text-electric-lime shrink-0"></i>
                <span>123 Roofline Ave City, State ZIP</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 pb-2">
            <a href="/contact-us" onClick={() => setOpen(false)} className="hover:no-underline">
              <button className="w-full h-11 bg-electric-lime text-deep-black hover:bg-electric-lime-hover active:bg-electric-lime-active rounded-full font-heading font-semibold text-base transition-all cursor-pointer">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
