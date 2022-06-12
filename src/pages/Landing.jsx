// import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import Header from '../partials/Header'
import Team from '../partials/Team'
import About from '../partials/About'
import Footer from '../partials/Footer'
import CallToAction from '../partials/CallToAction'

function Landing() {
	return (
		<Wrapper>
			<Header />
            <Team />
            <About />
            <CallToAction />
			<Footer />
		</Wrapper>
	)
}
export default Landing
