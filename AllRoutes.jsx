import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './src/App'
import Login from './src/Login'
import Signup from './src/Signup'
import ChatBot from './src/ChatBot'
import GeekBotLanding from './Landing'
import { AuthProvider } from './authContext'
import ProtectedRoute from './ProtectedRoute'
const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<GeekBotLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
          <Route path="/chat" element={
            <ProtectedRoute>
              <ChatBot />
            </ProtectedRoute>
          } />
      </Routes>
    </AuthProvider>
  )
}

export default AllRoutes
