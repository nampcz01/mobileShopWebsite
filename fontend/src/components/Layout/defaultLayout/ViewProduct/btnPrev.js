import btnPrev from '../../../../assets/image/prev.png'
import styles from './btnNextPrev.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)  
function BtnPrev() {
    return ( 
        <div className={cx('btn')}>
            <img className={cx('btnImg')} src={btnPrev} alt="prev" />
        </div>
     );
}

export default BtnPrev;