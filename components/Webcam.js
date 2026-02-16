import { useRef, useEffect, useState } from 'react';

export default function Webcam() {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function enableWebcam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                setError('Unable to access webcam. Please check your permissions.');
            }
        }

        enableWebcam();
    }, []);

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
            )}
        </div>
    );
}
