import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { title, children, type } = props;
    return <div className='w-full max-w-xs text-left'>
        <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
        <p className="font-medium text-slate-500 mb-6">Welcome, Please enter your details</p>
        {children}

        {/* conditional rendering */}
        <Navigation type={type} />
        {/* <p className="text-sm mt-5 text-center">
            {type === 'login' ? "Don't have an account? " : "Have an account? "}

            {type === 'login' && (<Link to="/register" className="font-bold text-blue-600">
                Register</Link>)}
            {type === 'register' && (<Link to="/login" className="font-bold text-blue-600">
                Login</Link>)}
        </p> */}
    </div>;
}

// conditional rendering melalui component terpisah
const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center">Don't have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                    Register</Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm mt-5 text-center">Have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                    Login</Link>
            </p>
        );
    }
}

export default AuthLayout;