import { useFormik } from 'formik'
import React from 'react'
import { FormShema } from './FormShema';

export default function DestructureFormwithformik() {
    const formInitializeValues = {
        uname: "",
        uemail: "",
        age: "",
        password: "",
        cpassword: "",
    }

    const {handleSubmit, handleChange, values,  errors, handleBlur, touched } = useFormik({
        initialValues: formInitializeValues,
        validationSchema: FormShema,
        onSubmit: (values, action) => {
            
            console.log(values);
            console.log(values.uname);
            console.log(values.uemail);
            console.log(values.age);
            console.log(values.password);
            action.resetForm();
        }
    });

    return (
        <div className='container w-50'>
            <h1>Destructure Working With Formik Library In React  </h1>
            <form onSubmit={handleSubmit} >
                <input type='text' name='uname' value={values.uname} onBlur={handleBlur} onChange={handleChange} className='form-control mt-3' placeholder='User Name'></input>
                {/* {errors.uname} */}
                {errors.uname && errors.uname ? <span style={{ color: 'red' }}>{errors.uname}</span> : null}

                <input type='text' name='uemail' value={values.uemail} onBlur={handleBlur} onChange={handleChange} className='form-control mt-3' placeholder='User Email'></input>
                {/* {errors.uemail} */}
                {errors.uemail && touched.uemail ? <span style={{ color: 'red' }}>{errors.uemail}</span> : null}

                <input type='text' name='age' value={values.age} onBlur={handleBlur} onChange={handleChange} className='form-control mt-3' placeholder='User Age'></input>
                {errors.age && touched.age ? <span style={{ color: "red" }}>{errors.age}</span> : null}

                <input type='text' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} className='form-control mt-3' placeholder='User Password'></input>
                {errors.password && touched.password ? <span style={{ color: "red" }}>{errors.password}</span> : null}

                <input type='text' name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange} className='form-control mt-3' placeholder='User Confirm Password'></input>
                {errors.cpassword && touched.cpassword ? <span style={{ color: "red" }}>{errors.cpassword}</span> : null}


                <input type='submit' value="Submit" className='btn btn-primary mt-2 form-control'></input>
            </form>
        </div>
    )
}

