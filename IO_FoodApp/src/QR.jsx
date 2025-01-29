
import { useState } from 'react';
import QRCode from 'react-qr-code';

function QR() {
    const [value, setValue] = useState();
    const [back] = useState('#FFFFFF');
    const [fore] = useState('#000000');
    const [size] = useState(256);

    return (
        <div className="App">
            <center>
                <br />
                <br />
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="type for QR code"
                />
                <br />
                {value && (
                    <QRCode
                        title="GeeksForGeeks"
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
                )}
            </center>
        </div>
    );
}

export default QR;
