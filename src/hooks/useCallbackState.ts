import {useEffect, useRef, useState} from "react";

export const useCallbackState = (initialState: any) => {
    const cbRef = useRef();
    const [data, setData] = useState(initialState);

    useEffect(() => {
        // @ts-ignore
        cbRef.current && cbRef.current(data);
    }, [data]);

    return [
        data,
        function (d: any, callback: undefined) {
            cbRef.current = callback;
            setData(d);
        }
    ];
}