import React, {FC} from 'react';
import {Image} from "antd";
interface ImageProps {
    alt: string,
    src: string
}

const AppImage:FC<ImageProps> = ({alt, src}) => {
    return (
        <>
            <Image alt={alt} src={src} width={250} height={300}/>
        </>
    );
};

export default AppImage;