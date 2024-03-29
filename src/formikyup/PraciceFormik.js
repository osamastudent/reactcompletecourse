import { useFormik } from 'formik'
import React from 'react'
import { FormShemaPractice } from './FormSchemaPractice';

export default function PraciceFormik() {
    const formInitializeValues={
        name:"",
        email:"",
    }
    const formik=useFormik({
initialValues:formInitializeValues,
validationSchema:FormShemaPractice,
onSubmit:(values)=>{
console.log(values);

}
    });
  return (
    <div>
        <h4>PraciceFormik</h4>
         <br></br>
      <br></br>

      <form onSubmit={formik.handleSubmit}>
        <input type='text' name='name' onChange={formik.handleChange}  value={formik.values.name}  className='form-control mt-2' placeholder='Name'></input>
       {formik.errors.name}
        <input type='text' name='email'  onChange={formik.handleChange} value={formik.values.email}  className='form-control mt-2' placeholder='Email'></input>
        {formik.errors.email}
        <input type='submit' className='btn btn-primary form-control mt-3'></input>
      </form>
    </div>
  )
}
