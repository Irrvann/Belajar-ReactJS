import Button from "../Elements/Button"
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
    return <form action="">
        <InputForm 
            type="text"
            placeholder="Enter your username"
            name="username"
            label="Username"
        />
        <InputForm 
            type="password"
            placeholder="Enter your password"
            name="password"
            label="Password"
        />
        <Button teks="Login" />
    </form>
}

export default FormLogin;