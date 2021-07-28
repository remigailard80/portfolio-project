import styled from 'styled-components';

const Card = styled.div`
    width: auto;
    height: auto;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 4px 10px 0 rgb(189 208 223 / 25%);
    font-size: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 7vw;
        height: 7vw;
        padding-top: 5px;
        padding-bottom: 5px;
        box-sizing: border-box;
    }
    p {
        border-top: 1px gray solid;
        color: black;
        width: 80%;
        height: 100%;
        text-align: center;
        word-break: keep-all;
        @media (min-width: 991.98px) {
            height: 30px;
        }
    }
`

export const StackCard = (props) => {
    return (
        <Card>
            <img src={props.image} alt={`${props.image}`} />
            <p> {props.name} </p> 
        </Card>
    )
}

export default StackCard;