import classNames from "classnames/bind";
import styles from "./Item.module.scss"
import imgSearch from '../../assets/image/search.png'

const cx = classNames.bind(styles)
function Item() {
    return (  
        <div className={cx('wrapper')}> 
            <div className={cx('nameItem')}>
                <p>nameItem</p>
            </div>
            <img width= '10px' src={imgSearch} alt="" />
        </div>
    );
}

export default Item;