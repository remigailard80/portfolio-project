import styled from 'styled-components';

const Button = styled.div`
    width: 60px;
    height: 60px;
    border-top: 2px white solid;
    border-right: 2px white solid;
    position: fixed;
    transform: rotate(${props => props.direction == "left" ? '45' : '-135'}deg);
    top: 40%;
    z-index: 100;
    left: ${props => props.direction == 'right' && '30px'};
    right: ${props => props.direction == 'left' && '30px'};
    cursor: pointer;
`
export default function PageButton(props) {
    return (
        <Button ref={props.innerRef} direction={props.direction} onClick={props.onClick}>
        </Button>
    )
} 