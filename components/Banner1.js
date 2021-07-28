import styled from 'styled-components';
import StackCard from 'components/StackCard';

const nyang = '/images/nyang.png';
// stacks
const aws = '/images/logo/AWS.svg';
const css = '/images/logo/CSS.svg';
const django = '/images/logo/Django.svg';
const html = '/images/logo/HTML.svg';
const js = '/images/logo/JS.svg';
const mysql = '/images/logo/mysql.svg';
const postgresql = '/images/logo/postgresql.svg';
const react = '/images/logo/React.svg';
const redux = '/images/logo/Redux.svg';

const Wrapper = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
`
const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    @media (min-width: 0px) and (max-width: 767.99px) {
        max-width: 720px;
    }
    @media (min-width: 768px) and (max-width: 1023.99px) {
        max-width: 900px;
    }
    @media (min-width: 1024px) and (max-width: 1199.99px) {
        max-width: 980px;
    }
    > section {
        width: 50%;
        margin-bottom: 10px;
        > h1 {
            animation: fadein 3s;
        }
        > h2 {
            animation: fadein 3s;
            .line {
                border-bottom: 1px solid white;
                display: inline-flex;
            }
        }
    }
`
const StackContainer = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 10px;
    .title {
        font-weight: bold;
        font-size: 2rem;
        padding-bottom: 5px;
    }
    .stack_wrapper {
        display: grid;
        width: fit-content;
        grid-template-columns: repeat(4, minmax(auto, 25%));
        grid-gap: 10px;
    }
`
const ImageContainer = styled.div`
    background-image: url(${props => props.backgroundImage});
    height: 100%;
    position: absolute;
    width: 40%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    right: 10%;
    animation: fadein 3s;
`
export default function Banner1() {
    let front_stacks = [html, css, js, react, redux];
    let back_stacks = [aws,django,mysql,postgresql];
    
    return (
        <Wrapper>
            <Container>
                <section>
                    <h1> 프론트엔드 개발자 </h1>
                    <h2> <span class="line"> 김민석 </span> 입니다. </h2>
                    <StackContainer>
                        <p class="title"> FrontEnd </p>
                        <div class="stack_wrapper">
                            <StackCard />
                            <StackCard />
                            <StackCard />
                            <StackCard />
                            <StackCard />
                        </div>
                    </StackContainer>
                    <StackContainer>
                        <p class="title"> BackEnd </p>
                    </StackContainer>
                </section>
            </Container>
            <ImageContainer backgroundImage={nyang} />
        </Wrapper>
    )
} 