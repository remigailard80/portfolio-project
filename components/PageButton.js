import styled from 'styled-components';

const Button = styled.div`
    width: 60px;
    height: 60px;
    border-top: 2px white solid;
    border-right: 2px white solid;
    border-color: var(--resColor);
    position: fixed;
    transform: rotate(${props => props.direction == "left" ? '45' : '-135'}deg);
    top: 40%;
    z-index: 100;
    left: ${props => props.direction == 'right' && '30px'};
    right: ${props => props.direction == 'left' && '30px'};
    cursor: pointer;
    @media (min-width: 0px) and (max-width: 575.99px) {
        width: 20px;
        height: 20px;
        left: ${props => props.direction == 'right' && '15px'};
        right: ${props => props.direction == 'left' && '15px'};
    }
    @media (min-width: 576px) and (max-width: 767.99px) {
        width: 30px;
        height: 30px;
        left: ${props => props.direction == 'right' && '20px'};
        right: ${props => props.direction == 'left' && '20px'};
    }
`
export default function PageButton(props) {
    return (
        <Button ref={props.innerRef} direction={props.direction} onClick={props.onClick} page={props.page}>
        </Button>
    )
} 