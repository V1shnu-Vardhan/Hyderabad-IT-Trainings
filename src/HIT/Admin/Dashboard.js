import React, { useMemo, useState } from 'react'
import Welcome from './Welcome'
import AddBatch from './AddBatch'
import BatchesData from './BatchesData'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourses'
import ViewEnquiries from './ViewEnquiries'

const Dashboard = () => {
    const [view,setView] = useState("")
    const DashboardView = useMemo(()=>{
        if(view ===""){
            return <Welcome/>
        }
        else if(view ==="addBatch"){
            return <AddBatch/>
        }
        else if(view ==="viewBatch"){
            return <BatchesData/>
        }
        else if(view ==="addCourse"){
            return <AddCourse/>
        }
        else if(view ==="viewCourses"){
            return <ViewCourses/>
        }
        else if(view ==="viewEnquiries"){
            return <ViewEnquiries/>
        }
    },[view])
  return (
    <div className=' container'>
        <div className=' row'>
            <aside className=' col-lg-3'>
                <h2 onClick={()=> setView("")}>Admin Dashboard</h2>
                <button onClick={()=> setView("addBatch")}>Add Batches</button>
                <button onClick={()=> setView("viewBatch")}>View Batches</button>
                <button onClick={()=> setView("addCourse")}>Add Courses</button>
                <button onClick={()=> setView("viewCourses")}>View Courses</button>
                <button onClick={()=> setView("viewEnquiries")}>View Enquiries</button>
            </aside>
            <div className=' col-lg-9'>
               {DashboardView}
            </div>
        </div>
    </div>
  )
}

export default Dashboard