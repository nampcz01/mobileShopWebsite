import Header from '../componentLayout/Header'
import ViewProduct from './ViewProduct'
import styles from './defaultLayout.module.scss'
import classNames from 'classnames/bind'
import Banner from './Banner'

const cx = classNames.bind(styles)
function defaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('banner')}>
                <Banner/>
            </div>
            <div className={cx('container')}>
                <ViewProduct /> 
            </div>  
        </div>
     );
}

export default defaultLayout
