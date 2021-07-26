import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  // state
  let [currentSlide, setcurrentSlide] = useState(1);
  let [loading, setLoading] = useState(false);

  // Slider 이동 증가량 조절
  function slideFunction (x, target) {
    let result = x/(Math.log2(x));
    if (result < target/3) {
      return result*1.3
    }
    return result;
  }

  useEffect(() => {
    let Slides = document.querySelectorAll('.SliderBanner');
    let i = 2;
    let threshold = 150;

    const SliderPaging = () => {
      let scrollY = window.pageYOffset;
      let nextSlideTop = Slides[currentSlide].offsetTop;
      
      if (loading == false && scrollY < nextSlideTop) {
        setTimeout(() => {
          if (loading == false) {
            i += slideFunction(i, nextSlideTop);
            window.scrollTo(0,Slides[currentSlide-1].offsetTop+i);
            console.log(i, scrollY, nextSlideTop);
          }
          if (scrollY>= nextSlideTop) {
            console.log('----------');
            console.log(i, scrollY, nextSlideTop);
            setLoading(true);
          }
        }, 2);
      } else {
        console.log('----------');
        window.scrollTo(0, nextSlideTop);
        let resetLoad;
        if (resetLoad) {
          console.log('rrrrr');
          clearTimeout(resetLoad);
        }
        resetLoad = setTimeout(() => {
          setLoading(false);
          setcurrentSlide(currentSlide+1);
          i = 2;
        }, 1500);
        resetLoad;
      };
    };

    window.addEventListener('scroll', SliderPaging);
  })
  return <Component {...pageProps} />
}
export default MyApp
