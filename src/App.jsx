import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import TodoPage from './pages/TodoPage'
import TodosPage from './pages/TodosPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/todos/:id" element={<TodoPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ToastContainer autoClose={3000} />
		</div>
	)
}

export default App
