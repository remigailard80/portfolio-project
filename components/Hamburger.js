import styled from 'styled-components';
import { useRef } from 'react';

const Wrapper = styled.div`
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.5s;
    cursor: pointer;
`
const Line = styled.div`
    background-color: var(--resColor);
    width: 100%;
    height: 2px;
    border-radius: 10px;
`
export const HamburgerMenu = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <Line />
            <Line />
            <Line />
        </Wrapper>
    )
}

export default HamburgerMenu;