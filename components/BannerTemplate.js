import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Container = styled.div`
    width: 80%;
    height: ${props => props.height ? props.height : '60%'};
    max-width: 1200px;
    display: inline-flex;
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
`

const BannerTemplate = ({children, ...props}) => {
    return (
        <Wrapper>
            <Container height={props.height}>
                {children}
            </Container>
        </Wrapper>
    )
}

export default BannerTemplate;