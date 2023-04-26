import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const dropdownOption = [
    { key: "Select an Option", value: "" },
    { key: "Option 1", value: "one" },
    { key: "Option 2", value: "two" },
    { key: "Option 3", value: "three" },
]

const radioOptions = [
    { key: "Option 1", value: "one" },
    { key: "Option 2", value: "two" },
    { key: "Option 3", value: "three" },
]

const checkboxOptions = [
    { key: "Option 1", value: "cone" },
    { key: "Option 2", value: "ctwo" },
    { key: "Option 3", value: "cthree" },
]

const multiselectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const reactselectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

// Initail State
const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
    multiselect: [],
    reactselect: "",
    image: "",
    file: "",
    images: [],
    files: []
}

const savedValues = {
    email: "ranaroshan763@gmail.com",
    description: "Roshan Is Best",
    selectOption: "one",
    radioOption: 'one',
    checkboxOption: [],
    birthDate: null,
    multiselect: [],
}

const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data", values);  // Main Form Data
    onSubmitProps.setSubmitting(false) // This set isSubmittion false after save
    onSubmitProps.resetForm()  // Reset Form on submit
}


// Validation Schema
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email formate').required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"), //Not Working
    birthDate: Yup.date().required("Required").nullable(),
    multiselect: Yup.array().required("Required"), // Not working
    // reactselect: Yup.string().required("Required"), // Not Working
    image: Yup.string().required("Required"),
    file: Yup.string().required("Required"),
    // images: Yup.array().required("Required"),
    // files: Yup.array().required("Required"),

})



const FormikContainer = () => {
    const [formValues, setFormValues] = useState(null)
    return (
        <>
            <Formik
                initialValues={formValues || initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                // validateOnMount
                enableReinitialize
            >
                {
                    (formik) => {
                        console.log("Formik", formik)
                        return (
                            <Form className='flex flex-col justify-center items-center gap-1 w-full p-12' >

                                {/* Email/Input  */}
                                <FormikControl
                                    control='input'
                                    type="email"
                                    label="Email"
                                    name="email"
                                />

                                {/* TextArea */}
                                <FormikControl
                                    control='textarea'
                                    label="Description"
                                    name="description"
                                />

                                {/* Select */}
                                <FormikControl
                                    control='select'
                                    label="Select Option"
                                    name="selectOption"
                                    options={dropdownOption}
                                />

                                {/* Radio Button */}
                                <FormikControl
                                    control='radio'
                                    label="This is Radio"
                                    name="radioOption"
                                    options={radioOptions}
                                />

                                {/* CheckBox */}
                                <FormikControl
                                    control='checkbox'
                                    label="This is Checkbox"
                                    name="checkboxOption"
                                    options={checkboxOptions}
                                />

                                {/* Date */}
                                <FormikControl
                                    control='date'
                                    label="Pick a Date"
                                    name="birthDate"
                                />

                                {/* React Multi select for search and Multiselect  */}
                                {/* React Select */}
                                <FormikControl
                                    control='multiselect'
                                    label="Select Multiple Options"
                                    name="multiselect"
                                    options={multiselectOptions}
                                />

                                {/* React Normal Select */}
                                {/* If You Want Filter  Use This */}
                                <FormikControl
                                    control='reactselect'
                                    label="React Select"
                                    name="reactselect"
                                    options={reactselectOptions}
                                />

                                {/* Image */}
                                <FormikControl
                                    control='image'
                                    label="Select Single Image"
                                    name="image"

                                />


                                {/* Multi images */}
                                <FormikControl
                                    control='images'
                                    label="Select Multiple Images"
                                    name="images"
                                />

                                {/* file Single */}
                                <FormikControl
                                    control='file'
                                    label="Select Single file"
                                    name="file"
                                />


                                {/* Multiple Files */}
                                <FormikControl
                                    control='files'
                                    label="Select Multiple files"
                                    name="files"
                                />

                                {/* Reset SavedValue */}
                                <button className='border bg-blue-700  p-2 text-white active:bg-green-800 ' type='button'
                                    onClick={() => setFormValues(savedValues)}
                                >Load Saved Data</button>


                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    className='border bg-blue-700  p-2 text-white active:bg-green-800 disabled:bg-slate-500'
                                    disabled={!formik.isValid || formik.isSubmitting}
                                >
                                    Submit
                                </button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </>
    )
}

export default FormikContainer;