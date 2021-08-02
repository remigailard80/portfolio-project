import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const nyang = '/images/profile.jpg';

const Wrapper = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width: 80%;
    height: auto;
    min-height: 50%;
    max-width: 1200px;
    display: inline-flex;
    @media (min-width: 0px) and (max-width: 767.99px) {
        max-width: 720px;
        display: flex;
        flex-direction: column;
        min-height: 60%;
        > section {
            width: 100% !important;
            margin-top: 2vw;
            padding: 0 !important;
            > h1 {
                font-size: 6vw;
            }
            > h2 {
                font-size: 4vw;
            }
        }
    }
    @media (min-width: 768px) and (max-width: 1023.99px) {
        max-width: 900px;
    }
    @media (min-width: 1024px) and (max-width: 1199.99px) {
        max-width: 980px;
    }
    > section {
        width: 60%;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding-left: 30px;
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
    padding: 15px 0px;
    margin-top: 3vw;
    .title {
        font-weight: bold;
        font-size: 2vw;
        padding-bottom: 5px;
    }
    .stack_wrapper {
        display: grid;
        width: fit-content;
        grid-template-columns: repeat(4, minmax(auto, 100%));
        grid-gap: 10px;
        @media (min-width: 0px) and (max-width: 575.99px) {
            grid-template-columns: repeat(2, minmax(40px, 100%));
        }
        @media (min-width: 576px) and (max-width: 767.99px) {
            grid-template-columns: repeat(3, minmax(60px, 100%));
        }
    }
    > h3 {
        word-break: keep-all;
        line-height: 2;
    }
    @media (min-width: 0px) and (max-width: 575.99px) {
        padding: 0;
        > h3 {
            font-size: 3vw;
        }
    }
`
const HistoryWrapper = styled.div`
    display: inline-flex;
    @media (min-width: 0px) and (max-width: 575.99px) {
        display: flex;
        flex-direction: column;
    }
`
const HistoryContainer = styled.ul`
    margin: 0;
    margin-top: 2vw;
    padding: 0;
    list-style: none;
    margin-right: 3vw;
    overflow: hidden;
    li {
        font-size: 2vw;
        display: flex;
        align-items: center;
        transition: 0.5s;
        cursor: pointer;
        color: #999;
        :hover {
            transform: translateX(-10px);
            color: white;
            ::before {
                transition: 0.5s;
                background-color: white;
                width: 3vw;
                height: 1px;
                margin-right: 10px;
                content: ""
            }
        }
        ::before {
            background-color: #999;
            width: 3vw;
            height: 1px;
            margin-right: 10px;
            content: ""
        }
        @media (min-width: 0px) and (max-width: 575.99px) {
            font-size: 5vw;
        }
    }
`
const ImageContainer = styled.div`
    background-image: url(${props => props.backgroundImage});
    width: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    right: 10%;
    top: 20%;
    animation: fadein 3s;
    --opacityTarget: 0.5;
    opacity: 0.5;
    border-radius: 10px;
    @media (min-width: 0px) and (max-width: 767.99px) {
        width: 100%;
        height: 100%;
    }
`
export default function Banner1(props) {
    let [mode, setMode] = useState(props.theme);
    let pageJump = props.handleMove;

    const isMobile = useMediaQuery({
        query: '(max-width: 767.99px)',
    });

    useEffect(() => {
        setMode(props.theme);
    },[]);
    
    if (props.active) {
        try {
            document.documentElement.setAttribute('color-theme', props.theme);
        } catch {
            // ha...
        }
        if (!isMobile) {
            return (
                    <Wrapper>
                        <Container>
                            <section>
                                <h1> FrontEnd Developer; </h1>
                                <h2> <span className="line"> 김민석 </span> 입니다. </h2>
                                <StackContainer style={{animation: 'fadeinMid 3s'}}>
                                    <h3> 
                                        2020년 3월, 한 스타트업의 영업 인턴으로 시작하여, <br/>
                                        프론트엔드 개발자까지. <br/>
                                    </h3>
                                    <HistoryWrapper>
                                        <HistoryContainer>
                                            {/* page 1 */}
                                            <li onClick={(e) => pageJump(1)}> About Me </li>
                                            {/* page 2 */}
                                            <li onClick={(e) => pageJump(2)}> Experience </li>
                                        </HistoryContainer>
                                        <HistoryContainer>
                                            {/* page3 */}
                                            <li onClick={(e) => pageJump(3)}> Skills </li>
                                            {/* page4 */}
                                            <li onClick={(e) => pageJump(4)}> Info </li>
                                        </HistoryContainer>
                                    </HistoryWrapper>
                                </StackContainer>
                            </section>
                            <ImageContainer backgroundImage={nyang} />
                        </Container>
                    </Wrapper>
                )
            } else {
                return (
                    <Wrapper>
                        <Container>
                            <ImageContainer backgroundImage={nyang} />
                            <section>
                                <h1> FrontEnd Developer; </h1>
                                <h2> <span className="line"> 김민석 </span> 입니다. </h2>
                                <StackContainer style={{animation: 'fadeinMid 3s'}}>
                                    <h3> 
                                        2020년 3월, 한 스타트업의 영업 인턴으로 시작하여, <br/>
                                        프론트엔드 개발자까지. <br/>
                                    </h3>
                                    <HistoryWrapper>
                                        <HistoryContainer>
                                            {/* page 1 */}
                                            <li onClick={(e) => pageJump(1)}> About Me </li>
                                            {/* page 2 */}
                                            <li onClick={(e) => pageJump(2)}> Experience </li>
                                        </HistoryContainer>
                                        <HistoryContainer>
                                            {/* page3 */}
                                            <li onClick={(e) => pageJump(3)}> Skills </li>
                                            {/* page4 */}
                                            <li onClick={(e) => pageJump(4)}> Info </li>
                                        </HistoryContainer>
                                    </HistoryWrapper>
                                </StackContainer>
                            </section>
                        </Container>
                    </Wrapper>
                );
            }
        }
        return null;
} 