
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import MyCart from "./MyCart/MyCart";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";

const BookService = () => {
 const service= useLoaderData();
 const {user} =useAuth();
 const axiosPublic = useAxios();
 const[,refetch] = useCart();

 const {img, price, title, _id}=service;

    // Get user information from AuthContext
    // Handle booking submission
    const handleBookService = (event) => {
        event.preventDefault();

        // Gather form data
        const form = event.target;
        const serviceName = form.serviceName.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;

        // Prepare booking object
        const booking = {
            serviceName,
            img,
            email,
            date,
            message,
            service_id: _id,
            price: parseFloat(price),
        };
      
axiosPublic.post('/booking', booking)
.then (res=>console.log(res.data))
Swal.fire({
    title: "Booking sent to Car Doctor!",
    icon: "success"
  })
refetch();

    };

    return (
        <>
           
            <div>
                <h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                    Book a service
                </h3>
                <img
                    className="w-full h-[300px] object-cover rounded-xl"
                    src={img}
                    alt=""
                />
            </div>

            <div>
                <div className="lg:mt-[142px] bg-[#F3F3F3] p-10 rounded-xl">
                    <form onSubmit={handleBookService}  className="card-body">
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={title}
                                    name="serviceName"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={"$" + price}
                                    name="price"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                           
                        </div>
                        <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                               <textarea
                               placeholder="Your message (optional)"
                               className="p-5"
                               type='text-area'
                               name="message"
                               ></textarea>
                            </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-block hover:bg-slate-500 bg-[#FF3811] text-white"
                                type="submit"
                                value="Order Confirm"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookService;
