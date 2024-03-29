import { useFormik } from 'formik';
import React from 'react';
import { FormShema } from './FormShema';

export default function Formwithformik() {
const formInitializeValues={
  name:"",
  email:"",
}

  const formik=useFormik({
    initialValues:formInitializeValues,
    validationSchema:FormShema,
    onSubmit:(values)=>{
console.log("formik data ",values);
console.log(values.name + " " + values.email);
    }
  });



  return (
    <div className='container w-50'>
      <h1>Working With Formik Library In React </h1>
      <form onSubmit={formik.handleSubmit}>
        <input type='text' name='name' onChange={formik.handleChange}  value={formik.values.name} className='form-control mt-3' placeholder='Name'></input>
       {formik.errors.name}
        <input type='text' name='email' onChange={formik.handleChange}  value={formik.values.email} className='form-control mt-3' placeholder='Email'></input>
        {formik.errors.email}
        <input type='submit' className='btn btn-primary mt-2'></input>
      </form>
    </div>
  )
}
