import Card from "./Card"
import data from "../js/data.json"
import { useState } from "react"

export default function Products() {

    const [products, setProducts] = useState([]) 


    return (
        <>
            <div className=" lg:px-24 px-5 py-5">
                <h1 className=" text-3xl font-medium">Latest Products</h1>
                <hr className=" border-gray-300 my-3 " />
                <div className="flex gap-y-6 gap-x-4 flex-wrap p-3">
                    {data.map((product, index) =>
                        <Card props={product} key={index} />
                    )}
                </div>
            </div>
        </>
    )
}