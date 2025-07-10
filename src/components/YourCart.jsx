

export default function YourCart({cartDisplay}) {

    return (
        <div className={ `${cartDisplay ? 'grid' : 'hidden'} transition-opacity fixed top-12 right-8 w-2xs min-h-80 rounded-xl shadow bg-white py-3 px-5`}>
            <div className=" flex justify-between items-center mb-2">
                <h1 className=" text-xl">Your Cart</h1>
                <p className=" font-medium text-red-700">count(21)</p>
            </div>
            <hr className=" border-gray-300" />
            <div className=" grid">
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </div>
            <button className=" rounded-3xl bg-blue-700 text-white font-bold py-2 mt-3">Check Out</button>
        </div>
    )
}

function CartProduct() {
    return (
        <div className=" flex items-center px-3 py-2">
            <div className=" mr-2">
                <img src="/src/assets/images/m4-pro.jpg" width="40" height="40" alt="" />
            </div>
            <div>
                <h5 className=" font-medium">Macbook Pro</h5>
                <span className=" text-sm">Php 65,000</span>
            </div>
            <div className=" ml-auto">
                <button >✖️</button>
            </div>
        </div>
    )
}