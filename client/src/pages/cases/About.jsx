import Header from "../../components/about/Header"
import TestStats from "../../components/about/TestStats"
import Images from "../../components/about/Images"
import Clients from "../../components/about/Clients"
import Team from "../../components/about/Team"
import { motion } from "framer-motion"
import PostVenta from "../PostVenta"


function About(){
 
    return(
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.5}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.5}}}>

            <Header />
            <TestStats/>
            <Images/>
            <Clients/>
            <Team />
        </motion.div>




    )}
    export default About