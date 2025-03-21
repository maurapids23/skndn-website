import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  
  
  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false)
    } else {
        setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}> 
                    SKNDN 
                    <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Learn" className='nav-links' onClick={closeMobileMenu}> 
                            Learn
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Blog" className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Contact-Us" className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>     
                </ul>
                {button &&  <Button buttonStyle='btn--outline' propsToPage={"/Sign-Up"}>Sign Up</Button>}  
            </div>
        </nav>
    </>
  )
}

export default Navbar