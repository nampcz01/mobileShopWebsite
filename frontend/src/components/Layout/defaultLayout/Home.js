import ViewProduct from './ViewProduct/ViewProduct'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Banner from './Banner'
import Nav from '../componentLayout/Nav'

const cx = classNames.bind(styles)
function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Nav/>
            </div>
           <div className={cx('body')}>
           <Banner/>
                <div className={cx('container')}>
                 <ViewProduct /> 
              
                </div>  
           </div>
        </div>
     );
}

export default Home
