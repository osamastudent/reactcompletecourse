import { Field, Formik,Form, useFormik, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as MyYup from 'yup'
import '../css/index.css';
import RedErrorMessaeg from './RedErrorMessaeg';
export default function FormikOnly() {
// const [formData,setFormData]=useState({});
const newValidations=MyYup.object({
    name:MyYup.string().min(3,"at least 3 characters").max(15,"maximum 15 characters").required("The Name Field is Required"),
    email:MyYup.string().email("Invalid Email You Entered").required("The Email Field Is Required"),
    age:MyYup.string().min(18,"At Least 18 Years.").required("The Age Field Is Required"),
    password:MyYup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)").required("The Password Field Is Required"),
    cpassword:MyYup.string().oneOf([MyYup.ref('password')],"The Password and Confirm Password Should be Same. ").required("The Confirm Password Field Is Required"),
    gender:MyYup.string().required("The Gender Field is Required"),
    country:MyYup.string().required("The Country Field is Required"),
    hobby:MyYup.array().min(1,"One Hobby Must."),
    address:MyYup.string().min(100,"At Least Characters").required("The Address Field is Required"),

})
  return (
    <div className='container'>
        <h1 className='myerror'> Creating Form With Formik Components</h1>
        {/* <h1>{formData.name}</h1>
        <h2>{JSON.stringify(formData)}</h2> */}
        <Formik
        validationSchema={newValidations}
         initialValues={{name:"",email:"",age:"",password:"",gender:"",hobby:[],country:"",address:""}}
         onSubmit={(values)=>{
            console.log(values);
            // setFormData(values);
         }}
         >
            <Form>
                <label htmlFor="" className='mt-3'>Name</label>
                <Field type="text" name="name" className="form-control " placeholder="Name" />
{/* <ErrorMessage></ErrorMessage> */}
<RedErrorMessaeg name="name"></RedErrorMessaeg>
               
                <label htmlFor="" className='mt-3'>Email</label>
                <Field type="text" name="email" className="form-control " placeholder="Email" />
                <RedErrorMessaeg name="email"></RedErrorMessaeg>

                <label htmlFor="" className='mt-3'>Age</label>
                <Field type="number" name="age" className="form-control "  placeholder="Age" />
                <RedErrorMessaeg name="age"></RedErrorMessaeg>

                <label htmlFor="" className='mt-3'>Password</label>
                <Field type="text" name="password" className="form-control " placeholder="Password" />
                <RedErrorMessaeg name="password"></RedErrorMessaeg>

                <label htmlFor="" className='mt-3'>Confirm Password</label>
                <Field type="text" name="cpassword" className="form-control " placeholder="Confirm Password" />
                <RedErrorMessaeg name="cpassword"></RedErrorMessaeg>

                <label htmlFor="" className='mt-3'>Gender:</label>  &nbsp; &nbsp;
                <Field type="radio" name="gender" value="male"/> &nbsp;<label>Male</label>&nbsp; &nbsp;
                <Field type="radio" name="gender" value="female" /> &nbsp;Female &nbsp; &nbsp;
                <RedErrorMessaeg name="gender"></RedErrorMessaeg>
<br></br>
                <label htmlFor="" className='mt-3'>Country</label>
<Field as="select" name="country" className="form-control ">

<option value="">--Select--</option>
<option value="pakistan">Pakistan</option>
<option value="india">india</option>
<option value="bangladesh">bangladesh</option>
</Field>
<RedErrorMessaeg name="country"></RedErrorMessaeg>

<label htmlFor="" className='mt-3'>Hobby</label>&nbsp;
<Field type="checkbox" name="hobby" value="cricket"></Field> &nbsp;Cricket &nbsp; &nbsp;
<Field type="checkbox" name="hobby" value="football"></Field> &nbsp;Football &nbsp; &nbsp;
<Field type="checkbox" name="hobby" value="hockey"></Field> &nbsp;Hockey &nbsp; &nbsp;
<RedErrorMessaeg name="hobby"></RedErrorMessaeg>


<br></br>
<label htmlFor="" className='mt-3'>Address</label>
<Field as="textarea" name="address" className="form-control"></Field>
<RedErrorMessaeg name="address"></RedErrorMessaeg>

            <button type='submit' className='btn btn-warning form-control mt-2'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}
