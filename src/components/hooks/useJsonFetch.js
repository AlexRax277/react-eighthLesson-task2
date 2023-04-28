import React, {useState, useEffect, useRef} from "react";


const useJsonFetch = (url, opts) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const timeoutRef = useRef(null);

    const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
            const result = await fetch(url + opts);
            const data = await result.json();
            setData(data);
            setLoading(false);
        } catch(e) {
            const error = new Error(e);
            setError(error);
            setLoading(false);
        };
    };

    useEffect(() => {
        [url, opts].forEach(el => {
            if(!el || el.trim() === '') {
                setData([]);
                return;
            } else {
                timeoutRef.current = setTimeout(() => {
                    fetchData();
                }, 1 * 1000);
            };
        });
        return clearTimeout(timeoutRef.current);
    }, [url, opts]);

    return [data, error, loading];
};

export default useJsonFetch;
