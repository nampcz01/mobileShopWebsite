import Header from '../componentLayout/Header'
import ListBar from './ListBar'
import ViewProduct from './ViewProduct'
import styles from './defaultLayout.module.scss'
import classNames from 'classnames/bind'
import Banner from './Banner'

const cx = classNames.bind(styles)
function defaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <Banner/>
            <div className={cx('container')}>
                <ListBar />
                <div className={cx('content')}> 
                    <ViewProduct />
                </div>   
            </div>  
        </div>
     );
}

export default defaultLayout
