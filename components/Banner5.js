import styled from 'styled-components';
import BannerTemplate from './BannerTemplate';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: fadein 0.5s;
`
const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    box-sizing: border-box;
    padding: 2% 0%;
    section {
        > p {
            font-size: 1vw;
            word-break: keep-all;
            box-sizing: border-box;
            padding: 2% 0%;
        }
    }
    @media(min-width: 0px) and (max-width: 575.99px) {
        grid-template-columns: minmax(auto, 1fr);
    }
`

export default function Banner5(props) {
    const InfoData = [
        {
            'title': 'Email',
            'desc': 'remigailard80@korea.ac.kr, remigailard80@naver.com'
        },
        {
            'title': '최종학력',
            'desc': '고려대학교(안암) 보건환경융합과학전공 및 산업경영공학 이중전공(재학)'
        },
        {
            'title': 'TEL',
            'desc': '010-7461-6005'
        },
        {
            'title': '주소지',
            'desc': '경기도 성남시'
        },
        {
            'title': '생년월일',
            'desc': '96.11.16'
        },
        {
            'title': 'GITHUB',
            'desc': 'https://github.com/remigailard80',
            'url': 'https://github.com/remigailard80'
        }
    ];

    if (props.active) {
        document.documentElement.setAttribute('color-theme', props.theme);
        return (
            <BannerTemplate>
                <Wrapper>
                    <h1> Info </h1>
                    <InfoContainer>
                            {InfoData.map(item => {
                                return (
                                    <>
                                        <section>
                                            <h2> {item.title} </h2>
                                            {item.url ? (
                                                <a href={item.url}>
                                                    <p style={{color: 'blue'}}> {item.desc} </p>
                                                </a>
                                            ):(
                                                <p> {item.desc} </p>
                                            )} 
                                        </section>
                                    </>
                                )
                            })}
                    </InfoContainer>
                </Wrapper>
            </BannerTemplate>
        )
    }
    return null;
} 