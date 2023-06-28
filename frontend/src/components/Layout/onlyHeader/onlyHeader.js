import Header from "../componentLayout/Header/Header";

function onlyHeader({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default onlyHeader
