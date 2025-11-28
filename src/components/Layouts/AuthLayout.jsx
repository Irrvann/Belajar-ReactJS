const AuthLayout = (props) => {
    const { title, children } = props;
    return <div className='w-full max-w-xs text-left'>
        <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
        <p className="font-medium text-slate-500 mb-6">Welcome, Please enter your details</p>
        {children}
    </div>;
}

export default AuthLayout;