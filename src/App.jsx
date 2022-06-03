import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Landing, Error, Register, ProtectedRoute } from './pages'
import {
	AllJobs,
	Profile,
	SharedLayout,
	Stats,
	AddJob
} from './pages/dashboard/index'

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}>
					<Route index element={<Stats />} />
					<Route path='all-jobs' element={<AllJobs />} />
					<Route path='add-job' element={<AddJob />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='register' element={<Register />} />
				<Route path='landing' element={<Landing />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<ToastContainer position='top-center' />
		</>
	)
}

export default App
