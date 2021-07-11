import SliderBanner from 'components/SlideBanner';
import { useEffect } from 'react';

export default function Banner1() {
    return (
        <>
            <SliderBanner class="SliderBanner" backgroundColor={'rgba(152,0,0,0.56)'} type={0}/>
            <SliderBanner class="SliderBanner" backgroundColor={'white'} type={1}/>
        </>
    )
}