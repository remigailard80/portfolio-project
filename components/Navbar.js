import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import HamburgerMenu from 'components/Hamburger';
import Modal from 'components/Modal';

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 10%;
    box-sizing: border-box;
    padding: 2% 5%;
    position: absolute;
    top: 0;
    z-index: 100;
    display: inline-flex;
    justify-content: space-between;
    background-color: var(--navColor);
    .navbar__left {
        display: inline-flex;
        width: 70%;
        justify-content: space-between;
        @media (min-width: 992px) {
            width: 50%;
        }
    }
    .navbar__right {

    }
`
const FillerBox = styled.div`
    height: 10%;
    width: 100%;
`
const Navcell = styled.div`
    color: var(--resColor);
`
export const Navbar = (props) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 767.99px)',
    });
    const handlePage = props.handlePage;
    const [modal, setModal] = useState(false);

    const handleClose = () => {
        setModal(!modal);
    };

    return (
        <>
            <NavbarWrapper id="top__navbar">
                <div className="navbar__left">
                    {!isMobile && (
                        <Navcell>
                            <h4> remigailard80 </h4>
                        </Navcell>
                    )}
                    <Navcell>
                        <h4> +82 010-7461-6005 / remigailard80@naver.com </h4>
                    </Navcell>
                </div>
                <div className="navbar__right">
                    <HamburgerMenu onClick={() => setModal(!modal)}/>
                </div>
            </NavbarWrapper>
            <Modal handleMove={handlePage} active={modal} handleClose={handleClose}/>
            <FillerBox />
        </>
    )
}

export default Navbar