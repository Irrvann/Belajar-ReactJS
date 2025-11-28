import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button"

const RegisterForm = () => {
    return <form action="">
        <InputForm
            label="Full Name"
            placeholder="insert your full name"
            type="text"
            name="fullName"
        />
        <InputForm
            label="Email"
            placeholder="example@mail.com"
            type="email"
            name="email"
        />
        <InputForm
            label="Password"
            placeholder="********"
            type="password"
            name="password"
        />

        <InputForm
            label="Confirm Password"
            placeholder="********"
            type="password"
            name="confirmPassword"
        />
        <Button teks="Register" />
    </form>
}

export default RegisterForm;