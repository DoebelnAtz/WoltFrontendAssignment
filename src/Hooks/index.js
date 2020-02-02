import {useContext, useEffect, useState} from "react";
import  makeRequest  from '../utils/api'


export const useDismiss = (refInside, close) => {

    const handleEsc = (e) => {
        if (e.keyCode !== 27)
            return;
        else
            close();
    };

    const handleClick = (e) => {

        if (refInside.current?.contains(e.target))
            return;
        else
            close();
    };
    useEffect(() => {
        document.addEventListener("keydown", handleEsc, false);
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])
};

export const useRequest = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let resp;
    useEffect(() => {
        async function request () {
            try {
                setIsLoading(true);
                resp = await makeRequest(url);
                setData(resp.restaurants);
            } finally {
                setIsLoading(false)
            }
        }
        request();
    }, [url]);
    return [data, setData, isLoading]
};
