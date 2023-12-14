import React from 'react';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const ShopCard = ({items}) => {
    const {img,name,price, details}=items;
    const axiosSecure = useAxios();
    const {user} = useAuth();
    const [,refetch] = useCart();

    const handleMyCart = () =>{
        const items={
            img: img,
            name: name,
            price: price,
            details: details,
            email: user.email
        }

        axiosSecure.post('/cart', items)
        .then(res=>{
            console.log(res.data);
            })
            Swal.fire({
                title: "Item added to the cart!",
                icon: "success"
              })
        refetch();
    }

    
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-5">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className="rounded-xl w-[200px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">

   <h2 className="card-title text-2xl">{name}</h2>
   <p className='text-xl'>Price ${price}</p>

    <p>{details}</p>
    <div className="card-actions">


      <button onClick={()=>handleMyCart(items)} className="btn btn-block bg-[#FF3811] text-white hover:bg-slate-500">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShopCard;