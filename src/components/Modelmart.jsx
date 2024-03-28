// "use client";
// import { ParallaxScrollSecond } from "../components/ui/parallax-scroll";
 

import m2 from '../assets/model marts/m2.jpg'
import m3 from '../assets/model marts/m3.jpg'
import m4 from '../assets/model marts/m4.jpg'
import m5 from '../assets/model marts/m5.jpg'
import m6 from '../assets/model marts/m6.jpg'
import m7 from '../assets/model marts/m7.jpg'
import m8 from '../assets/model marts/m8.jpg'
// import m9 from '../assets/model marts/m9.jpg'
import m10 from '../assets/model marts/m10.jpg'
import m11 from '../assets/model marts/m11.jpg'
import m12 from '../assets/model marts/m12.jpg'
import m13 from '../assets/model marts/m13.jpg'
import m14 from '../assets/model marts/m14.jpg'
import m15 from '../assets/model marts/m15.jpg'
import m16 from '../assets/model marts/m16.jpg'
import m17 from '../assets/model marts/m17.jpg'
import m18 from '../assets/model marts/m18.jpg'
import m19 from '../assets/model marts/m19.jpg'
import m20 from '../assets/model marts/m20.jpg'
import m21 from '../assets/model marts/m21.jpg'
import { HeroScrollDemo } from "./HeroScrollDemo";

// export default function ModelMart() {
//   const images = [
//   m2,m3,m4,m5,m6,m7,m8,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21
//   ];
//   return (
//     <div className="">
        
//     <HeroScrollDemo />
    
//     </div>
    
//   );
// }



"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export default function ParallaxScrollSecondDemo() {
  return (
  <>
  <HeroScrollDemo />
  <ParallaxScroll images={images} />
  </>
  )
    
}

const images = [
       m2,m3,m4,m5,m6,m7,m8,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21
];