import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';


const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;

    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-[208.008px]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-end items-center'>
                    <p className='text-red-500 font-bold'>Price: ${price}</p>

                    <Link to={`/checkout/${_id}`} className='btn btn-warning btn-outline'>
                        <BsArrowRight className='text-red-500 text-xl font-bold'></BsArrowRight>
                    </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;