const Button = (props) => {
    const {teks} = props;
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 w-full rounded-lg shadow-md transition duration-300">
            {teks}
        </button>
    );
}

export default Button;