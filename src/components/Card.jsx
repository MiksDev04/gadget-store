

export default function Card({ props }) {


    return (
        <div className=" bg-white shadow">
            <div>
                <img src={props.image} alt="Product Image" width="200" title={'Image of ' + props.name} />
            </div>
            <div className=" px-3 py-2">
                <h1 className=" font-medium">{props.name}</h1>
                <p className=" text-lg font-bold">Php {props.price}</p>
                <button className=" px-4 py-1 border border-blue-700 rounded-2xl text-blue-700 hover:bg-blue-700 hover:text-blue-50 mt-2">+ Add to Cart</button>
            </div>
        </div>
    )
}