import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';

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

    const handleDelete = id => {
        const proceed = confirm('are you sure, you want to delete');
        if (proceed) {
            fetch(`http://localhost:3000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = booking.filter(bookings => bookings._id !== id);
                        setBooking(remaining);
                    }
                })
        }
    };
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
                    const updated = bookings.find(bookings => bookings._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBooking(newBookings);

                }
            })
    }


    return (
        <div>
            <h2>Your Booking: {booking.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Customer Name</th>
                            <th>Favorite Color</th>
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