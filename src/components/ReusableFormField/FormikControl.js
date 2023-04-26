import React from 'react'
import CheckBox from './CheckBox';
import CustumRadio from './CustumRadio';
import DatePicker from './DatePicker';
import File from './File';
import Image from './Image';
import Input from './Input';
import MultiImage from './MultiImage';
import MultipleFiles from './MultipleFiles';
import MultiSelect from './MultiSelect';
import RadioButton from './RadioButton';
import ReactCreatable from './ReactCreatable';
import ReactSelect from './ReactSelect';
import Select from './Select';
import TextArea from './TextArea';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case "input": return <Input {...rest} />
        case "textarea": return <TextArea {...rest} />
        case "select": return <Select {...rest} />
        case "radio": return <RadioButton {...rest} />
        case "customradio": return <CustumRadio {...rest} />
        case "checkbox": return <CheckBox {...rest} />
        case "date": return <DatePicker {...rest} />
        case "multiselect": return <MultiSelect {...rest} />
        case "reactselect": return <ReactSelect {...rest} />
        case "image": return <Image {...rest} />
        case "images": return <MultiImage {...rest} />
        case "file": return <File {...rest} />
        case "files": return <MultipleFiles {...rest} />
        case "creatable": return <ReactCreatable {...rest} />
        default: return null
    }
}

export default FormikControl