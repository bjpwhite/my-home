import React, {useEffect, useState} from "react";

const Img = (props: any) => {
    const {
        src,
    } : PropsEntity = props;
    const [localSrc, setLocalSrc] = useState(src);
    useEffect(() => {
        if (src.slice(0, 1) === "@") {
            setLocalSrc(`/src${src.slice(1)}`);
        } else if (src.slice(0, 1) === "^") {
            setLocalSrc(`/src/components${src.slice(1)}`);
        }
    }, [src]);
    return (
        <img src={new URL(localSrc, import.meta.url).href}  alt="" />
    )
}

interface PropsEntity {
    src: string,
}

export default Img
