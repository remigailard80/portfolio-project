import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    box-sizing: border-box;
    padding-left: 5%;
    display: inline-flex;
    justify-content: space-between;
    .text_container {
        color: var(--resColor);
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`
const Button = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
    color: white;
    border-top-left-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 0px) and (max-width: 575.99px) {
        width: 50px;
        height: 50px;
    }
    h2 {
        animation: fadein 1s;
    }
`
export const PageCounter = (props) => {
    return (
        <Wrapper>
            <div class="text_container">
                <p> All Right Reserved. 2021 </p>
                <p> remigailard80@naver.com </p>
            </div>
            <Button>
                <h2>
                    {props.page + 1}
                </h2>
            </Button>
        </Wrapper>
    )
}

export default PageCounter