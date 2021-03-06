import styled from 'styled-components';

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
export default function SliderBanner({backgroundColor, page, theme, innerRef, children}) {
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