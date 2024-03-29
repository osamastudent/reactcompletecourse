import { string } from 'prop-types';
import * as Yup from 'yup'

export const FormShema =Yup.object({
// name:Yup.string().min(3,"Too Short").max(5,"Too Long").required("The Field Is Must."),
// email:Yup.string().email("Invalid Email").min(10,"Too Short").max(35,"Too Long").required("The Field Is Must."),
uname:Yup.string().min(3,"Too Short").max(5,"Too Long").required("The Field Is Must."),
uemail:Yup.string().email("Invalid Email").min(10,"Too Short").max(35,"Too Long").required("The Field Is Must."),
age:Yup.number().min(18).max(50).required("the age field is required"),
password:Yup.string().required("Password Is Must").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)"),
cpassword:Yup.string().required("the fiels is must").oneOf([Yup.ref('password')],"Password and Confirm Pasword should be match")
});