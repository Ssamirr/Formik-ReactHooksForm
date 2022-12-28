import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { putData } from '../helper/NewData';
import { validationSchemaInputs } from '../helper/Validation';


function HookForm() {

    const formOptions = { resolver: yupResolver(validationSchemaInputs) };

    const { register, handleSubmit, formState: { errors }, reset } = useForm(formOptions);
    const onSubmit = (data) => {
        putData(data);
        console.log(data);
        reset()
    }

    return (
        <div className='form'>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-inputs'>
                    <label htmlFor="name">Name</label>
                    <div className='input-error'>
                        <input type="text" defaultValue="" {...register("name")} />
                        <div className='error-msg'>{errors.name?.message}</div>
                    </div>
                </div>

                <div className='form-inputs'>
                    <label htmlFor="unitPrice">Unit Price</label>
                    <div className='input-error'>
                        <input type="number" defaultValue="" {...register("unitPrice")} />
                        <div className='error-msg'>{errors.unitPrice?.message}</div>
                    </div>
                </div>


                <div className='form-inputs'>
                    <label htmlFor="unitsInStock">Units In Stock</label>
                    <div className='input-error'>
                        <input type="number" defaultValue="" {...register("unitsInStock")} />
                        <div className='error-msg'>{errors.unitsInStock?.message}</div>
                    </div>
                </div>

                <button type="submit"> Submit </button>
            </form>
        </div>


    );
}

export default HookForm