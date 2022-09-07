import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const useGetCollection = (col) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	const getData = async () => {
		setLoading(true)
		// get reference to collection 'todos'
		const ref = collection(db, col)
		const snapshot = await getDocs(ref)

		const docs = snapshot.docs.map(doc => {
			return {
				id: doc.id,
				...doc.data(),
			}
		})

		setData(docs)
		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return {
		data,
		loading,
		getData,
	}
}

export default useGetCollection
