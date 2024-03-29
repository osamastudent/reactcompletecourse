import * as Yup from 'yup';

export const FormShemaPractice = Yup.object({
    name: Yup.string().min(3, "Too Short").max(5, "Too Long").required("The Field Is Must."),
    email: Yup.string().email("Invalid Email").min(10, "Too Short").max(35, "Too Long").required("The Field Is Must."),

});