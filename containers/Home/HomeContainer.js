import SliderBanner from 'components/SlideBanner';
import { useEffect, useState, useRef } from 'react';
import PageButton from 'components/PageButton';
import PageCounter from 'components/PageCounter';
import Navbar from 'components/Navbar';
import Banner1 from 'components/Banner1';
import Banner2 from 'components/Banner2';
import Banner3 from 'components/Banner3';
import Banner4 from 'components/Banner4';
import Banner5 from 'components/Banner5';

export default function HomeContainer() {
    let [pageList, setPageList] = useState([]); // 모든 페이지 memoization
    let [page, setPage] = useState(0); // 현재 페이지 (인덱스 사용)
    let [pageCount, setFullpage] = useState(0);

    const leftButton = useRef();
    const rightButton = useRef();

    useEffect(() => {
        let all = document.getElementsByClassName('SliderBanner');
        setFullpage(document.getElementsByClassName('SliderBanner').length);
        document.documentElement.setAttribute('color-theme', 'dark');
        setPageList(all);
    }, [])

    const buttonLoading = () => {
        const leftBtn = leftButton.current;
        const rightBtn = rightButton.current;
        const navbar = document.getElementById('top__navbar');

        // 사라짐
        if (leftBtn != undefined) {
            leftBtn.style.display = 'none';
        };
        if (rightBtn != undefined) {
            rightBtn.style.display = 'none';
        }
        navbar.style.display = 'none';

        // 1초 로딩후 등장
        setTimeout(() => {
            if (leftBtn != undefined) {
                leftBtn.style.display = 'block';
            };
            if (rightBtn != undefined) {
                rightBtn.style.display = 'block';
            }
            navbar.style.display = 'inline-flex';
        }, 1000);
    };

    const slidePage = (page, direction) => {
        buttonLoading();

        // 현재 슬라이드
        let self = pageList[page];

        if (direction == 'left' && page < pageCount) {
            self.style.transform = 'translate3d(-100%, 0px, 0px)';
            // 마지막 장일 경우 page 연산을 1초 지연한다(화살표 로딩)
            setTimeout(() => {
                setPage(page+1); // 한 페이지 뒤로 넘김
            }, 990);
        };
        if (direction == 'right' && page > 0) {
            let prev = pageList[page-1];
            prev.style.transform = 'translate3d(0px, 0px, 0px)';
            // 마지막 장일 경우 page 연산을 1초 지연한다(화살표 로딩)
            setTimeout(() => {
                setPage(page-1); // 한 페이지 앞으로 넘김
            }, 990);
        };
    };
    // 비순차적으로 넘어가는 경우
    const handleMove = (targetPage) => {
        if (page == targetPage) {
            return;
        }
        const Index = [...new Array(pageList.length)].map((item, idx) => idx);
        const targetPages = targetPage > page ? Index.slice(0, targetPage) : Index.slice(targetPage, ); 
        buttonLoading();
        // 페이지 맞춰주고
        setTimeout(() => {
            setPage(targetPage); 
        }, 990);

        // 현재 페이지부터 타겟페이지 전까지 넘기기
        if (targetPage > page) {
            targetPages.forEach(i => {
                const self = pageList[i];
                console.log(self.style);
                self.style.transform = 'translate3d(-100%, 0px, 0px)';
            })
        }
        if (targetPage < page) {
            targetPages.forEach(i => {
                const self = pageList[i];
                self.style.transform = 'translate3d(0px, 0px, 0px)';
            })
        }
    };

    return (
        <>
            { /* 메뉴 모달창 */}
            <Navbar handlePage={handleMove}/>
            {page > 0 && (<PageButton page={page} innerRef={rightButton} direction={'right'} onClick={(e) => slidePage(page, 'right')}/>)}
            <SliderBanner backgroundColor={'rgba(152,0,0,1)'} page={1}>
                <Banner1  active={page+1 == 1} theme={'dark'} handleMove={handleMove}/>
            </SliderBanner>
            <SliderBanner backgroundColor={'white'} page={2}>
                <Banner2 active={page+1 == 2} theme={'light'} />
            </SliderBanner>
            <SliderBanner backgroundColor={'rgba(152,0,0,1)'} page={3}>
                <Banner3 active={page+1 == 3} theme={'dark'}/>
            </SliderBanner>
            <SliderBanner backgroundColor={'white'} page={4}>
                <Banner4 active={page+1 == 4} theme={'light'}/>
            </SliderBanner>
            <SliderBanner page={5} theme={'light'}>
                <Banner5 active={page+1 == 5} theme={'light'}/>
            </SliderBanner>
            {page+1 < pageCount && <PageButton innerRef={leftButton} page={page} direction={'left'} onClick={(e) => slidePage(page, 'left')}/>}
            <PageCounter page={page} />
        </>
    )
}