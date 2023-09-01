import './Hero.css'
import Me from '/me.png'
import Figma from '/figmaBubble.png'
import React from '/reactBubble.png'
import Elipse from '/elipse.png'
import TailW from '/tailwindBubble.png'

function Hero() {
    return(
        <div className="hero">
            <div className="inter">
                <div className="middle">
                    <img src={Me} className='mainImg' draggable="false"/>
                    <h2>Hi, I&apos;m Ali Bourak</h2>
                    <h4>Full-stack developer</h4>
                    <h1>
                        Passionate <br />about coding practical solutions through code.
                    </h1>
                    <p>
                        I am a driven and dedicated full-stack developer, well-versed in both front-end and back-end 
                        technologies. With a passion for web design, I am committed to crafting seamless
                        user experiences and translating creative ideas into captivating
                        digital solutions. I am ready to tackle challenges head-on and bring your concepts to life in the digital realm.
                    </p>
                    <button id='skills'><a target='blank' href="https://www.linkedin.com/in/ali-bourak-business/">Connect with me</a></button>
                </div>
                <img src={Figma} className='figm' draggable="false"/>
                <img src={Elipse} className='elps1' draggable="false"/>
                <img src={React} className='rct' draggable="false"/>
                <img src={Elipse} className='elps2' draggable="false"/>
                <img src={TailW} className='tail' draggable="false"/>
            </div>
        </div>
    )
}

export default Hero