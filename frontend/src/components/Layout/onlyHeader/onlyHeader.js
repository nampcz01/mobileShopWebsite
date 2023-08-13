import Header from "../componentLayout/Header/Header";
import Nav from "../componentLayout/Nav";

function onlyHeader({children}) {
    return ( 
        <div>
            <Nav/>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default onlyHeader
