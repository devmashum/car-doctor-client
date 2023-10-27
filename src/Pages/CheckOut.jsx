import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { price, title, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);

    }

    return (
        <div>
            <h2>Check Out: {title}</h2>
            <img src={img} alt="" />


            <form className="card-body">
                <div className=" grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                            defaultValue={user?.displayName}
                            name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date"
                            name="date"
                            className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            defaultValue={user?.email}
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price}
                            name="price" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block" type="submit" value="Order Confirm" />

                </div>
            </form>
        </div>

    );
};

export default CheckOut;