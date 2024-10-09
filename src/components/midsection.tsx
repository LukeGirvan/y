import mobileEditorImage from '../assets/illustration-editor-mobile.svg'
import desktopEditorImage from '../assets/illustration-editor-desktop.svg'

import './midsection.css'
import phoneImage from '../assets/illustration-phones.svg'
import circleImage from '../assets/bg-pattern-circles.svg'
import  mobileLaptopImage from '../assets/illustration-laptop-mobile.svg'
import  desktopLaptopImage from '../assets/illustration-laptop-desktop.svg'

function MidSection(){
return(
    <div className="mid-section">
        
        <div className="editor-section">
        <h2 className="mid-title">
            Designed for the future
        </h2><div className="image-holder">
        <img src={document.documentElement.clientWidth <  1200 ?
                 mobileEditorImage: desktopEditorImage } alt="" className='editor-image'/>

        </div>
        
        <div className="paragraph-holder">
        
        <h3 className='paragraph-title'>
            Introducing an extensible editor
        </h3>
        <p className='paragraph'>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
            The editor  supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and MArkdown.
            Extensibility with plugins and themes provide  easy ways to add functionality or change the look of a blog.
        </p>
            
        
        
        <h3 className='paragraph-title'>
            Robust content management
        </h3>
        <p className='paragraph'>
            Flexible content management enables users to easily move through posts. 
            Increase the usability of your blog by adding customised categories, sections, format or flow.
            With this functionality, you're in full control 
        </p>
        </div>
        
        </div>

        <img src={phoneImage} alt="" className='phone-image'/>

        <div className="blue-background">
            
            <div className="blue-background-content">
            <h4 className="blue-background-title">
                State of the art infrastructure
            </h4>
            <p className='blue-paragraph'>
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra fast connectivity.
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
            </div>
        </div>

        <div className="final-section">
        <img src={document.documentElement.clientWidth <  1200 ?
                 mobileLaptopImage: desktopLaptopImage} alt="" className='laptop-image'/>
        <div className="paragraph-holder">
        <h3 className='paragraph-title'>
            Free, open, simple
        </h3>
        <p className='paragraph'>
            Blogr is a free and open source application backed by a large community of helpful developers.
            It supports features such as code syntax highlighting, RSS  feeds, social media integration, third- party commenting tools, 
            and works seamlessly with google analytics. The architechture is clean and is relatively easy to learn.
        </p>
        <h3 className='paragraph-title'>
            Powerful tooling
        </h3>
        <p className='paragraph'>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deploment a breeze, but capable of producing even themost complicated sites.
        </p>
        </div>
        
        
        
                </div>

       
    </div>
)
}
export default MidSection;