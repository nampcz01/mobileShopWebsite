
import classNames from "classnames/bind";
import styles from './Listbar.module.scss'

const cx = classNames.bind(styles)

function ListBar() {
    return (
        <aside className={cx('wrapper')}>
            <h3>Danh mục</h3>
            <div className={cx('list')}>
                <ul>
                    <li> Điện thoại </li>
                    <li> Phụ kiện </li>
                </ul>
            </div>
        </aside>
    )
}

export default ListBar;