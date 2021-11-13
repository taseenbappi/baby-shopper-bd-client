import { useEffect, useState } from "react";

const useToys = () => {
    const [toys, setToys] = useState([]);
    const [isLoadingToys, setIsLoadingToys] = useState(false);

    useEffect(() => {
        setIsLoadingToys(true)
        fetch('https://rocky-earth-51630.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => setToys(data))
            .finally(() => setIsLoadingToys(false))
    }, [])

    return [toys, isLoadingToys];
}
export default useToys;