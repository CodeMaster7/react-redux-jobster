import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { toggleSidebar } from '../features/user/userSlice'
import Wrapper from '../assets/wrappers/SmallSidebar'
import Logo from './Logo'

function SmallSidebar() {
    const { isSidebarOpen } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const toggle = () => {
		dispatch(toggleSidebar())
	}

  return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? 'sidebar-container show-sidebar'
						: 'sidebar-container'
				}>
				<div className='content'>
					<button className='close-btn' onClick={toggle}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<div className='nav-links'>nav links</div>
				</div>
			</div>
		</Wrapper>
  )
}
export default SmallSidebar
