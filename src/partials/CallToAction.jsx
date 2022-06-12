import { Link } from 'react-router-dom'

function CallToAction() {
	return (
		<div className='callToAction'>
			<h1>Sign Up Now</h1>
			<Link to='/register' className='btn-filled'>
				Get Stated
			</Link>
		</div>
	)
}
export default CallToAction
