import {useEffect, useState} from "react";
import axios from "axios";

export const useHttp = (dataUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5') => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async (url) => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                if (isMounted) {
                    setData(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setLoading(false);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
        }

        return cleanUp;
    }, [dataUrl]);

    return { data, error, loading };
}
