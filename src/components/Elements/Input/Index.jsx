import Input from "./Input"
import Label from "./label"

const InputForm = (props) => {
    const {type, placeholder, name, label} = props;
    return <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
    </div>
}

export default InputForm;