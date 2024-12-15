import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiries,setEnquiries] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4001/enquiries`)
        .then((res)=> setEnquiries(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className=' container p-5'>
        <h1 className=' text-center'>View Enquiries</h1>
        <div className=' row'>
            {
                enquiries.map((enquiry,index)=>{
                    return(
                        <div className=' col-lg-4' key={index}>
                            <div className=' card w-100 shadow overflow-hidden border-0 '>
                                <ul className=' list-group list-group-flush'>
                                    <li className=' list-group-item'>Name:{enquiry.name}</li>
                                    <li className=' list-group-item'>Mobile:{enquiry.mobile}</li>
                                    <li className=' list-group-item'> Mail:{enquiry.email}</li>
                                    <li className=' list-group-item'>Course:{enquiry.course}</li>
                                    <li className=' list-group-item'>Message:{enquiry.message}</li>

                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ViewEnquiries