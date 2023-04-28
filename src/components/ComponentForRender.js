import useJsonFetch from "./hooks/useJsonFetch.js";


const ComponentForRender = ({ opt }) => {
    const [data, error, loading] = useJsonFetch(process.env.REACT_APP_API_URL, opt);

    console.log(`${opt}---Error-status: ${error}`);
    console.log(`${opt}---Loading-status: ${loading}`);
    return <div>
        <div>{opt}</div>
        <span>Status: {data.status}</span>
    </div>
};

export default ComponentForRender;
