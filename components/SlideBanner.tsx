import styled from 'styled-components';
import SliderBannerProps from 'interfaces/Slider';

const Banner = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
    position: relative;
    .subSlider {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${props => props.subColor ? props.subColor : 'black'};
    }
` 
export default function SliderBanner({backgroundColor, type, direction, subColor, move, id}: SliderBannerProps) {
    if (type == 0) {
        return (
            <Banner
                className="SliderBanner"
                backgroundColor={backgroundColor}
            />
        )
    } else {
        return (
            <Banner className="SliderBanner" backgroundColor={backgroundColor}>
                <div 
                    className="subSlider"
                    onScroll={(e) => console.log(e)}
                >
                </div>
            </Banner>
        )
    }
    
} 