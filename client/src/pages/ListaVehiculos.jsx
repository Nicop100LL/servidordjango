import { getAllVehiculos } from '../api/vehiculos.api'
import { useEffect, useState } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import Element from './Element';
import PostVenta from './PostVenta';
import Carrusel from './cases/Carrusel';
import Loading from './Loading';


export function ListaVehiculos() {

  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    async function loadVehiculos() {
      const res = await getAllVehiculos()
      setVehiculos(res.data);
    }
    loadVehiculos();
  }, [])

  const navigate = useNavigate();

  return (
    <div>
      <Carrusel autoSlide={true} />
      <div
        className="relative bg-gray-50 px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className=" bg-gray-100 relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl p-4 font-bold tracking-tight text-gray-900 sm:text-4xl">Encontrá tu <span> </span>
              <Typewriter
                words={['Auto', 'Moto', 'Camioneta', 'Motorhome!']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
              /></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 p-1 lg:max-w-none lg:grid-cols-3">
            { vehiculos.length ?
              vehiculos.map((post) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ onde: true, amount: 0 }}
                    transition={{ delay: 0, duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    cla
                    key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <Link to={`/lista/${post.id}`}>
                      <div className="flex-shrink-0 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <a href="">
                          <img className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-125" src={post.imagen_principal} alt="" />
                        </a>
                      </div>
                      <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-indigo-600">
                            <a href="/" className="hover:underline">
                              $ {post.price}
                            </a>
                          </p>
                          <a href={post.href} className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">{post.name}</p>
                            <p className="mt-3 text-base text-gray-500">{post.description}</p>
                          </a>
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                )
              ) : <><Loading /> <Loading /> <Loading /></>}
          </div>
        </div>
      </div>
      <Element />
      <PostVenta />
    </div>

  )
}
