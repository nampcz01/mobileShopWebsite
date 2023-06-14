import classNames from "classnames/bind";
import styles from './dropper.module.scss';

const cx = classNames.bind(styles)
function DropperMenu({children}) {
    return (  
        <div className={cx('dropper')}>
            {children}
        </div>
    );
}

export default DropperMenu;