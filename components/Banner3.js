import styled from 'styled-components';
import BannerTemplate from 'components/BannerTemplate';
import Slider from 'components/Slider';
import StackCard from 'components/StackCard';

const BNN = 'images/components/Banner3/BNN.png';
const BLOG = 'images/components/Banner3/blog.png';
const DEFAULT = 'images/components/Banner3/alertImg.jpg';

// stacks
const aws = '/images/logo/AWS.svg';
const css = '/images/logo/CSS.svg';
const django = '/images/logo/Django.svg';
const html = '/images/logo/HTML.svg';
const js = '/images/logo/JS.svg';
const nextjs = '/images/logo/nextjs.svg';
const postgresql = '/images/logo/postgresql.svg';
const react = '/images/logo/React.svg';
const redux = '/images/logo/Redux.svg';
const github = '/images/logo/GITHUB.svg';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: var(--resColor);
    overflow: scroll;
`
const Item = styled.section`
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    padding: 2% 2%;
    animation: fadein 2s;
    .header {
        width: 100%;
        height: fit-content;
        display: inline-flex;
        justify-content: space-between;
        .left_container {
            width: 45%;
            h2 {
                word-break: keep-all;
            }
        }
        .right_container {
            width: 50%;
            a {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                cursor: pointer;
                > img {
                    width: 100%;
                    height: 100%;
                    max-height: 40vh;
                    border-radius: 10px;
                    object-fit: cover;
                    transition: 0.5s;
                    :hover {
                        transform: scale(1.02);
                    }
                }
            }
        }
        .stack_container {
            box-sizing: border-box;
            padding: 2% 0px;
            display: grid;
            width: 90%;
            grid-template-columns: repeat(5, minmax(50px, 1fr));
            grid-gap: 5px;
            @media (min-width: 0px) and (max-width: 575.99px) {
                grid-template-columns: repeat(3, minmax(30px, 1fr));
            }
            @media (min-width: 576px) and (max-width: 767.99px) {
                grid-template-columns: repeat(3, minmax(40px, 1fr));
            }
            @media(min-width: 768px) and (max-width: 991.98px) {
                grid-template-columns: repeat(4, minmax(50px, 1fr));
            }
        }
    }
    .desc {
        width: 100%;
        height: fit-content;
        box-sizing: border-box;
        padding: 3vh 1.5vh;
        border-bottom: 1px solid white;
        word-break: keep-all;
        > p {
            font-size: 0.8vw;
            @media (min-width: 0px) and (max-width: 575.99px) {
                font-size: 0.6vw;
            }
            @media (min-width: 992px) {
                font-size: 1vw;
            }
        }
    }
