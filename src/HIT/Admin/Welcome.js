import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {
  const course = useCallApi(`http://localhost:4001/courses`)
  const batch = useCallApi(`http://localhost:4001/batch`)
  const enquiry = useCallApi(`http://localhost:4001/enquiries`)
  return (
    <div className=' container p-5'>
        <h1>Welcome to Admin Dashboards</h1>
        <div className=' row'>
          <div className=' col-md-4'>
            <div className=' card shadow'>
              <div className=' card-body'>
                <h1 className=' card-title'>{course.length}</h1>
                <h5 className=' card-title'>Courses</h5>
              </div>
            </div>
          </div>
          <div className=' col-md-4'>
            <div className=' card shadow'>
              <div className=' card-body'>
              <h1 className=' card-title'>{batch.length}</h1>
                <h5 className=' card-title'>Batches</h5>
              </div>
            </div>
          </div>
          <div className=' col-md-4'>
            <div className=' card shadow'>
              <div className=' card-body'>
              <h1 className=' card-title'>{enquiry.length}</h1>
                <h5 className=' card-title'>Enquiries</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Welcome