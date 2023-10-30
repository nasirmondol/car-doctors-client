import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Book from "./Book";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5001/bookings?email=${user?.email}`;

    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
        axios.get(url, { withCredentials: true })
        .then(res =>{
            setBookings(res.data)
        })
    }, [url]);
    console.log(bookings);

    return (
        <div className="mx-auto">
            <h2>Bookings: {bookings?.length}</h2>
            <tbody className="table">
                {/* head */}
                {/* <thead className="table overflow-x-auto">
                    <tr className="table overflow-x-auto">
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead> */}



                <div className="lg:px-4 flex-col">
                    <div className="lg:overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Customer Name</th>
                                    <th>Service</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                <tbody>
                    {
                        bookings?.map(book => <Book
                            key={book._id}
                            book={book}
                            bookings={bookings}

                            setBookings={setBookings}
                        ></Book>)
                    }

                </tbody>


            </tbody>
        </div>

    );
};

export default Bookings;