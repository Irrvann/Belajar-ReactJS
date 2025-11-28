import AuthLayout from "../components/Layouts/AuthLayout"
import RegisterForm from "../components/Fragments/FormRegister"

const RegisterPage = () => {
    return <AuthLayout title="Register">
        <RegisterForm />
    </AuthLayout>
}
export default RegisterPage;