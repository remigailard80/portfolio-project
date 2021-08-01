import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

const SliderWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`
const SliderItem = styled.div`
    width: 100%;
    height: 100%;
    transition: 2s;
    position: absolute;
    z-index: ${props => props.active ? 1 : 0};
    opacity: ${props => props.active ? 1 : 0};
`
const SliderArrow = styled.div`
    position: absolute;
    top: -30px;
    right: 0;
    width: 25%;
    height: 30px;
    min-width: 120px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    color: #999;
    @media (min-width: 0px) and (max-width: 575.99px) {
        height: 20px;
        top: -20px
    }
    .left_arrow {
        font-size: 1.25rem;
        cursor: pointer;
        color: #999;
        transition: 0.5s;
        :hover {
            color: white;
        }
    }
    .right_arrow {
        font-size: 1.25rem;
        cursor: pointer;
        color: #999;
        transition: 0.5s;
        :hover {
            color: white;
        }
    }
`
export const Slider = ({children, ...props}) => {
    const [page, setPage] = useState(0);

    const slideRight = () => {
        if (page < children.length-1) {
            setPage(page + 1);
        };
    };
    const slideLeft = () => {
        if (page > 0) {
            setPage(page-1);
        };
    };

    return (
        <SliderWrapper>
            <SliderArrow>
                <span class="left_arrow" onClick={slideLeft}> ← </span>
                <span class="page_container"> {page+1} / {children.length} </span>
                <span class="right_arrow" onClick={slideRight}> → </span>
            </SliderArrow>
            {children.map((item, idx) => {
                return (
                    <>
                        <SliderItem active={idx == page}>
                            {children[idx]}
                        </SliderItem>
                    </>
                )
            })}
        </SliderWrapper>
    )
}

export default Slider;