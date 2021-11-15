import { useEffect, useState, useRef } from 'react';

import './index.css';

const CaptureSelfie = () => {

    const [status, updateStatus] = useState('openCamera')
    const [localStream, updateStream] = useState(null)

    const video = useRef(null)
    const screenshotsContainer = useRef(null);


    const handleClick = () => {
        screenshotsContainer.current.innerHTML = ''
        video.current.style.display = 'block';

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.current.srcObject = stream;
                    updateStream(stream)
                    updateStatus('takeSelfie')
                })
                .catch(function (_error) {
                    alert("Error while trying to load Camera");
                });
        } else {
            alert("Camera API is not available in your browser");
        }
    }

    const takeSelfie = () => {
        const canvas = document.getElementById('canvas');
        const img = document.createElement("img");
        canvas.width = video.current.videoWidth;
        canvas.height = video.current.videoHeight;
        canvas.getContext("2d").drawImage(video.current, 0, 0);
        img.src = canvas.toDataURL("image/png");
        screenshotsContainer.current.prepend(img);

        video.current.style.display = 'none';
        localStream.getTracks().forEach((track) => {
            track.stop();
        });
        updateStatus('takeAgain')
    }

    return (
        <div className='capture'>
            { status === 'takeAgain' && <button onClick={handleClick}>Take Selfie Again</button>}
            { status === 'takeSelfie' && <button onClick={takeSelfie}>Take Selfie</button> }
            { status === 'openCamera' && <button onClick={handleClick}>Open Camera</button>}
            <br /><br />
            <video ref={video} autoPlay={true} id="videoElement"></video>
            <br />
            <canvas id="canvas"></canvas>
            <div ref={screenshotsContainer} id="screenshots"></div>
        </div>
    )
}

export default CaptureSelfie;