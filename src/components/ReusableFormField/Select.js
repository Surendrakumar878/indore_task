import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

const Select = (props) => {
    const { label, name, options, ...rest } = props;
    return (
        <div className='flex flex-col gap-1 w-full '>
            <label className='block text-gray-700 font-bold text-lg mb-2' htmlFor={name}> {label} </label>
            <Field className="p-2  text-black border-collapse border-black border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2" as="select" id={name} name={name} {...rest} >
                {
                    options.map(options => {
                        return (
                            <option className='w-full' key={options.value} value={options.value} >
                                {options.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select
