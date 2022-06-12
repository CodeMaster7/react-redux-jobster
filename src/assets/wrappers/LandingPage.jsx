import styled from 'styled-components'

const Wrapper = styled.main`
	h1 {
		font-size: 3rem;
		font-weight: 100;
		color: #2b9dff;
	}

	h3 {
		font-size: 1.5rem;
	}

	p {
		font-size: 1rem;
	}

	.btnOutline {
		display: block;
		text-decoration: none;
		color: #2b9dff;
		border: 2px solid #2b9dff;
		border-radius: 6px;
		width: 175px;
		height: 53px;
		line-height: 53px;
		text-align: center;
		margin-top: 30px;
	}

	.btn-filled {
		display: block;
		text-decoration: none;
		color: #fff;
		background-color: #2b9dff;
		border-radius: 6px;
		width: 175px;
		height: 53px;
		line-height: 53px;
		text-align: center;
		margin-top: 30px;
	}

	/*  -----   NAV ----- */

	nav {
		display: flex;
		padding: 50px;
		line-height: 150px;
		text-align: right;
		align-items: center;
		justify-content: space-between;
	}

	nav a {
		text-decoration: none;
		color: #202427;
		font-size: 1.2rem;
		font-weight: 700;
	}

	nav a:first-child {
		float: left;
	}

	nav a img {
		vertical-align: middle;
	}

	nav a span {
		background-color: #2b9dff;
		padding: 5px 15px;
		border-radius: 1000px;
		font-weight: 100;
		color: #fff;
		margin-left: 7px;
	}

	/*  -----   HEADER  ----- */

	header {
		height: 1000px;
		min-height: 1000px;
		padding: 0 5%;
		background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/background_header.png)
			no-repeat;
		background-position: top right;
	}

	header h1 {
		width: 40%;
		margin: 4em 0 0 0;
	}

	.header-btns {
        display: flex;
        gap: 20px;
    }

	/*  -----   TEAM  ----- */

	.team {
		text-align: center;
		margin: 10em 0 3em 0;
		padding: 0 5%;
		background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/background_team.png)
			no-repeat;
		background-position: center;
	}

	.team h1 {
		width: 50%;
		margin: 0 auto 30px auto;
	}

	.members {
		display: flex;
		justify-content: center;
	}

	.person {
		margin: 0 30px;
		color: #202427;
	}

	.person h3 {
		margin-bottom: 5px;
	}

	/*  -----   ABOUT  ----- */

	.about {
		padding: 0 5%;
		background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/background_about.png)
			no-repeat;
		background-position: left center;
		background-size: 80%;
		height: 900px;
		min-height: 900px;
	}

	.about h1 {
		margin-bottom: 30px;
		padding-top: 300px;
	}

	.icons img {
		margin-right: 30px;
	}

	.about h1,
	.icons {
		margin-left: 50%;
	}

	/*  -----   CTA  ----- */

	.callToAction {
		text-align: center;
		padding: 10em 5% 10em 5%;
		background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/background_calltoaction.png)
			no-repeat;
		background-size: 40%;
		background-position: center;
	}

	.callToAction h1,
	.callToAction a {
		display: inline-block;
		margin: 0 60px;
		vertical-align: middle;
	}

	/*  -----   FOOTER  ----- */

	footer {
		padding: 0 5%;
		margin-bottom: 40px;
		color: #2b9dff;
	}

	footer p,
	.footerPages {
		display: inline-block;
	}

	.footerPages {
		float: right;
	}

	.footerPages a {
		text-decoration: none;
		font-weight: 100;
		color: #2b9dff;
		margin-left: 30px;
	}

	/*  -----   RESPONSIVE  ----- */

	@media only screen and (max-width: 1000px) {
		header {
			height: 1600px;
			min-height: 1600px;
			background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/mobile_background_header.png)
				no-repeat;
			background-size: contain;
			background-position: bottom right;
		}
		header h1 {
			width: 100%;
		}
		.team {
			margin: 3em 0 3em 0;
			background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/mobile_background_team.png)
				no-repeat;
			background-position: top;
		}
		.team h1 {
			width: 100%;
		}
		.about {
			background: url(https://raw.githubusercontent.com/araltasher/svg-landing-page/master/images/mobile_background_about.png)
				no-repeat;
			background-size: contain;
			height: 900px;
			min-height: 900px;
			overflow-y: visible;
		}
		.about h1 {
			padding-top: 900px;
		}
		.about h1,
		.icons {
			margin-left: 0;
		}
		.callToAction {
			margin-top: 25em;
			padding: 15em 5% 15em 5%;
			background-size: 70%;
		}
		.callToAction h1,
		.callToAction a {
			margin-bottom: 30px;
		}
		footer {
			text-align: center;
		}
		.footerPages {
			visibility: hidden;
		}
		footer p,
		.footerPages {
			display: block;
		}
	}

	@media only screen and (max-width: 600px) {
		header {
			height: 1300px;
			min-height: 1300px;
		}
		header h1 {
			margin: 1em 0 0 0;
		}
		.about h1 {
			padding-top: 800px;
		}
		.members {
			flex-direction: column;
		}
		.person {
			margin-top: 30px;
		}
	}
`
export default Wrapper
