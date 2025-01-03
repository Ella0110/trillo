/* eslint-disable react/prop-types */
'use client'

import { useState, useEffect, React } from 'react'
import { signIn, signUp,  confirmSignUp } from '@aws-amplify/auth'
import { useRouter } from 'next/navigation'


const AuthModel = ({ showModal, setShowModal, authStates, setAuthStates, setIsSignin}) => {

  if (!showModal) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState('')
  const obj = {
    login: <LoginForm setShowModal={setShowModal} setAuthStates={setAuthStates} username={username} setUsername={setUsername} setIsSignin={setIsSignin}/>, 
    signup: <RegisterForm setAuthStates={setAuthStates} username={username} setUsername={setUsername} />, 
    confirm:<ConfirmSignUpForm setAuthStates={setAuthStates} username={username}/>
}

  return (
    <div className="w-screen z-30 h-screen fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative z-50">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowModal(false)} >X</button>
        {obj[authStates]}

        <button
          className="mt-4 text-blue-500 hover:text-blue-700"
          onClick={() => setAuthStates(authStates==='login'?'signup':'login')}
        >
          {authStates==='login' ? 'Switch to Register' : authStates==='signup' ? 'Switch to Login' : ''}
          
        </button>
      </div>
    </div>
  )
}

const LoginForm = ({setShowModal, setAuthStates, username, setUsername, setIsSignin}) => {

  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password })
      console.log(isSignedIn, nextStep)
      console.log((nextStep['signInStep']))
      setMessage(nextStep.signInStep)
        switch(nextStep.signInStep){
          case 'CONFIRM_SIGN_IN_WITH_SMS_MFA_CODE':
            break
            // TODO: Handle MFA if app supports it
          case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD':
            break
            // TODO: prompt user to enter a new password
          case 'RESET_PASSWORD':
            break
            // TODO: prompt user to reset their password
          case 'CONFIRM_SIGN_UP':
            setMessage('该账户未验证，请检查您的电子邮件以验证账户。')
            setTimeout(() => {setAuthStates('confirm')}, 800)
            break
            // TODO: prompt user to confirm sign up 
          case 'DONE':
            setMessage('登录成功')
            setTimeout(() => {setIsSignin(true);setShowModal(false);router.push('/home')}, 800)
            break
        default:
            break
        }

     
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <div>
      <h2 className="text-2xl mb-4 text-slate-700">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded dark:text-slate-900"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded dark:text-slate-900"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  )
}

const RegisterForm = ({setAuthStates, username, setUsername}) => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        setMessage('')
        try {
            const { nextStep } = await signUp({
            username,
            password,
            attributes: { email },
          })
          console.log(nextStep)

          switch(nextStep.signUpStep){
            case 'CONFIRM_SIGN_UP':
              setMessage('注册成功！请检查您的电子邮件以验证账户。')
              setTimeout(() => {setAuthStates('confirm')}, 800)
              console.log('CONFIRM_SIGN_UP')
              break
              // TODO: Handle MFA if app supports it
            case 'COMPLETE_AUTO_SIGN_IN':
              break
              // TODO: prompt user to confirm sign up 
            case 'DONE':
              setMessage('注册完全成功')
              break
          default:
              break
          }

        } catch (error) {
          setMessage(error.message)
        }
      }
  return (
    <div>
      <h2 className="text-2xl mb-4 text-slate-700">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border dark:text-slate-900 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border dark:text-slate-900 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border dark:text-slate-900 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  )
}

const ConfirmSignUpForm = ({ setAuthStates, username}) => {
    const [confirmationCode, setConfirmationCode] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {

        if (!username) {
          setMessage('无效的用户名。请重新注册。')
        }
      },[])
    
      const handleConfirmSignUp = async (e) => {
        e.preventDefault()
        try {
            console.log(username+'请求函数')
            const { isSignUpComplete, nextStep } =  await confirmSignUp({
                username,
                confirmationCode
              })
            console.log(username+'请求函数结束')
          console.log(isSignUpComplete, nextStep)
          setMessage('确认成功！请重新登录...')
          setTimeout(() => {
            setAuthStates('login')
          }, 2000) // 2秒后跳转到主页
        } catch (error) {
          setMessage(error.message)
        }
      }
    
      return (
        <div className="max-w-md mx-auto p-5 ">
          <h1 className="text-2xl font-bold mb-4 text-slate-700">Confirm Signup</h1>
          <form onSubmit={handleConfirmSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700">验证码</label>
              <input
                type="text"
                className="w-full p-2 text-gray-900 border rounded"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">确认</button>
          </form>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      )


}

export default AuthModel
