import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let Slides = document.querySelectorAll('.SliderBanner');
    window.addEventListener('click', (e) => {
      console.log(Slides);
    })
    console.log("App upDated");
  })
  return <Component {...pageProps} />
}
export default MyApp
