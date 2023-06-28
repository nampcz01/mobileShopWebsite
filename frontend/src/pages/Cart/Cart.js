import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles)

function Cart() {
    return (
    <div className={cx('wrapper')}>
        <div className={cx('item')}>
            <img height={'400px'} src="https://www.october16th.store/assets/empty-cart-e2d16cf8.jpg" alt="" />
            <div className={cx('text')}>
                <span>Bạn chưa có sản phẩm nào trong giỏ hàng</span>
                <span>Hãy mua gì đó!</span>
            </div>
            <a href="/"><button className={cx('btnHome')}>Tiếp tục mua sắm</button></a>
        </div>
    </div>
    )
}
export default Cart;