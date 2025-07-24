import { useState, useEffect } from "react";
import { motion} from "framer-motion";
function Footer(){
    const[page,setPage]=useState(false);
            useEffect(()=>{
                const timer=setTimeout(()=>{
                    setPage(true)
                },1000)
                return()=>clearTimeout(timer);
            },[])
    return(
        <>
            {page && (
                <motion.section
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}}
                className="footer">

                <div><h3>@navamithran</h3></div>
                </motion.section>
            )}
        </>
    );
}

export default Footer;