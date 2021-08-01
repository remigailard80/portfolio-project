import styled from 'styled-components';
import SliderBannerProps from 'interfaces/Slider';

const Banner = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
    position: absolute;
    z-index: ${props => 100 - props.page};
    transition: ease 1s;
    overflow-y: auto;
    transform: translate3d(0px, 0px, 0px);
` 
export default function SliderBanner({backgroundColor, direction, move, id, page, theme, innerRef, children}: SliderBannerProps) {
    return (
        <>
            <Banner
                backgroundColor={backgroundColor}
                page={page}
                className="SliderBanner"
                theme={theme}
                ref={innerRef}
            >
                {children}
            </Banner>
        </>
    )
} 