
import './App.css'
import Button from './components/Elements/Button';
import Label from './components/Elements/Input/label';
import Input from './components/Elements/Input/Input';
import InputForm from './components/Elements/Input/Index';
import FormLogin from './components/Fragments/FormLogin';
import FormRegister from './components/Fragments/FormRegister';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';




function App() {

  return (
    <>
      <div className='flex justify-center min-h-screen items-center'>
        {/* <LoginPage /> */}
        <RegisterPage />
      </div>
    </>
  )
}

export default App
