import Card from "../../../CardItem";
import styles from './ViewProduct.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles) 

function viewProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('rowCard')}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
            </div>
        </div>
    );
    
}

export default viewProduct;