//import btnNext from '../../../../assets/image/next.png'
import styles from './btnNextPrev.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)  

function BtnNext({children, ...attributes }) {
    return ( 
        <button className={cx('btn')} {...attributes }>
        <FontAwesomeIcon icon={faChevronRight} />
        {children}
        </button>
     );
}

export default BtnNext;