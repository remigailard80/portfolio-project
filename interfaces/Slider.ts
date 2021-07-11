interface SliderBannerProps {
    backgroundColor: string,
    direction?: String, // subSlider가 사라질 방향
    subColor?: String, // subSlider의 색상
    move?: String, // subSlider가 움직이는 정도(퍼센트)
    id: Number, // id
    type: Number // subSlider 있는지, 없는지
}

export default SliderBannerProps;