import './footer.css'
import logo from '../assets/logo.svg'
function Footer(){
return(
    <footer className="footer">
        <div className="footer-content">
        <img src={logo} alt="" className="logo" />
        
        <ul className='footer-sub-list'><h4 className='footer-title'>
            Product
        </h4>
            <li>Overview</li>
            <li>Pricing</li>
            <li>MarketPlace</li>
            <li>Features</li>
            <li>Intergrations</li>
        </ul>
        
        <ul className='footer-sub-list'><h4 className='footer-title'>
            Company
        </h4>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
        
        <ul className='footer-sub-list'><h4 className='footer-title'>
            Connect
        </h4>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
           
        </ul>
        </div>
    </footer>

)
}
export default Footer;