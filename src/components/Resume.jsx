import {useState , useEffect} from "react";
import { motion } from "framer-motion";
function Experience(){

    const[page,setPage]=useState(false);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setPage(true)
        },1000)
        return()=>clearTimeout(timer);
    },[])

    return(
        <>
            {page && (<section className="Resume">
                <motion.div
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}}
                className="Resume-title"><h3>My Resume</h3></motion.div>
                <div className="Resume-content">

                <motion.div
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}}  
                className="line">
                <div className="res-title">
                    <div className="dot"></div>
                    <div className="res-content">Skills</div>
                </div>
                <div className="res-title">
                    <div className="dot"></div>
                    <div className="res-content">Experience</div>
                </div>
                <div className="res-title-1">
                    <div className="dot"></div>
                    <div className="res-content">Education</div>
                </div>
                </motion.div>
                {/* ---------------------Skills------------- */}
                 <motion.div
                 initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}} 
                 className="skills">
                   {/* <div className="title"><h2>Skill</h2></div> */}
                   <div className="content">
                    <div className="list">
                        <h3>Hard Skills</h3>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML5 & CSS3</li>
                    </div>
                    <div className="seperate"></div>
                    <div className="list">
                        <h3>Soft Skills</h3>
                        <li>Leadership</li>
                        <li>Team Lead</li>
                        <li>Project Lead/Executive</li>
                        <li>Problem Solving</li>
                    </div>
                    <div className="seperate"></div>
                    <div className="list">
                        <h3>Tools & Platforms</h3>
                        <li>Git</li>
                        <li>Netlify</li>
                        <li>Figma</li>
                        <li>Visual Studio</li>
                        <li>Editplus</li>
                    </div>
                   </div>
                 </motion.div>

                 {/* ---------------------Experience------------- */}
                 <motion.div 
                 initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}} 
                 className="experience">
                   {/* <div className="title"><h2>Experience</h2></div> */}
                   <div className="content">
                    <div className="list">
                        <h3>Frontend Developer Intern</h3>
                        <p> Designed and built a responsive personal portfolio website to showcase projects and skills.</p>
                        
                    </div>
                    <div className="seperate"></div>
                    <div className="list">
                        <h3>Frontend Develop</h3>
                        <p>Developed a fully responsive symposium site,integrated registration and real-time updates.</p>
                    </div>
                    <div className="seperate"></div>
                    <div className="list">
                        <h3>Technical Committee Head</h3>
                        <p> Led and coordinated technical and non-technical events for a national‑level symposium.</p>
                    </div>
                   </div>
                 </motion.div>

                 {/* ---------------------Education------------- */}
                 <motion.div
                 initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}}  
                 className="education">
                   {/* <div className="title"><h2>Education</h2></div> */}
                   <div className="content">
                    <div className="list">
                        <h3>B.E. in Computer Science and Engineering</h3>
                        <p>2021-2025</p>
                        <p> University College of Engineering Tindivanam  | CGPA: 7.6</p>
                        
                    </div>
                    <div className="seperate"></div>
                    <div className="list">
                        <h3>Higher Secondary School</h3>
                        <p>2019-2021</p>
                        <p>Maharishi Hr.Sec.School,Chengam</p>
                    </div>
                   </div>
                 </motion.div>

                </div>
            </section>)}
        </>
    );
}

export default Experience;