
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logoImg from '../../../../assets/image/Vshop.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons'

//tippy
//import Button from '../../../Button';
import Tippy from '@tippyjs/react/headless';
import { DropperMenu } from '../../../dropperMenu';
import Item from '../../../Item';

const cx = classNames.bind(styles)

function Header() {
    const[searchResult, setSearchResult] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        }, 0)
    }, [])
    //the cha trong component
    return (
    <div className={cx('fix')}>
        <div className={cx('wrapper')}> 
            <div className={cx('innerComponent')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <a href='/'>
                        <img width= '118px' src = {logoImg} alt='V_Shop'/>
                    </a>
                </div>
                <Tippy
                    interactive
                    visible= {searchResult.length > 0}
                    render={(attrs) =>(
                        <div className={cx('search-result')} tabIndex= '-1'{...attrs}>
                            <DropperMenu> 
                                <h4 className={cx('search-label')}>
                                    Sản phẩm:
                                </h4>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                            </DropperMenu>
                        </div>
                    )}
                >
                    {/* search */}
                    <div className={cx('search')}>
                        <input  placeholder='   Sản phẩm bạn cần tìm là gì?' spellCheck='false'/>
                            <button className={cx('btn-search')}>
                                {/* icon search */}
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
                            </button>
                    </div>
                </Tippy>
                {/* action */}
                <div className={cx('action')}>
                    <ul className={cx('action-items')}>
                        <li><a className={cx('item')} href="/"><FontAwesomeIcon icon={faHouse} size='xl'/> Trang chủ</a></li>
                        <li><a className={cx('item')} href="/login"><FontAwesomeIcon icon={faUser} size='xl' /> Tài Khoản</a></li>
                        <li><a className={cx('item')} href="/cart"><FontAwesomeIcon icon={faCartShopping} size='xl' /> Giỏ Hàng</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;