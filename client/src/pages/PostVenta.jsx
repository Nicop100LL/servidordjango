import { motion } from "framer-motion"

export default function PostVenta() {
    return (
      <motion.div 
      initial={{opacity: 0, transition: {duration: 0.5}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
      
      className=" bg-gray-100 relative mx-auto max-w-7xl py-20">
      <div className=" bg-gray-100 grid-cols-3 lg:grid block lg:p-20 sm:p-10">
        <div  className="cols-span-1 mt-6 w-full max-w-2xl mx-auto  lg:max-w-none p-3">
          <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ onde: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{ 
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0},
          }}
          className="text-3xl text-[#00C1DE] font-bold p-6 text-center">POST VENTA</motion.h4>
          <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ onde: true, amount: 0.5 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                variants={{ 
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0},
                }}
          className="mt-1 p-4 leading-loose">
          Para brindarte las mejores soluciones, hemos reunido un equipo especializado y altamente calificado en concesionaria multimarca, venta de autos, mecánica integral, accesorios, chapa y pintura, gomería, alineación y balanceo.⁣ Porque nuestro principal objetivo es brindarte todo lo que necesitas, contamos con los mejores precios del mercado y un servicio al cliente de la más alta calidad.⁣ ¡Llámanos y entra a una nueva era en atención y soluciones!
          </motion.p>
        </div>
        <div className="col-span-2 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
    <img src="posventa.png" alt="" className="w-full h-full object-center object-cover"/>
        </div>
      </div>
      </motion.div>
    )
  }