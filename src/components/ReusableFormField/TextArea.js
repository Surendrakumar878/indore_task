import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const TextArea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className='flex flex-col gap-1 w-full ' >
            <label htmlFor={name}>{label}</label>
            <Field className="bg-[#202124] text-[#ffffff]   rounded-md" as="textarea" id={name} type="text" name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default TextArea
