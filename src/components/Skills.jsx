import Typewriter from 'typewriter-effect';
import AE from '/images/AE1.png';
import CSS from '/images/css-3.png';
import FIGMA from '/images/figma.png';
import HTML from '/images/html.png';
import ILLU from '/images/illustrator.png';
import JS from '/images/JavaScript.png';
import PS from '/images/Photoshop-logo.png';
import REACT from '/images/react.png';
import Mysql from '/images/Mysql.png';
import PHP from '/images/php.png';
import laravel from '/images/laravel.png';
import './Skills.css';


function Skills() {
    return(
        <div className="skls">
            <div className="skills">
                <h1>Skills.</h1>
                <div className="overlay">
                    <div className="logos">
                        <div className="logos-slide">
                            <img src={AE} alt="Aftereffects"/>
                            <img src={CSS} alt="CSS"/>
                            <img src={FIGMA} alt="Figma"/>
                            <img src={HTML} alt="HTML"/>
                            <img src={ILLU} alt="illustrator"/>
                            <img src={JS} alt="JavaScript"/>
                            <img src={PS} alt="Photoshop"/>
                            <img src={REACT} alt="React"/>
                            <img src={Mysql} alt="Mysql"/>
                            <img src={PHP} alt="PHP"/>
                            <img src={laravel} alt="Laraval"/>
                        </div>
                        <div className="logos-slide">
                            <img src={AE} alt="Aftereffects"/>
                            <img src={CSS} alt="CSS"/>
                            <img src={FIGMA} alt="Figma"/>
                            <img src={HTML} alt="HTML"/>
                            <img src={ILLU} alt="illustrator"/>
                            <img src={JS} alt="JavaScript"/>
                            <img src={PS} alt="Photoshop"/>
                            <img src={REACT} alt="React"/>
                            <img src={Mysql} alt="Mysql"/>
                            <img src={PHP} alt="PHP"/>
                            <img src={laravel} alt="Laraval"/>
                        </div>
                        </div>
                    </div>
                </div>
                <p>            
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["\"Code doesn't debate,<br></br>It demonstrates.\""],
                        }}
                    />
                </p>
        </div>
    )
}

export default Skills