 

export default function Head({ cartDisplay,setCartDisplay}) {

  

    return(
        <header className=" flex justify-between lg:px-24 py-3 bg-gray-900 text-white">
            <h3 className=" text-2xl font-medium">Gadgets Store</h3>
            <div>
                <ul className=" flex gap-4 items-center h-full">
                    <li className=" font-medium"><a  role="button" href="#">Home</a></li>
                    <li className=" font-medium"><a  role="button" href="#">About</a></li>
                    <li className=" font-medium"><a  role="button" href="#">Contact</a></li>
                </ul>
            </div>
            <div className=" flex gap-3">
                <button className=" scale-125" onClick={() => setCartDisplay(!cartDisplay)}>🛒</button>
                <button className=" font-medium">Login</button>
            </div>
        </header>
    )
}