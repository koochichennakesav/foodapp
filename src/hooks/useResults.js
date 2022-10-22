import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async searchTem => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTem,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Hey Something went wrong!');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage]
};