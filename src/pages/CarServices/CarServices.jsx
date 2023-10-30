import { useState } from "react";
import { useEffect } from "react";

const CarServices = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
        <h2>Services: {services.length}</h2>
        {
            services.map(service => <div key={service._id}>
                <img src={service.img} alt="" />
                <h2>{service.title}</h2>
                <p>Price: ${service.price}</p>
                <p>{service.description}</p>
            </div>)
        }
        </div>
    );
};

export default CarServices;