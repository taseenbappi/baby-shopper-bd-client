import { useEffect, useState } from "react";

const useToys = () => {
    const [toys, setToys] = useState([]);
    const [isLoadingToys, setIsLoadingToys] = useState(false);

    useEffect(() => {
        setIsLoadingToys(true)
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
            .finally(() => setIsLoadingToys(false))
    }, [])

    return [toys, isLoadingToys];
}
export default useToys;