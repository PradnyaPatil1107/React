import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductTable() {
    const prodarr=useSelector(state=>state.prodarray)
  return (
    <div>ProductTable</div>
  )
}
