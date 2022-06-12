function Team() {
	return (
		<div className='team'>
			<h1>
				Our resrouces are crafted in-house by our talented team of
				designers from various backgrounds.
			</h1>
			<div className='members'>
				<div className='person'>
					<img
						src='https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/david_coyle_img.png'
						alt='Profile1'
					/>
					<h3>David Coyle</h3>
					<p>4 years of Visual Design</p>
				</div>
				<div className='person'>
					<img
						src='https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/mary_hutton_img.png'
						alt='Profile2'
					/>
					<h3>Mary Hutton</h3>
					<p>7 years of UI/UX</p>
				</div>
				<div className='person'>
					<img
						src='https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/james_hillman_img.png'
						alt='Profile3'
					/>
					<h3>James Hillman</h3>
					<p>5 years of User Interaction</p>
				</div>
			</div>
		</div>
	)
}
export default Team
