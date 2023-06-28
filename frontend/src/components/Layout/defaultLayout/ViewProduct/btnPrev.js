//import btnPrev from '../../../../assets/image/prev.png'
import styles from './btnNextPrev.module.scss'
import classNames from 'classnames/bind';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)  
function BtnPrev({children, ...attributes }) {
    return ( 
        <button className={cx('btn')} {...attributes}>
            <FontAwesomeIcon icon={faChevronLeft} />
            {children}
        </button>
     );
}

export default BtnPrev;