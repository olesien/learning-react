import { orderBy } from 'firebase/firestore'
import useStreamCollection from "./useStreamCollection"

const useGetTodos = () => {
	return useStreamCollection('todos', orderBy('title'))
}

export default useGetTodos
