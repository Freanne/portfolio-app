import {useState} from 'react'
import { Link } from "react-router-dom";
import './styles/Header.scss'
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';



const Header = () => {

    //  const [active, setActive] = useState(false)
    // const showMenu = () => {
    //     setActive(!active)
    // }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div className="header">
            <div className="header__logo">
                <h1>Simplilearn</h1>
             </div>
             <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <div className="closed"
                >
                    <CloseIcon className="close" onClick={toggleMenu} />
                </div>

                <li >
                    <Link to="" className="link" ><b>Home</b>  </Link >
                    
                </li>
                <li>
                    <Link to="" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}> <b>About</b>  </Link >
                </li>
                <li>
                    <Link to="" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}> <b>Portfolio</b>  </Link >
                </li>
                {/* <li>
                    <Link to="" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}> <b>Blog</b>  </Link >
                </li> */}
                <li>
                    <Link to="" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}> <b>Contact</b> </Link >
                </li>
             </nav>

             <div className="changer"> 
                    <MenuBookIcon className="menu" onClick={toggleMenu}/>
             </div>

        </div>
        )
    }

export default Header