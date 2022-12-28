import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react'
import { putData } from '../helper/NewData';
import { validationSchemaInputs } from '../helper/Validation';

function FormikSample() {



    return (
        <Formik
            initialValues={{ name: '', unitPrice: '', unitsInStock: '' }}
            validationSchema={validationSchemaInputs}
            onSubmit={(values, { resetForm }) => {
                putData(values)
                resetForm({ values: "" })
            }
            }
        >
            <div className='form'>
                <h1>React Formik</h1>
                <Form >
                    <div className='form-inputs'>
                        <label htmlFor="name">Name</label>
                        <div className='input-error'>
                            <Field name="name" type="text" />
                            <ErrorMessage component="div" className='error-msg' name="name" />
                        </div>
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor="unitPrice">Unit Price</label>
                        <div className='input-error'>
                            <Field name="unitPrice" type="number" />
                            <ErrorMessage component="div" className='error-msg' name="unitPrice" />
                        </div>
                    </div>


                    <div className='form-inputs'>
                        <label htmlFor="unitsInStock">Units In Stock</label>
                        <div className='input-error'>
                            <Field name="unitsInStock" type="number" />
                            <ErrorMessage component="div" className='error-msg' name="unitsInStock" />
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </div>
        </Formik >
    );
}

export default FormikSample