import {Route , Routes} from 'react-router-dom'
import React from 'react'
import Layout from '../pages/layout/Layout'
import Dashboard from '../pages/dashboard/Dashboard'
import School from '../pages/superAdmin/school/School'
import Teacher from '../pages/superAdmin/teacher/Teacher'
import Student from '../pages/superAdmin/student/Student'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='school' element={<School/>}/>
            <Route path='teacher' element={<Teacher/>}/>
            <Route path='student' element={<Student/>}/>
        </Route>
    </Routes>
  )
}

export default AllRoutes