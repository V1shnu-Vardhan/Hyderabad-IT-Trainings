import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
  return (
    <div className=' container p-5'>
        <div className=' row'>
            <div className=' col-md-6'>
                <SendEnquiry/>
                
            </div>
            <div className=' col-md-6'>
                <h1>Address</h1>
                <p> <i class="bi bi-house-door"></i> House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana- 081</p>
                <p><i class="bi bi-telephone-outbound-fill"></i> +91 7671897772</p>
                <p><i class="bi bi-envelope"></i> vishnuvardhanc117@gmail.com</p> <br></br>
                <h2 className=' text-danger'>Hyderabad IT Trainings</h2>
                <p>Hyderabad IT Trainings offers an excellent Software courses training with end to end support to the candidates. We offer MERN Full stack, Python Fullstack, React JS, UI Development, Web/UI Designing & Web Development.</p>

            </div>
        </div>

    </div>
  )
}

export default Contact