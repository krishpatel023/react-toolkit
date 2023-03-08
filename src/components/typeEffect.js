import '../styles/typeEffect.css'
import React from 'react';
//Main
import Typewriter from 'typewriter-effect'


function typeEffect(){{
    return(
        <div className="type-wrapper">
            <div className="type-effect">
              <div className="type-effect-first">
                <span>I am a </span>
              </div>
              <div className="type-effect-second">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: ["String1", "String2", "String3"],
                  }}
                />
              </div>
          </div>
        </div>
    )
}}

export default typeEffect;