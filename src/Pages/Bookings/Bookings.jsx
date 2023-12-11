import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `https://car-doctor-server-chi-seven.vercel.app/booking?email=${user?.email}`;


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
       
            fetch(`https://car-doctor-server-chi-seven.vercel.app/booking/${id}`, {
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
        fetch(`https://car-doctor-server-chi-seven.vercel.app/booking/${id}`, {
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