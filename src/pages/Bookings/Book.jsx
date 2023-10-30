import Swal from "sweetalert2";

const Book = ({ book, bookings, setBookings }) => {
    console.log(book)
    const { service, customerName, amount, date, email, img, _id, status } = book;

    const handleDeleteUser = id => {
        const proceed = confirm('are you want to sure delete?')

        if (proceed) {
            fetch(`http://localhost:5001/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                       const remaining = bookings.filter(book => book._id !== id)
                       setBookings(remaining)
                       alert('deleted successful')
                })
        }


    }

    const handleUpdateBooking = (id) =>{
        fetch(`http://localhost:5001/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // status code
                const remaining = bookings.filter(book => book._id !== id);
                const updated = bookings.find(book => book._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tr>
                    <th>
                        <button onClick={() => handleDeleteUser(_id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    {
                                        img && <img src={img} alt="Avatar Tailwind CSS Component" />
                                    }
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {customerName}
                    </td>
                    <td>{service}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{amount}</td>
                    <th>
                        {status === 'confirm'? <span className="text-green-500">Confirmed</span>:
                            <button onClick={() => handleUpdateBooking(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
                    </th>
                </tr>
            </table>
        </div>
    );
};

export default Book;