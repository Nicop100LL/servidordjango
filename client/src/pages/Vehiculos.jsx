
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import {
  HiHeart, HiOutlineMinusSm,
  HiOutlinePlusSm
} from "react-icons/hi"





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Vehiculos({ vehiculos }) {
 
  return (
    <div key={vehiculos && vehiculos.id} className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector
            sacar hidden para sm  */}
            <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {vehiculos && vehiculos.imagenes.map((imagen) => (
                  <Tab
                    key={imagen.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>

                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img src={imagen.imagen} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {vehiculos && vehiculos.imagenes.map((imagen) => (
                <Tab.Panel key={imagen.id}>
                  <img
                    src={imagen.imagen}
                    alt=""
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{vehiculos && vehiculos.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${vehiculos && vehiculos.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className='flex item-center'>

                </div>

                <p className="sr-only"> out of 5 stars</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6" />
              <p>{vehiculos && vehiculos.description}</p>
            </div>


            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-600">Color</h3>
              </div>
              <div className="flex items-center space-x-3">

              </div>
              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Consultar
                </button>

                <button
                  type="button"
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HiHeart className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>

            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">

                <Disclosure as="div" key="">
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                          >

                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <HiOutlineMinusSm
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <HiOutlinePlusSm
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                        <ul role="list">
                          'Multiple strap configurations',
                          'Spacious interior with top zip',
                          'Leather handle and tabs',
                          'Interior dividers',
                          'Stainless strap loops',
                          'Double stitched construction',
                          'Water-resistant',
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

