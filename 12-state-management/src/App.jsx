import { Routes, Route } from 'react-router-dom'
import Navigation from './pages/partials/Navigation'
import CounterPage from './pages/CounterPage'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import ReducerCounterPage from './pages/ReducerCounterPage'
import ReducerContextCounterPage from './pages/ReducerContextCounterPage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/counter" element={<CounterPage />} />
				<Route path="/reducer-counter" element={<ReducerCounterPage />} />
				<Route path="/reducer-context-counter" element={<ReducerContextCounterPage />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	)
}

export default App
