import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();

    return (
        <div>
            <h2>{cart.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((items, index)=>(  <tr key={items._id}>
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>))
        }
    
     
   
    </tbody>
     
  </table>
</div>
        </div>
    );
};

export default MyCart;