`
export default function Banner3(props) {
    const Expdata = [
        {
            'title': '(주) 볼트앤너트',
            'date': '2020.03 ~ 2021.03',
            'desc': '스타트업 (주) 볼트앤너트에서 1년 간 개발 팀장을 맡아 하였습니다. 처음 3개월은 Django 기반의 백엔드 관리, \
            그 후 9개월간은 React.js기반의 프론트엔드 유지, 보수, 리뉴얼, 신규 페이지 제작 등의 업무를 수행하였습니다. \
            팀장 재직 도중 GITHUB 도입(workflow 포함), 코드리뷰 문화 도입, 사내소통 메신저 문화 관리 등의 새로운 실험을 하였고,\
            총 수행한 리뉴얼은 3회, 예약기능, 결제기능 등의 중요 개발도 맡아 수행하였습니다. 9개월 간 최대 6명의 팀원을 관리하고,\
            서로 소통할 수 있는 환경과 도구들을 도입하였습니다.',
            'thumbnail': BNN,
            'url': 'https://www.boltnnut.com/',
            'tags': [[react, 'react'], [js,'js'], [nextjs, 'next.JS'], [html,'html'], [css,'css'], [aws, 'aws'], [django, 'django'], [postgresql, 'postgres'], [github, 'github']]
        },
        {
            'title': '개인 SNS 컨셉 사이트 제작',
            'date': '2021.03 ~',
            'desc': '스타트업에서 퇴사 후 개발 실력을 기르기 위해 수행한 개인 프로젝트입니다. (주) 볼트앤너트에서는 상태 관리 툴로 Mobx를 사용하였으나, \
            본 프로젝트에서는 redux의 도입을 시도해 보았습니다. 이전 직장에서 개인적으로 일정에 쫓기는 개발을 해서 기본적인 부분을 많이 놓쳤던 것 같아\
            아쉬움이 컸는데, 본 프로젝트에서 HTML, CSS의 기본에 대해 좀 더 집중하고 이를 개선하려고 많은 노력을 기울였습니다. 또한, API 통신에 있어\
            가장 중요한 것 중 하나라 볼 수 있는 에러처리, Loading 처리 등에 크게 신경썼습니다. 프론트엔드, 백엔드, 서버, 배포 \
            모두 제가 직접 하였으며, 현재도 꾸준한 리뉴얼로 최근 방명록 기능을 추가하여 배포하였습니다. 개인적으로 배운 사실과 소소한 일기를 기록하는\
            용도로 사용하고 있습니다.',
            'thumbnail': BLOG,
            'url': 'https://blog.dorynote.com/',
            'tags': [[react, 'react'], [redux,'redux'], [js,'js'], [html,'html'], [css,'css'], [aws, 'aws'], [django, 'django'], [github, 'github']]
        },
        {
            'title': '고려대학교 웹개발 동아리 Devkor 해커톤 사이트 프로젝트',
            'date': '2021.06 ~',
            'desc': '혼자 개발하게 되면 반드시 실력을 향상시키는 데 한계가 올 수밖에 없습니다. 아무리 잘 하고, 성실한 개발자일지라도\
            결국 틀에 갇히게 되기 때문입니다. 개인 프로젝트가 직선 그래프라면, 다수가 함께하는 프로젝트는 지수함수의 그래프를 따르며\
            제 실력이 올라가게 됩니다. 이러한 생각을 가지고, 스타트업 퇴사 후, 복학하자마자 웹 개발 동아리에 지원하여 해커톤 프로젝트\
            를 위한 프로젝트 사이트 개발에서 중추적인 역할을 수행하였습니다. 초기 보일러플레이트 디자인, 기술 스택 논의, 코드 컨벤션, \
            commit 규칙 등의 협업에 있어 중요한 요소들에 관여하였고, 현재도 진행중으로 8월 중순 프로젝트를 끝마칠 예정입니다.\
            frontend는 React.js, Redux, Axios, JS, HTML, CSS 등의 기술 스택을 사용하였고, ESLINT, HUSKY 등의 코드 관리 기법을 배울 수 있었습니다. \
            2명의 프론트엔드 인원과, 2명의 백엔드 인원과 작업하였으며 해당 프로젝트에서는 소셜 로그인(OAuth) 학습 등의 수확도 있었습니다.',
            'thumbnail': DEFAULT,
            'url': "https://github.com/DevKor-Team/devkor_hackathon_front.git",
            'tags': [[react, 'react'], [redux,'redux'], [js,'js'], [html,'html'], [css,'css'], [github, 'github']]
        },
    ];
    if (props.active) {
        document.documentElement.setAttribute('color-theme', props.theme);
        return (
            <BannerTemplate height={'70%'}>
                <Wrapper>
                    <h1> Experiences </h1>
                    <Slider>
                        {Expdata.map(item => {
                            return (
                                <>
                                    <Item>
                                        <div className="header">
                                            <div className="left_container">
                                                <h2> {item.title} </h2>
                                                <h3> {item.date} </h3> 
                                                <div className="stack_container">
                                                    {item.tags.map((item, idx) => <StackCard image={item[0]} name={item[1]} />)}
                                                </div>
                                            </div>
                                            <div className="right_container">
                                                <a href={item.url != null && item.url} onClick={() => item.url == null && alert('준비중입니다.')}>
                                                    <img src={item.thumbnail} alt={item.thumbnail}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p> {item.desc} </p>
                                        </div>
                                    </Item>
                                </>
                            )
                        })}
                    </Slider>
                </Wrapper>
            </BannerTemplate>
        )
    }
    return null
} 