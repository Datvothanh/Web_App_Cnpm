import styles from './leftBox.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeftBox = () => {
    const images = [
        '//cdn.tgdd.vn/Products/Images/42/289691/Slider/iphone-14-pro-256gb637982220333508687.jpg',
        '//cdn.tgdd.vn/Products/Images/42/289691/Slider/iphone-14-pro-256gb637982220334478665.jpg',
        '//cdn.tgdd.vn/Products/Images/42/289691/Slider/iphone-14-pro-256gb637982220335458780.jpg',
        '//cdn.tgdd.vn/Products/Images/42/289691/Slider/iphone-14-pro-256gb637982220331708704.jpg',
    ];

    return (
        <div className={styles.leftBox}>
            <div className={styles.containerSlider}>
                <div className={styles.containerSliderBody}>
                    <Slider
                        dots={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={false}
                        autoplaySpeed={2000}
                    >
                        {images?.map((src, index) => (
                            <div key={index} className="">
                                <div className="">
                                    <a href="">
                                        <img src={src} alt="" className="" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
export default LeftBox;
