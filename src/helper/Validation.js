import * as Yup from 'yup';

export const validationSchemaInputs = Yup.object({
    name: Yup.string().required("Please enter  name"),
    unitPrice: Yup.number().typeError('Amount must be a number').min(0).required("Please enter  Unit Price"),
    unitsInStock: Yup.number().typeError('Amount must be a number').min(0).required("Please enter  Units in stock"),
});