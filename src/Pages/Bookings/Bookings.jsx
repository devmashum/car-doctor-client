import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:3000/booking?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

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
                            booking.map(bookings => <BookingRow key={bookings._id} bookings={bookings} handleDelete={handleDelete}></BookingRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;