import { Link } from 'react-router-dom'
import { Logo } from '../components'

function Header() {
	return (
		<header>
			<nav>
				<Logo />

				{/* <Link to='/register'>
					<span>Sign In</span>
				</Link> */}
			</nav>
			<h1>
				Work faster with our free design resrouces and monthly packages.{' '}
			</h1>
			<div className='header-btns'>
				<Link to='/register' className='btnOutline'>
					Sign In
				</Link>
				<Link to='/register' className='btn-filled btnOutline'>
					Sign Up
				</Link>
			</div>
		</header>
	)
}
export default Header
