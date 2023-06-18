import btnNext from '../../../../assets/image/next.png'
import styles from './btnNextPrev.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)  

function BtnNext() {
    return ( 
        <div className={cx('btn')}>
            <img className={cx('btnImg')} src={btnNext} alt="Next" />
        </div>
     );
}

export default BtnNext;