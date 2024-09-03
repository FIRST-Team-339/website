import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import KilroyTransparent from '@public/assets/img/kilroy_transparent.png'

const links = [
    { label: "About", href: "/about" },
    { label: "FIRST™️", href: "/first" },
    { label: "History", href: "/history" },
    { label: "Get Involved", href: "/get-involved" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="z-50 absolute top-0 left-0 w-full bg-orange-500">
      <nav className={`${mobileMenuOpen ? "hidden" : "flex"} mx-auto w-full lg:max-w-7xl items-center gap-x-10 py-7 lg:py-4 lg:px-8`}>
        <div className="absolute lg:relative lg:flex left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0">
          <Link href="/" className="-m-1.5 px-1.5">
            <span className="sr-only">Kilroy Robotics</span>
            <Image src={KilroyTransparent} alt="Kilroy Robotics Logo" className="h-20 lg:h-14 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden lg:m-auto ml-auto mr-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-1.5 text-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-auto" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 tracking-wide">
            {links.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-semibold text-gray-200 hover:text-gray-50">
                    {link.label}
                </Link>
            ))}
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kilroy Robotics</span>
              <Image src={KilroyTransparent} alt="Kilroy Robotics Logo" className="h-14 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 tracking-wide">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                    <Link key={link.label} href={link.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
