import AuthLayout from "../components/Layouts/AuthLayout"
import RegisterForm from "../components/Fragments/FormRegister"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return <div className='flex justify-center min-h-screen items-center'>
        <AuthLayout title="Register" type="register">
            <RegisterForm />
            {/* <p className="text-sm mt-5 text-center">Have an account?
                <Link to="/login" className="font-bold text-blue-600">
                    Login</Link>
            </p> */}
        </AuthLayout>
    </div>
}
export default RegisterPage;