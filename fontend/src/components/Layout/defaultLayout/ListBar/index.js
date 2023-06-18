
import classNames from "classnames/bind";
import styles from './Listbar.module.scss'

const cx = classNames.bind(styles)

function ListBar() {
    return (
        <div className={cx('wrapper')}>
            <h3>Danh mục</h3>
            <div className={cx('list')}>
                
            </div>
        </div>
    )
}

export default ListBar;