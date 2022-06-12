import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer>
			<p>&#9400; 2022 Sam Bonfanti</p>
			<div className='footerPages'>
				<Link to='/'>Home</Link>
				<Link to='/'>Resources</Link>
				<Link to='/'>Pricing</Link>
				<Link to='/'>Terms</Link>
				<Link to='/'>Privacy</Link>
			</div>
		</footer>
	)
}
export default Footer
