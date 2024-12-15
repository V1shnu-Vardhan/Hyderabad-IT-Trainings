import React from 'react'
import User from './User'

export default function Map() {
  const data=[
    {
        id:"1",
        course:"mern full stack",
        startDate:"1-9-25",
        duration:"5 months",
        timing:"4pm-5pm",
        trainer:"bhargav"
    },
    {
        id:"2",
        course:"java full stack",
        startDate:"1-9-25",
        duration:"3 months",
        timing:"2pm-3pm",
        trainer:"bhargav"
    },
    {
        id:"3",
        course:"python full stack",
        startDate:"15-9-25",
        duration:"4 months",
        timing:"10am-11am",
        trainer:"shakthivel"
    },
    {
        id:"4",
        course:"ui/ux",
        startDate:"10-10-25",
        duration:"5 months",
        timing:"12pm-1pm",
        trainer:"bhargav"
    },
    {
        id:"5",
        course:"mern stack",
        startDate:"1-9-25",
        duration:"5 months",
        timing:"4pm-5pm",
        trainer:"bhargav"
    },
    {
        id:"6",
        course:"mern stack",
        startDate:"1-9-25",
        duration:"5 months",
        timing:"4pm-5pm",
        trainer:"shakthivel"
    },
]
  return (
    <div>
        {
            data.map((ele)=>{
                return<User id={ele.id}/>
            })
        }
    </div>
  )
}
