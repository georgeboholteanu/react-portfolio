import React from 'react';
import { useState } from 'react';

function Image({ thumbnailSrc, highResSrc }) {
    const [showHighRes, setShowHighRes] = useState(false);

    const handleClick = () => {
        setShowHighRes(true);
    };

    const handleClose = () => {
        setShowHighRes(false);
    };

    return (
        <>
        <img className='img-work rounded-xl p-1 h-[280px] w-full object-cover bg-center' src={thumbnailSrc} alt="" onClick={handleClick} />
        {showHighRes && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                <img
                    src={highResSrc}
                    alt=""
                    className="max-h-full max-w-full"
                    onClick={handleClose}
                />
            </div>
        )}
        </>
    );
}

export default Image;