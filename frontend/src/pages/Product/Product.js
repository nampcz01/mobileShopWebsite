import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import logoImg from './../../assets/image/Vshop.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Product() {
    return ( 

        <div className={cx('wrapper')}>
            <div className={cx('wrapper-product')}>
                <div className={cx('imgPd')}>
                    <img height={'350px'} src="https://storage.googleapis.com/my-image-products/samsung-galaxy-s23-ultra-1-600x600.jpg" alt="" />
                </div>
                <div className={cx('detail')}>
                    <div className={cx('name-item')}>
                        Samsung Galaxy S23 Ultra 5G
                    </div>
                    <div className={cx('maf')}>
                        <span>NSX: Samsung</span>
                        <ul className='rating'>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                        </ul>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('priceShow')}>
                            <span>23,999,000 VNĐ</span>
                        </div>
                            <div >
                                <span className={cx('priceShow_previous')}>25,999,000 VNĐ</span>
                                <span className={cx('promotion')}>-10%</span>
                            </div>
                    </div> 
                    <hr className={cx('line')} />
                    <div className={cx('amount-input')}>
                        <div className={cx('amount-text')}><span>Số lượng</span></div>
                        <div className={cx('amount')}>
                            <button className={cx('plusminus')} >-</button>
                            <input type="number" className={cx('num')} defaultValue="0"/>
                            <button className={cx('plusminus')} >+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <div><img height={'70px'} src={logoImg} alt="" /></div>
                    <div className={cx('text')}><span>Cửa hàng điện thoại di động Vshop</span></div>
                </div>
                <div className={cx('info-policy')}>
                    <div>Chính sách bán hàng: </div>
                    <div className={cx('content')}>
                        <div>Miễn phí giao hàng cho đơn hàng từ 5 triệu</div>
                        <div>Cam kết chính hãng 100%</div>
                        <div>Đổi trả trong vòng 30 ngày</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Product;