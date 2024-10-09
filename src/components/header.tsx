import './header.css'
import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import  closeIcon from '../assets/icon-close.svg'
import {useState,useMemo} from 'react'
import downArrow from '../assets/icon-arrow-dark.svg'
import upArrow from '../assets/icon-arrow-light.svg'


function Header(){

    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [isSubMenuToggled, setSubMenuToggled] = useState(false)



    const toggleMobileMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        setisMenuOpen(!isMenuOpen)
        const mobileMenu = document.querySelector('.mobile-menu') as HTMLDivElement
        mobileMenu.classList.toggle('hidden')
    }

    const toggleMobileSubMenu = () => {
        setSubMenuToggled(!isSubMenuToggled)
        const subMenu = document.querySelector('.contact-menu') as HTMLDivElement
        subMenu.classList.toggle('hidden')
    }

    const toggleDesktopSubMenu= (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
       const target = (e.target as HTMLElement)
       let subMenu:any;
       console.log(target)
       const check = document.querySelectorAll('.sub-menu:not(.hidden)')
       
       
       if(target.classList[0]==='down-arrow'){
        subMenu = target.parentElement?.querySelector('.sub-menu')
       }
       if(target.tagName === 'LI'){
        subMenu = target.querySelector('.sub-menu')
       }
       if(check){
        check.forEach((submenu:any) =>{
           if(subMenu !== submenu){
            submenu.classList.toggle('hidden')
           }
        })
    }
       console.log(subMenu)
       console.log(target.classList[0]==='down-arrow')
       subMenu?.classList.toggle('hidden')
    }

    return(
        
            <header className="header">
                    <div  className="nav-bar">
                        <div className="logo-holder">
                            <img src={logo} alt="image of logo" className='logo' />
                        
                        </div>
                        <div className="desktop-menu">
                        <ul>
                                <li onClick={toggleDesktopSubMenu}>
                                    Product <img src={upArrow} alt="" className='down-arrow'/>
                                <ul className='sub-menu hidden'>
                                        
                                        <li>Contact</li>
                                        <li>Newsletter </li>
                                        <li>Linkedin  </li>
                                    </ul></li>
                                <li onClick={toggleDesktopSubMenu}>
                                    Company <img src= {upArrow}alt="" className='down-arrow'/>
                                <ul className='sub-menu hidden'>
                                        
                                        <li>Contact</li>
                                        <li>Newsletter </li>
                                        <li>Linkedin  </li>
                                    </ul></li>
                                <li onClick={toggleDesktopSubMenu}>  Connect <img src={upArrow} alt="" className='down-arrow' 
                                onClick={toggleDesktopSubMenu}/>
                                    
                                    <ul className='sub-menu hidden'>
                                        
                                        <li>Contact</li>
                                        <li>Newsletter </li>
                                        <li>Linkedin  </li>
                                    </ul>

                                </li>
                            </ul>
                            
                        </div>
                        <div className="button-holder">
                        <button className='pink'>Login</button>
                            <button className='white'>Sign up</button>
                            
                       </div>




                        <div className="hamburger-holder">
                            <button className='hamburger' onClick={toggleMobileMenu}>
                                <img src={isMenuOpen ? closeIcon : hamburger} 
          alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}   />
                            </button>
                        </div>
                    </div>
                    <div className='header-content'>
                        <div className='mobile-menu hidden' >
                            <ul>
                                <li>Product <img src={downArrow} alt="" className='down-arrow'/></li>
                                <li>Company <img src= {downArrow}alt="" className='down-arrow'/></li>
                                <li onClick={toggleMobileSubMenu}>Connect <img src={downArrow} alt="" className='down-arrow'/>
                                    
                                    <ul className='contact-menu hidden'>
                                        
                                        <li>Contact</li>
                                        <li>Newsletter </li>
                                        <li>Linkedin  </li>
                                    </ul>

                                </li>
                            </ul>
                            <div className="mobile-menu-bottom">
                                <p>Login</p>
                                <button className='pink'>Sign up</button>
                            </div>
                        </div>
                        <h1 className="page-title">A  modern publishing platform</h1>
                        <p>Grow your audience and build your online brand</p>
                       <div className="button-holder">
                            <button className='white'>Start for free</button>
                            <button className='pink'>Learn more</button>
                       </div>
                       
                    </div>
                    
                </header>
                
           
    );
}
export default Header;