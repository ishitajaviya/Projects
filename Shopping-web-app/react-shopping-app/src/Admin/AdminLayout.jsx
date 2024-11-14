import React from 'react'
import AdminHeader from './AdminHeader'
import AdminProduct from './AdminForm/AdminProduct'

export default function AdminLayout() {
  return (
    <>
    <AdminHeader/>
    <AdminProduct/>
    {/* <fetchedProduct/> */}
    </>
  )
}
