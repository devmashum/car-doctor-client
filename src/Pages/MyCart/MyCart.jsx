import useCart from "../../hooks/useCart";
import banner from '../../assets/images/banner/3.jpg'
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosPublic = useAxios();
    const totalPrice = cart?.reduce((total, newPrice)=>(total+newPrice.price),0);
   
   const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axiosPublic.delete(`/cart/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your user has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
   }
    return (
        <div>
 <h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                    My Cart
                </h3>
       <img className='w-full h-[300px] object-cover rounded-xl ' src={banner} alt="" />
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl font-bold">
        <th>
          <label>
            #
          </label>
        </th>
        <th>Product Name</th>
        <th>Details</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        cart?.map((items, index)=>(  <tr key={items._id}>
        <th>
          <label>
          {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={items.img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{items.name}</div>
             </div>
          </div>
        </td>
        <td>
      {items.details}
          <br/>
        </td>
        <td className="font-bold">${items.price}</td>
        <th>
          <button onClick={()=> handleDelete(items._id)} className="btn btn-ghost btn-xs text-2xl">X</button>
        </th>
      </tr>))
        }
    </tbody>
     
  </table>
<div className="lg:text-center lg:ml-0 m-4 my-10 text-2xl border border-xl p-5 rounded-xl">
<h1>Total Items: {cart.length}</h1>
<h1>Total Price: ${totalPrice}</h1>
<button className="btn hover:bg-slate-500 bg-[#FF3811] text-white mt-3">Pay Now</button>
</div>

</div>
        </div>
    );
};

export default MyCart;