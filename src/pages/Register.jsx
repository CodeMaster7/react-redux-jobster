import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// redux toolkit and useNavigate later

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true
}
// if possible prefer local state
// global state

function Register() {
	const [values, setValues] = useState(initialState)
	const dispatch = useDispatch()
	const { isLoading, user } = useSelector((store) => store.user)

	// redux toolkit and useNavigate later

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		console.log(`${name}:${value}`)
		setValues({ ...values, [name]: value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const { name, email, password, isMember } = values
		if (!email || !password || (!isMember && !name)) {
			toast.error('Please Fill Out All Fields')
			return
		}
		if (isMember) {
			dispatch(loginUser({ email: email, password: password }))
			return
		}
		dispatch(registerUser({ name, email, password }))
	}

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember })
	}

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{/* name field */}
				{!values.isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				{/* email field */}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					handleChange={handleChange}
				/>
				{/* password field */}
				<FormRow
					type='password'
					name='password'
					value={values.password}
					handleChange={handleChange}
				/>

				<button type='submit' className='btn btn-block' disabled={isLoading}>
					submit
				</button>

				{/* toggle button */}
				<p>
					{values.isMember
						? 'Not a member yet?'
						: 'Already a member?'}
					<button
						type='button'
						onClick={toggleMember}
						className='member-btn'>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register