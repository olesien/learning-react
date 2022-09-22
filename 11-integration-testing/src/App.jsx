import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import TodosPage from './pages/TodosPage'
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<>
			<Navigation />

			<Container id="App" className="py-3">
				<Routes>
					{/* Guest routes */}
					<Route path="/" element={<HomePage />} />

					<Route path="/todos" element={<TodosPage />} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/users/:username" element={<UserPage />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
