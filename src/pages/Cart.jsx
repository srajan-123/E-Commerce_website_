import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";





const Cart = () => {

  const cart = useSelector((state) => state.cart);
  console.log("Printing Cart");
  console.log("hi")
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    cart && setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );    // .price is given in the api array(cart array here)
  }, [cart])                                                         //calculate total amt. only when this cart array changes

  return (
    <div >
  {
   cart && cart.length > 0  ?            //i.e go inside only if lenght is not undefined

    (<div className="flex ">

      <div className="grid-cols-1  p-2 mx-auto  max-w-[60%] max-h-[200px]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between items-center h-full space-y-52 mr-4 mt-10 ">

        <div  className="flex flex-col">
          <div className="font-semibold uppercase text-sm text-green-700">Your Cart</div>
          <div  className='text-4xl uppercase -mt-1 text-green-700 font-bold'> Summary</div>
          <p className="text-Ig mt-3 text-[16px]">
            <span className="font-semibold text-gray-700">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="text-Ig text-gray-700 font-semibold   ">
          <p>Total Amount: ${totalAmount}</p>
          <button  className='mt-4 bg-green-600 text-white py-2 px-4 w-full rounded hover:bg-green-700 transition duration-300'>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 

    (<div className="flex flex-col items-center justify-center h-screen space-x-5">
      <h1 className='text-gray-500 font-bold'>Cart Empty !!</h1>
      <Link to={"/"}>
        <button  className="border border-gray-300 rounded-md py-2 px-6 text-[14px] rounded-mdtext-white font-semibold mt-4 bg-green-600">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
