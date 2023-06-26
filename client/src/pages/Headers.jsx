import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowCircleUpIcon,
  MailIcon,
  CheckIcon,
  FingerPrintIcon,
  BanIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, PhoneIcon, AtSymbolIcon } from '@heroicons/react/solid'
import { BrowserRouter } from 'react-router-dom'
import { FiMapPin, FiAlignJustify, FiTwitter } from "react-icons/fi"
import { FaCar, FaTiktok, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Modal from './cases/Modal'

const products = [
  { name: '¿Dónde estamos?', description: 'has click para ver nuestra ubicación', href: 'https://www.google.com/maps/dir//Kawasaki+Madero,+Aim%C3%A9+Pain%C3%A9+1581,+Buenos+Aires/@-34.6785408,-58.45145,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95a3356b12025d4b:0xa1723e4181112f0!2m2!1d-58.3613057!2d-34.6157146?entry=ttu', icon: FiMapPin },
  { name: 'Facebook', description: 'Speak directly to your customers', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { name: 'Instagram', description: 'Your customers’ data will be safe and secure', href: 'https://www.instagram.com/', icon: FaInstagram },
  { name: 'Twitter', description: 'Connect with third-party tools', href: 'https://twitter.com/?lang=es', icon: FiTwitter },
  {
    name: 'Tiktok', description: 'Build strategic funnels that will convert', href: 'https://www.tiktok.com/es/', icon: FaTiktok,
  },
]
const callsToAction = [
  { name: 'WhatsApp', href:"https://wa.me/541169530210?text=Quiero%20realizar%20una%20consulta", icon: FaWhatsapp },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [estadoModal, cambiarEstadoModal] = useState(false)

  return (
    <div>
      <Modal
      estado={estadoModal} 
      cambiarEstado={cambiarEstadoModal}
      />
    <header className="bg-gray-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="logoo.png" alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FiAlignJustify className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Bienvenidos
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} target="_blank" className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/nosotros" className="text-sm font-semibold leading-6 text-gray-900">
            Conocenos
          </a>
          <a href="/contacto" className="text-sm font-semibold leading-6 text-gray-900">
            Contacto
          </a>
          <button onClick={() => cambiarEstadoModal( ! estadoModal)} className="text-sm font-semibold leading-6 text-gray-900">
            Cotizá tu vehículo
          </button>
          <a href="/postventa" className="text-sm font-semibold leading-6 text-gray-900">
            Post venta
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
             <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <FaCar className="h-8 w-auto" />
           
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Bienvenido
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Conocenos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cotizá tu vehículo
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </div>
  )
}
