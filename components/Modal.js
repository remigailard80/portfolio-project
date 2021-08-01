import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';

const Xbutton = '/images/Components/Modal/cross-icon.svg';

const ModalFadeIn = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 35%;
    }
`
const ItemFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(5px);
    }
    30% {
        opacity: 0;
        transform: translateY(5px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`
const ModalWrapper = styled.div`
    width: 35%;
    height: 100vh;
    position: fixed;
    right: 0;
    background-color: #101010;
    z-index: 101;
    display: flex;
    flex-direction: column;
    animation: ${ModalFadeIn} 1s;
    .close_btn {
        position: absolute;
        top: 2%;
        left: 5%;
        width: 10%;
        cursor: pointer;
    }
`
const ModalContainer = styled.ul`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30% 15%;
    margin: 0;
    list-style: none;
    color: #999;
    animation: fadeinMid 2s;
`
const ModalItem = styled.li`
    margin-bottom: 20%;
    cursor: pointer;
    animation: ${ItemFadeIn} ${props => props.fade};
    :hover {
        color: white;
    }
`
export const Modal = (props) => {
    const pageJump = (page) => {
        props.handleMove(page);
        onClose();
    };
    const onClose  = props.handleClose;
    useEffect(() => {
        const xBtn = document.querySelector('.close_btn');
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" || e.keyCode == 27) {
                try {
                    xBtn.click();
                } catch {
                    // pass
                }
            }
        })
    })
    if (props.active) {
        return (
            <ModalWrapper>
                <img className="close_btn" src={Xbutton} alt="X" onClick={onClose}/>
                <ModalContainer>
                    <ModalItem onClick={() => pageJump(0)} fade={'1s'}> 
                        <h2> Home </h2>
                    </ModalItem>
                    <ModalItem onClick={() => pageJump(1)} fade={'2s'}> 
                        <h2> About Me </h2>
                    </ModalItem>
                    <ModalItem onClick={() => pageJump(2)} fade={'3s'}> 
                        <h2> Experience </h2>
                    </ModalItem>
                    <ModalItem onClick={() => pageJump(3)} fade={'4s'}> 
                        <h2> Skills </h2>
                    </ModalItem>
                    <ModalItem onClick={() => pageJump(4)} fade={'5s'}> 
                        <h2> Info </h2>
                    </ModalItem>
                </ModalContainer>
            </ModalWrapper>
        )
    }
    return null;
}

export default Modal;