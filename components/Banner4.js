import styled from 'styled-components';
import BannerTemplate from './BannerTemplate';

const nyang = '/images/Components/Banner4/profile.jpg';
const react = '/images/logo/React.svg';
const github = '/images/logo/GITHUB.svg';
const html = '/images/logo/HTML.svg';
const js = '/images/logo/JS.svg';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: fadein 1s;
    padding-bottom: 100px;
    @media (min-width: 0px) and (max-width: 767.99px) {
        padding-bottom: 0px;
    }
`
const SkillContainer = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .left_container {
        width: 40%;
        position: relative;
        border-radius: 10px;
        animation: fadeinMid 0.5s;
    }
    .right_container {
        width: 50%;
        display: flex;
        flex-direction: column;
        animation: fadeinMid 1.5s;
        h2 {
            word-break: keep-all;
            margin-bottom: 1vw;
        }
        .tagbox {
            display: inline-flex;
            color: #999;
            span {

            }
        }
        .stack_box {
            height: 100%;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            justify-content: space-between;
            padding: 2% 0px;
            .item {
                > h3 {
                    margin-bottom: 3px;
                }
            }
        }
    }
    @media (min-width: 0px) and (max-width: 767.99px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: initial;
        .left_container {
            width: 100%;
            height: 50%;
        }
        .right_container {
            width: 100%;
            margin-top: 3vw;
            animation: fadein 2s;
            h2 {
                word-break: keep-all;
                margin-bottom: 1vw;
            }
            .tagbox {
                color: #999;
                font-size: 0.7vw;
            }
        }
        .stack_box {
            .item {
                margin-bottom: 2vh;
            }
        }
    }
`
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: relative;
    > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    @media (min-width: 0px) and (max-width: 767.99px) {
        height: 100%;
    }
`
const SubImage = styled.img`
    top: ${props => props.top && props.top};
    left: ${props => props.left && props.left};
    right: ${props => props.right && props.right};
    bottom: ${props => props.bottom && props.bottom};
    width: 10% !important;
    height: 10% !important;
    position: absolute;
`
const ProgressBar = styled.div`
    height: 4px;
    width: 100%;
    background-color: #999;
    position: relative;
    ::before {
        content: '';
        --widthTarget: ${props => props.percent};
        width: ${props => props.percent};
        height: 4px;
        background-color: rgba(152,0,0,1);
        position: absolute;
        animation: progressBarAnimation 2s;
    }
`
export default function Banner4(props) {
    if (props.active) {
        document.documentElement.setAttribute('color-theme', props.theme);
        return (
            <BannerTemplate>
                <Wrapper>
                    <h1> Skills </h1>
                    <SkillContainer>
                        <div className="left_container">
                            <ImageWrapper>
                                <img src={nyang} alt="profile_goyang"/>
                                <SubImage className="sub_image" src={js} top={'35%'} left={'35%'} />
                                <SubImage className="sub_image" src={react} top={'37%'} right={'30%'} />
                            </ImageWrapper>
                        </div>
                        <div className="right_container">
                            <h2> 저는 React.JS를 이용한 개발에 가장 자신이 있습니다. </h2>
                            <p className="tagbox">
                                #React.js 
                                #Redux
                                #Hooks
                                #Mobx
                                #ESlint
                                #Github
                                #Next.js
                                #Axios
                                #StyledComponents
                                #JavaScript
                                #HTML5
                                #CSS3
                                #Django
                                #AWS EC2
                                #Postgresql
                                #Postgresql
                            </p>
                            <div className="stack_box">
                                <div className="item">
                                    <h3> React.JS - 80% </h3>
                                    <ProgressBar percent={'80%'}/>
                                </div>
                                <div className="item">
                                    <h3> JavaScript(ECMA6) - 70% </h3>
                                    <ProgressBar percent={'70%'}/>
                                </div>
                                <div className="item">
                                    <h3> HTML5, CSS3 - 70% </h3>
                                    <ProgressBar percent={'70%'}/>
                                </div>
                                <div className="item">
                                    <h3> Github - 60% </h3>
                                    <ProgressBar percent={'60%'}/>
                                </div>
                                <div className="item">
                                    <h3> Django - 60% </h3>
                                    <ProgressBar percent={'60%'}/>
                                </div>
                            </div>
                        </div>
                    </SkillContainer>
                </Wrapper>
            </BannerTemplate>
        )
    }
    return null;
}
