import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';
import Swal from 'sweetalert2';
import img from '../../assets/images/banner/3.jpg'

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:3000/booking?email=${user?.email}`;


    useEffect(() => {
        // Alternative with AXIOS
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBooking(res.data);
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBooking(data))
    }, [url]);

    const handleDelete = (id) => {
       
            fetch(`http://localhost:3000/booking/${id}`, {
                method: 'DELETE'
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                 
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
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        }
                      });
                          const remainingBookings = booking.filter((booking) => booking._id !== id);
                          setBooking(remainingBookings);
                        }
                      });
                //   if(data.isConfirmed){
                //     const remainingBookings = booking.filter((booking) => booking._id !== id);
                //     setBooking(remainingBookings);
                //   }
                }
        
    
    const handleBookingConfirm = id => {
        fetch(`http://localhost:3000/booking/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter(bookings => bookings._id !== id);
                    const updated = booking.find(bookings => bookings._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBooking(newBookings);

                }
            })
    }


    return (
        <div>
        <h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                    My Booking
                </h3>
           <img className='w-full h-[300px] object-cover rounded-xl lg:mb-10' src={img} alt="" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                              Delete
                            </th>
                            <th>Service</th>
                            <th>Customer Name</th>
                            <th>E-mail</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(bookings => <BookingRow key={bookings._id} bookings={bookings} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;