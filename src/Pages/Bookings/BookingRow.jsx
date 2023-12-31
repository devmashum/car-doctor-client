
const BookingRow = ({ booking }) => {
    const { customerName, price, date, email, service, img, _id, status } = booking;

    return (
   
            <tr>
            <th>
                <label>
                    <button  className="btn  btn-circle btn-sm bg-[#FF3811] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
            
               <div className='flex gap-5'>
                <div> <img className='lg:w-20 h-20 rounded-xl' src={img} alt="" /> </div>
                <div>
                   <h3 className='text-base font-bold'> {service}</h3>
                    <br />
                  <h3>  {date}</h3>
                </div>
               </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{!email && 'No email found' || email && email}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className='font-bold text-primary btn btn-ghost'>Confirmed</span> : < button onClick={() => handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white">Please Confirm</button>}
            </th>
        </tr>

    );
};

export default BookingRow;