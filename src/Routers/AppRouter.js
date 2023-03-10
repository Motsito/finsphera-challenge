import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from '../Components/Layouts/Layout'
import Account from '../Pages/Account/Account'
import Users from '../Pages/Admin/Users/Users'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'
import Project from '../Pages/Project/Project'
import Projects from '../Pages/Projects/Projects'
import Registro from '../Pages/Registro/Registo'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
              <Route exact path="/" element={<PublicRoute> <HomePage /> </PublicRoute>}/>
              <Route exact path="/login" element={<PublicRoute> <Login /> </PublicRoute>}/>
              <Route exact path="/register" element={<PublicRoute> <Registro /> </PublicRoute>}/>
              <Route exact path="/account" element={<PrivateRoute> <Account /> </PrivateRoute>}/>
              <Route exact path="/projects" element={<PrivateRoute> <Projects /> </PrivateRoute>}/>
              <Route exact path="/project/:projectId" element={<PrivateRoute> <Project /> </PrivateRoute>}/>
              <Route exact path="/admin/users" element={<PrivateRoute hasRole="admin" > <Users /> </PrivateRoute>}/>
              
              <Route exact path="*" element={<NotFoundPage />}/>
          </Routes>
        </Layout>
    </Router>
  )
}
