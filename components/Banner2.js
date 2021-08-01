import styled from 'styled-components';
import BannerTemplate from 'components/BannerTemplate';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    @media (min-width: 0px) and (max-width: 767.99px) {
        flex-direction: column;
    }
    .side_container {
        box-sizing: border-box;
        padding-top: 8vh;
        padding-right: 3vw;
        .strong {
            color: rgba(152,0,0,1);
        }
        @media (min-width: 0px) and (max-width: 767.99px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-top: 0;
            padding-right: 0;
            padding-bottom: 2vh;
        }
    }
    .text_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            animation: fadein 1s;
            h2 {
                font-weight: 500;
            }
            .strong {
                font-weight: bold;
            }
        }
        .exp_grid {
            margin-top: 10vh;
            display: grid;
            grid-template-columns: repeat(2, minmax(auto, 1fr));
            grid-gap: 20px;
            @media (min-width: 0px) and (max-width: 767.99px) {
                margin-top: 5vh;
            }
            section {
                height: auto;
                min-height: 10vh;
                .sub_title {
                    margin-bottom: 5px;
                    @media (min-width: 0px) and (max-width: 767.99px) {
                        text-align: center;
                    }
                }
                > p {
                    box-sizing: border-box;
                    width: 85%;
                    word-break: keep-all;
                    font-size: 1vw;
                    @media (min-width: 0px) and (max-width: 767.99px) {
                        font-size: 0.5vw;
                        word-break: initial;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
`
export default function Banner2(props) {
    if (props.active) {
        document.documentElement.setAttribute('color-theme', props.theme);
        return (
            <>
                <BannerTemplate>
                    <Wrapper>
                        <div className="side_container">
                            <h1 className="strong"> 1+ </h1>
                            <h2>
                                years
                                experienced
                                developer;
                            </h2>
                        </div>
                        <div className="text_wrapper">
                            <div className="title">
                                <h2> 안녕하세요. <span className="strong">React.JS, Javascript </span> 개발자 김민석입니다. </h2>
                            </div>
                            <div className="exp_grid">
                                <section style={{animation: 'fadein 1s'}}>
                                    <h3 className="sub_title"> Agile 한 개발에 익숙합니다. </h3>
                                    <p> 
                                        platform 스타트업 환경에서의 경험으로 Agile한 방법론의 중요성을 깊이 깨닫고 있는 개발자입니다. <br/>
                                        유연한 이슈트래킹과 소통 문화, 코드 리뷰를 중요시합니다.
                                    </p>
                                </section>
                                <section style={{animation: 'fadein 1.5s'}}>
                                <h3 className="sub_title"> 협업을 생각합니다. </h3>
                                    <p> 
                                        개발의 여러 Innovation은 협업상의 문제를 해결하는 과정에서 발생했습니다. <br/>
                                        원활한 협업 능력도 개발자의 하나의 능력이라고 생각합니다.
                                        
                                    </p>
                                </section>
                                <section style={{animation: 'fadein 2s'}}>
                                    <h3 className="sub_title"> 효율을 추구합니다. </h3>
                                    <p> 
                                        당장은 느리게 보일지라도, 나중에야 그 진가를 발휘하는 요소들이 있습니다. <br/>
                                        그런 요소에 집중하고, 놓치고 있는 것이 무엇인지 항상 고민합니다.
                                    </p>
                                </section>
                                <section style={{animation: 'fadein 2.5s'}}>
                                    <h3 className="sub_title"> 소통의 가치를 중시합니다. </h3>
                                    <p> 
                                        코드 뿐 아니라, 실생활에서의 커뮤니케이션도 개발자의 능력입니다. <br/>
                                        오프라인에서 사람들과의 눈맞춤, 조율 또한 항상 중요시합니다. 
                                    </p>
                                </section>
                            </div>
                        </div>
                    </Wrapper>
                </BannerTemplate>
            </>
        )
    } else {
        return null;
    }
} 