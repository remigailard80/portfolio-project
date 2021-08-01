import styled from 'styled-components';

const Card = styled.div`
    min-height: 80px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 4px 10px 0 rgb(189 208 223 / 25%);
    font-size: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: 0.5s;
    @media (min-height: 0px) and (max-height: 820px) {
        min-height: 50px;
    }
    :hover {
        transform: translateY(-5px);
    }
    img {
        width: 70%;
        height: 70%;
        padding-top: 5px;
        padding-bottom: 5px;
        box-sizing: border-box;
        padding: 10% 10%;
        @media (max-height: 1024px) {
            height: 60%;
        }
    }
    p {
        border-top: 1px gray solid;
        color: black;
        width: 80%;
        word-break: keep-all;
        box-sizing: border-box;
        padding: 2px 0px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 0px) and (max-width: 576px) {
            transform: scale(0.8);
        }
        @media (min-width: 1900px) {
            font-size: 0.8vw;
        }
    }
`

export const StackCard = (props) => {
    return (
        <Card>
            <img src={props.image} alt={`${props.name}`} />
            <p> {props.name} </p> 
        </Card>
    )
}

export default StackCard;