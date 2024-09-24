
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">

        <div className="w-32 h-40 object-contain rounded-md">
          <img src={item.image} className="w-full h-full" />
        </div>
        <div className="ml-4 flex flex-col w-full">
          <h1>{item.title}</h1>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          <div className="flex justify-between items-center w-full ">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}   className="text-red-500 hover:text-red-700">
              <RiDeleteBin5Fill  size={24} />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
