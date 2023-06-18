import styles from './CardItem.module.scss'
import classNames from 'classnames/bind';
//import Button from '../Button';
const cx = classNames.bind(styles) 

function Card() {
    return (
        <div className={cx('productCard')}>
            <div className= {cx('Card')}>
                <div className={cx('img')}>
                    <img src="https://placehold.co/160x160.png" alt="" />    
                </div>
                <div className={cx('nameItem')}>
                    <h3>name item</h3>
                </div>
                <div className={cx('price')}>
                    <div className={cx('priceShow')}>
                        <p>199.900</p>
                    </div>
                    <div className={cx('priceShow_previous')}>
                        
                    </div>
                </div>
               
            </div>
        </div>
        
    );
}
export default Card;