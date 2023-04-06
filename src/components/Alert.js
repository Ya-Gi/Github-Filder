import React, { useContext } from 'react'
import { AletContext } from '../contexts/aletContext'

const Alert = () => {
  const {error} = useContext(AletContext)
  return (
        error !== null && (
        <div className="container">
            <div className={`alert alert-${error.type}`}>
                { error.msg }
            </div>
        </div>
    )
  )
}

export default Alert