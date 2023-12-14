import React, { useContext, useEffect, useState } from 'react';
import BookingRow from './BookingRow';
import axios from 'axios';
import Swal from 'sweetalert2';
import img from '../../assets/images/banner/3.jpg'
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';

const Bookings = () => {
const axiosSecure= useAxios();
const {user} = useAuth();

const {data: bookings = []} = useQuery({
    queryKey:['bookings'],
    queryFn: async() => {
        const res =await axiosSecure.get(`/bookings?email=${user?.email}`);
        return res.data;
    }
});


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
                            bookings?.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;