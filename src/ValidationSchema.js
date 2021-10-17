import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Your first and last name are required, please.')
        .min(2, 'Name must be at least 2 characters.'),
    phone: yup
    // IS THERE A VALID PHONE NUMBER THING???
        .string()
        .required('Your phone number is required so that we may contact you, if necessary.'),
    email: yup
        .string('You must use a valid email address, please.')
        .required('An email is required so that we may contact you, if necessary.'),
    address: yup
        .string()
        .required('A physical address is required in case we need more information.'),
    extraInfo: yup
        .string()

})

export default schema;