import { useState , useEffect } from "react";
import { motion } from "framer-motion";
function Project(){
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
                className="project">

                   <div className="project_title"><h3>Projects</h3></div>
                   <div className="project_content">
                    <div className="p1">CETA</div>
                    <div className="p1">Porfolio</div>
                   </div>

                </motion.section>
            )}
        </>
    );
}

export default Project;
