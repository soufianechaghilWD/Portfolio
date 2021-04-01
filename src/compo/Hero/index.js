import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWraper, ArrowForward, ArrowRight } from "./HeroElements"
import { Button } from '../ButtonElement'
import Back from '../../files/pic1.jpg'

const Hero  = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Back} alt="" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Who am I ??</HeroH1>
                <HeroP>
                My name is Soufiane chaghil, I am a full stack web developer with over 3 years of coding experience .
                </HeroP>
                <HeroBtnWraper>
                    <Button to="contact" smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} >
                        Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWraper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero 
