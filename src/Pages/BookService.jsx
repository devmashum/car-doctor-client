import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
    // Fetch service details
    const service = useLoaderData();
    const { price, title, img, _id } = service;

    // Get user information from AuthContext
    const { user } = useContext(AuthContext);

    // Handle booking submission
    const handleBookService = (event) => {
        event.preventDefault();

        // Gather form data
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        // Prepare booking object
        const booking = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service_id: _id,
            price: price,
        };

      
        // Send booking request to server
        fetch("http://localhost:3000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            
            .then((data) => {
                console.log(data);
            });
            Swal.fire({
                title: "Great!",
                text: "Thanks for booking a service",
                icon: "success"
              });

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
                    <form onSubmit={handleBookService} className="card-body">
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    defaultValue={user?.displayName}
                                    name="name"
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
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-block bg-[#FF3811] text-white"
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
