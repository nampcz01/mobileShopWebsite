import {Link} from 'react-router-dom' 
import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({to, href, onClick, children, primary = false, outline = false, ...passProps}) {
    //Cpn is components
    let Cpn = 'button';
    let classes = cx('wrapper',{
        primary,
        outline,
    })

    const props = {
        onClick,
        ...passProps,
    }
    if (to){
        props.to = to
        Cpn = Link
    }else if (href){
        props.href = href
        Cpn = 'a'
    }
    return (  
        <Cpn className={classes} {...props}> 
            <span>{children}</span>
        </Cpn>
    );
}

export default Button;