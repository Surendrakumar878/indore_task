import { ErrorMessage, Field } from 'formik';
import React from 'react'
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import TextError from '../TextError';

const DatePicker = (props) => {
    const { label, name, ...rest } = props

    return (
        <>

            <div className="w-full " >
                <label htmlFor={name}>{label}</label>
                <Field name={name} >
                    {
                        ({ form, field }) => {
                            const { setFieldValue } = form
                            const { value } = field
                            return <DateView
                                className='input w-full  p-4 '
                                {...field}
                                {...rest}
                                // selected={value}
                                selected={(value && new Date(value)) || new Date()}
                                onChange={val => setFieldValue(name, val)}
                                // showTimeSelect
                                // dateFormat="Pp"
                                isClearable
                                selectsStart
                                // selectsRange
                                // inline
                                // showMonthDropdown
                                // useShortMonthInDropdown
                                // showMonthYearDropdown
                                closeOnScroll={true}
                                minDate={new Date()}
                            />
                        }
                    }
                </Field>
                <div className='errorMessage' >
                    <ErrorMessage name={name} component={TextError} />
                </div>
            </div>
        </>
    )
}

export default DatePicker

// npm i react-datepicker