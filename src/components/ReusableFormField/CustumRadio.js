import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const CustumRadio = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='grid grid-cols-1 justify-items-center gap-4 w-full bg-green-500 h-96 items-center ' >
            <label className='cursor-pointer' htmlFor={name}>{label}</label>
            <div className='flex gap-3 items-center' >
                <Field name={name}  {...rest} >
                    {
                        ({ field }) => {
                            return options.map(option => {
                                return (
                                    <React.Fragment key={option.key} >
                                        <input
                                            className='appearance-none peer sr-only'
                                            type="radio"
                                            id={option.value}
                                            {...field}
                                            value={option.value}
                                            checked={field.value === option.value}
                                        />
                                        <label
                                            className='bg-gray-700 '
                                            htmlFor={option.value}>
                                            <div className='grid grid-auto-fit square' >
                                                {option.key}
                                            </div>
                                        </label>
                                    </React.Fragment>
                                )
                            })
                        }
                    }
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CustumRadio
