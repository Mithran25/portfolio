import { useState } from "react";
function Header() {

    const[open,setOpen]=useState(false);
    const button=()=>{
        setOpen(!open);
    }

  return (
    
    <div className="header">
        <header>
            <h1>Mithran</h1>
            <nav className={open?"navbar_1 active":"navbar_1"}>
                <ul>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact</a>
                </ul>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */}
            </nav>
            
            {
                open?(<svg onClick={button} className="menu_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="35" viewBox="0 0 104 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>):
                (<svg onClick={button} className="menu_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="35" viewBox="0 0 50 50">
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>)
            }


        </header>
    </div>
  );
}

export default Header;