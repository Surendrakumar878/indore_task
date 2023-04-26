import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const RadioButton = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='flex flex-col gap-1 w-10/12 ' >
            <label htmlFor={name}>{label}</label>
            <div className='flex gap-3 items-center' >
                <Field name={name}  {...rest} >
                    {
                        ({ field }) => {
                            return options.map(option => {
                                return (
                                    <React.Fragment key={option.key} >
                                        <input
                                            type="radio"
                                            id={option.value}
                                            {...field}
                                            value={option.value}
                                            checked={field.value === option.value}
                                        />
                                        <label
                                            htmlFor={option.value}>{option.key}
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

export default RadioButton
