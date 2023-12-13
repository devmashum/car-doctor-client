import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import ShopCard from './ShopCard';
import banner from '../../assets/images/banner/4.jpg'

const Shop = () => {
    const axiosPublic=useAxios();
    const {data: shop = []} = useQuery({
        queryKey:['shop'],
        queryFn: async() => {
            const res =await axiosPublic.get('/shop');
            return res.data;
        }
    });
    return (
        <div className=''>
      <h3 className="absolute m-20 text-white text-4xl lg:text-6xl font-bold">
                    Shop
                </h3>
       <img className='w-full h-[300px] object-cover rounded-xl ' src={banner} alt="" />
        <div className='lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-5'>
            {
                shop.map(items=><ShopCard key={items._id} items={items}></ShopCard>)
            }
        </div>
        </div>
    );
};

export default Shop;