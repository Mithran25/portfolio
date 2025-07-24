import { useState } from "react";
import { useEffect } from "react";
function Enter(){

    const[enter,setEnter]=useState(false);
    useEffect(()=>{
        setTimeout(() => {
          setEnter(true);     
        }, 1000);    
    },[]);
    return(
        <>
        {!enter ?<section className="enter">
            <h1>Hi,Welcome!</h1>
        </section> : <section></section>}
        </>
    );
}

export default Enter;