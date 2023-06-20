import Header from '../componentLayout/Header/Header'
import ViewProduct from './ViewProduct'
import styles from './defaultLayout.module.scss'
import classNames from 'classnames/bind'
import Banner from './Banner'

const cx = classNames.bind(styles)
function defaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
           <div className={cx('body')}>
                <div className={cx('banner')}>
                    <Banner/>
                </div>
                <div className={cx('container')}>
                    <ViewProduct /> 
                </div>  
           </div>
        </div>
     );
}

export default defaultLayout
