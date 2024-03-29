import { ErrorMessage } from 'formik'
import React from 'react'

export default function RedErrorMessaeg({name}) {
  return (
    <div style={{color:"red"}}>
        <ErrorMessage name={name}></ErrorMessage>
    </div>
  )
}
