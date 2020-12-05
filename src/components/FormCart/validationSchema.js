import * as Yup from 'yup';
import "yup-phone";


export const validationSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    lastname: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    age: Yup.number()
        .positive('number must be positive')
        .integer('number must be integer')
        .required('Required'),
    deliveryAddress: Yup.string()
        .min(5, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    phoneNumber: Yup.string()
        .phone('UA', true, 'phone number must be valid for region UA')
        .required('Required')
           
});
