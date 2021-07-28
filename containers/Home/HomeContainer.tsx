import SliderBanner from 'components/SlideBanner';
import { useEffect, useState, useRef } from 'react';
import PageButton from 'components/PageButton';
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
        setPageList(all);
    }, [])

    const buttonLoading = () => {
        const leftBtn = leftButton.current;
        const rightBtn = rightButton.current;

        // 사라짐
        if (leftBtn != undefined) {
            leftBtn.style.display = 'none';
        };
        if (rightBtn != undefined) {
            rightBtn.style.display = 'none';
        }

        // 1초 로딩후 등장
        setTimeout(() => {
            if (leftBtn != undefined) {
                leftBtn.style.display = 'block';
            };
            if (rightBtn != undefined) {
                rightBtn.style.display = 'block';
            }
        }, 1000);
    };

    const slidePage = (page, direction) => {
        // ------------- //
        // 로딩 처리 필요 //
        // ------------- //
        buttonLoading();

        // 현재 슬라이드
        let self = pageList[page];

        if (direction == 'left' && page < pageCount) {
            self.style.transform = 'translate3d(-100%, 0px, 0px)';
            // 왼쪽으로 가는데, 만약 다음 슬라이드가 마지막인 경우(setSTate는 바로 적용되지 않는다).
            if (page+2 == pageCount) {
                // page가 0부터 시작해서. 마지막 장
                rightButton.current.style.borderColor = 'black';
            };
            // 마지막 장일 경우 page 연산을 1초 지연한다(화살표 로딩)
            if (page == 0) {
                setTimeout(() => {
                    setPage(page+1); // 한 페이지 뒤로 넘김
                }, 990);
            } else {
                setPage(page+1);
            };
        };
        if (direction == 'right' && page > 0) {
            let prev = pageList[page-1];
            prev.style.transform = 'translate3d(0px, 0px, 0px)';
            if (page+1 == pageCount) {
                // 마지막 장인데, 오른쪽으로 가는 버튼을 누른 경우
                rightButton.current.style.borderColor = 'white';
            };
            // 마지막 장일 경우 page 연산을 1초 지연한다(화살표 로딩)
            if (page+1 == pageCount) {
                setTimeout(() => {
                    setPage(page-1); // 한 페이지 앞으로 넘김
                }, 990);
            } else {
                setPage(page-1);
            }
        }
    };

    return (
        <>
            {page > 0 && (<PageButton innerRef={rightButton} direction={'right'} onClick={(e) => slidePage(page, 'right')}/>)}
            <SliderBanner backgroundColor={'rgba(152,0,0,0.56)'} page={1}>
                <Banner1 />
            </SliderBanner>
            <SliderBanner backgroundColor={'black'} page={2}>
                <Banner2 />
            </SliderBanner>
            <SliderBanner backgroundColor={'rgba(152,0,0,0.56)'} page={3}>
                <Banner3 />
            </SliderBanner>
            <SliderBanner backgroundColor={'black'} page={4}>
                <Banner4 />
            </SliderBanner>
            <SliderBanner page={5}>
                <section>
                    <h2> 최종페이지입니다. </h2>
                </section>
            </SliderBanner>
            {page+1 < pageCount && <PageButton innerRef={leftButton} direction={'left'} onClick={(e) => slidePage(page, 'left')}/>}
        </>
    )
}