import classNames from "classnames/bind";
import styles from './Banner.module.scss';
import 'swiper/swiper.min.css';
import Slider from "./Slider";
const cx = classNames.bind(styles)

function Banner() {
    return (
      <div className= {cx('banner')}>
        <div className={cx('bannerLayout')}>
          <Slider/>
        </div>
      </div>
    );
}
export default Banner;