import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    // console.log(data)
    const { _id, title, img } = data;

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const amount = form.amount.value;
        const booking = {
            customerName: name,
            date, email, amount,
            service_id: _id,
            service: title,
            img
        }
        console.log(booking);
        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Your booking is confirmed!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleBooking} >
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="amount" defaultValue={'$' + data.price} className="input input-bordered" required />
                    </div>
                </div>
                <div >
                    <button className="btn btn-primary btn-block">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;