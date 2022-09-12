import { orderBy } from "firebase/firestore";
import useStreamCollection from "./useStreamCollection";

const useImages = () => {
    return useStreamCollection("uploads", orderBy("name"));
};

export default useImages;
