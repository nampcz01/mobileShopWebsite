
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logoImg from '../../../../assets/image/Vshop.gif'
import imgSearch from '../../../../assets/image/search.png'
//tippy
import Button from '../../../Button'
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
    return (<header className={cx('wrapper')}> 
        <div className={cx('innerComponent')}>
            {/* logo */}
            <div className={cx('logo')}>
                <a href='/'>
                    <img width= '118px' src = {logoImg} alt='V Shop'/>
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
                    <input  placeholder='Sản phẩm bạn cần tìm là gì?' spellCheck='false'/>
            
                    
                        <button className={cx('btn-search')}>
                            {/* icon search */}
                            <img width='20px' src={imgSearch} alt="icon" />
                        </button>

                </div>
            </Tippy>
            {/* action */}
            <div className={cx('action')}>
                <Button outline>Login</Button>
            </div>
        </div>
    </header>)
}

export default Header;