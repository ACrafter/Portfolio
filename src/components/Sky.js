import React from 'react'
import Star from './Star'
import '../styles/Sky.css'
import stars from '../Extras/starAssest.js'
import { v4 as uuidv4 } from 'uuid';
import Comet from './Comet';
import star1 from '../images/Stars/Asset 1.png'
import star2 from '../images/Stars/Asset 2.png'
import star3 from '../images/Stars/Asset 3.png'
import star4 from '../images/Stars/Asset 4.png'
import star5 from '../images/Stars/Asset 5.png'
import star6 from '../images/Stars/Asset 6.png'
import star7 from '../images/Stars/Asset 7.png'
import star8 from '../images/Stars/Asset 8.png'
import star9 from '../images/Stars/Asset 9.png'
import comet from '../images/Stars/Asset 10.png'


export default function Sky() {

  const stars_img = [star1, star2, star3, star4, star5, star6, star7, star8, star9, comet]


  return (
    <div className='sky'>
        {stars.map((obj) => {
          var el = Math.floor(Math.random()*10)
          return (
            el < 9 ?
            <Star 
              key={uuidv4()}
              img={stars_img[el]}
              x={obj.x}
              y={obj.y}
              scale={obj.scale}
              time={obj.time}
            />
            :
            <Comet 
              img={stars_img[el]}
              key={uuidv4()}
              x={obj.x}
              y={obj.y}
            />
          )
        })}
    </div>
  )
}

