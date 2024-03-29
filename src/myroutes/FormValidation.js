import React, { useState } from 'react'

export default function FormValidation() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [lastError, setLastError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const [hobby,setHobby]=useState();
    const [hobbyError,setHobbyError]=useState(false);
    const handleName = (e) => {
        let name = e.target.value;
        if (name.length < 3) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        setName(name);
    }


    const handleEmail = (e) => {
        let email = e.target.value;
        if (!email.match(emailRegex)) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }
        setEmail(email);

    }


    const handleArea = (e) => {
        let lastName = e.target.value;
        if (lastName.length < 10) {
            setLastError(true);
        } else {
            setLastError(false);
        }
        setLastName(lastName);
    }

    const handlePassword = (e) => {
        let password = e.target.value;
        let passwordpattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        if (!password.match(passwordpattern)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        setPassword(password);
    }


    const handleFormSubmition = (e) =>{
    e.preventDefault();
    let name=e.target[0].value;
    let email=e.target[1].value;
    let address=e.target[2].value;
    let password=e.target[3].value;
    if(name.length<3){
setNameError(true);
    }
    else{
        setNameError(false);
    }
    if (!email.trim()) {
        setEmailError("please enter email");
    }
    else{
        setEmailError(false);
    }
    // if(!email.match(emailRegex)){
    //     setEmailError(true);
    // }
    // else{
    //     setEmailError(false);
    // }

    if((!name.length < 3) && (email.match(emailRegex))){
        alert("form has been submitted");
        alert(name+ " "+email);
    }
    }

    return (
        <div>
            <div className='container '>
                <h1>Validation Form</h1>
                <form className='text-start' onSubmit={handleFormSubmition}>
                    <input type='text' className='form-control' onChange={handleName} value={name} placeholder='Name'></input>
                    {nameError ? <span>Name Legth must be greater than 2 characters</span> : null}

                    <input type='text' className='form-control mt-3' onChange={handleEmail} value={email} placeholder='Email'></input>
                    {emailError ? <span>email is invalid</span> : null}

                    <textarea value={lastName} className='form-control mt-3' onChange={handleArea}>address</textarea>
                    {lastError ? <span>must be 10 characters</span> : null}

                    <input type='text' className='form-control mt-3' onChange={handlePassword} value={password} placeholder='Password'></input>
                    {passwordError ? <span>Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)</span> : null}

                    <label>Select Hobby</label>&nbsp;&nbsp;

<input type='checkbox' name='hobby' value="cricket" ></input>&nbsp; cricket &nbsp;
<input type='checkbox' name='hobby' value="football"></input>&nbsp; football &nbsp;
<input type='checkbox' name='hobby' value="hockey"></input>&nbsp; hockey &nbsp;

{hobbyError ? <span>any oe irs required</span> : null}
                    <input type='submit' className='btn btn-primary mt-3'></input>

                </form>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}
