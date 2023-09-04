import CardItem from "./CardItem";


const List = ({products}:{products:any}) => {


    return (
        <div className='mt-10 w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {products?.map((item:any, idx:any)=>(
                <CardItem key={idx} data={item}/>
            ))}
        </div>
    )
}

export default List;    