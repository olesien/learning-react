import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

const useImages = () => {
	// create ref to collection 'images'
	const imagesRef = collection(db, 'images')

	// sort by created
	const queryRef = query(imagesRef, orderBy('created'))

	const imagesQuery = useFirestoreQueryData(['images'], queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return imagesQuery
}

export default useImages
