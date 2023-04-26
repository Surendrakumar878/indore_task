import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';
import ReactSelect from 'react-select';

const MultiSelect = (props) => {
    const { label, name, options, ...rest } = props;
    return (
        <div className='flex flex-col w-10/12' >
            <label htmlFor={name}>{label}</label>
            <Field name={name} >
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <ReactSelect
                                {...field}
                                {...rest}
                                isMulti
                                defaultValue={value}
                                value={value}
                                onChange={val => setFieldValue(name, val)}
                                options={options}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default MultiSelect

// npm i react-select