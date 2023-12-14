import Swal from 'sweetalert2';
import img from '../../assets/images/banner/6.jpg'
import contact from '../../assets/images/contact.png'
import useAxios from '../../hooks/useAxios';

const Contact = () => {
  const axiosPublic = useAxios();

   const handleContact=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const message=form.message.value;

    console.log(name, email, message);

    const contactData={
name: name,
email:email,
message:message
    }

    axiosPublic.post('/contact', contactData)
    .then(res => {
      console.log(res.data)
      
  })
  Swal.fire({
    title: "Thanks!",
    text: "We will contact you soon!",
    icon: "success"
  })
  .catch(error => {
      console.log(error)
  })
};

 

    return (
        <div>
          <h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                    Contact Us
                </h3>
       <img className='w-full h-[300px] object-cover rounded-xl ' src={img} alt="" />

       <div className='flex justify-center items-center lg:mt-10 bg-base-200 p-10 rounded-xl'>
        <div className='lg:w-[50%] lg:mr-10'>
       <div className=''>
     <form onSubmit={handleContact}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" name='message' placeholder="Your Message" className="input input-bordered" required />
        </div>
     <div className="form-control">
          <label className="label">
       
          </label>
          <input type="submit" className="btn btn-block bg-[#FF3811] hover:bg-slate-500 text-white" required />
        </div>

        
     </form>
       </div>
        </div>
        <div className='lg:w-[50%] lg:block hidden'>
            <img src={contact} alt="" />
        </div>
       </div>
        </div>
    );
};

export default Contact;