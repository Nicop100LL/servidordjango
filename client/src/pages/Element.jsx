import { motion } from "framer-motion"

export default function Element() {
    return (
        <div className="lg:px-20 py-36">
        
        <div className="  grid-cols-3 lg:grid block">
          
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ onde: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1 }}
            variants={{ 
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            className="p-4">
                <div className="col-span-1 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                    <img src="https://resizer.glanacion.com/resizer/L1CALD5iVrMj-Ygnqb4dG-dLfXc=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5UKP46WNBVH3RNTLWBMKWWINHY.jpg" alt="" className="w-full h-full object-center object-cover" />
                </div>
                <div>
                    <h4 className="text-3xl text-[#E11E30] font-bold p-6 text-center">VARIEDAD DE MODELOS Y AUTOS</h4>
                </div>
                <div className="md:px-32 sm:px-24 lg:px-0">
                    <p className="mt-1 p-4 leading-relaxed md:text-center">
                        Disponemos de una amplia gama de marcas y modelos de vehículos nuevos y usados. Compre con tranquilidad! Nuestro equipo le brindará asesoramiento y atención personalizada.
                    </p>
                </div>
            </motion.div>
            <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ onde: true, amount: 0.5 }}
             transition={{ delay: 0.1, duration: 1 }}
             variants={{ 
                 hidden: { opacity: 0, y: 50 },
                 visible: { opacity: 1, y: 0 },
             }}
            className="p-4">
                <div className="col-span-1 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                    <img src="https://resizer.glanacion.com/resizer/0_NcAxDsFa0GbNUFBUS3dVtXCc0=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FTWYMB4UEZD73GQXLUCNLMQP6Q.jpg" alt="" className="w-full h-full object-center object-cover" />
                </div>
                <div>
                    <h4 className="text-3xl text-[#E11E30] font-bold p-6 text-center">EXPERIENCIA Y CONFIANZA</h4>
                </div>
                <div className="md:px-32 sm:px-24 lg:px-0">
                    <p className="mt-1 p-4 leading-relaxed md:text-center">
                    Contamos con muchos años en el rubro, por lo tanto ofrecemos confianza y trayectoria en todas nuestras operaciones de autos nuevos y usados. Comprá tu auto con nosotros, garantizamos su documentación.
                    </p>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ onde: true, amount: 0.5 }}
             transition={{ delay: 0.1, duration: 1 }}
             variants={{ 
                 hidden: { opacity: 0, x: 50 },
                 visible: { opacity: 1, x: 0 },
             }}
              className="p-4">
                <div className="col-span-1 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                    <img src="https://resizer.glanacion.com/resizer/1QzDZj-qgeFS9yPjLJsLRkOwndU=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HJO44IU4NNEFZJIHSKBZDKPJ6U.jpg" alt="" className="w-full h-full object-center object-cover" />
                </div>
                <div>
                    <h4 className="text-3xl text-[#E11E30] font-bold p-6 text-center">LA MEJOR FINANCIACIÓN</h4>
                </div>
                <div className="md:px-32 sm:px-24 lg:px-0">
                    <p className="mt-1 p-4 leading-relaxed md:text-center">
                    En Up Motors brindamos gran cantidad de planes a medida, para que puedas concretar el sueño de tener tu auto.
                    </p>
                </div>
            
            </motion.div>
            
        </div>
        </div>
    )
}