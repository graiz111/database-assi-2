
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    const handleRequest = (method) => {
        axios({
            method: method,
            url: 'http://localhost:5001/',
        })
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((err) => {
                console.error(err);
                setMessage('Error occurred');
            });
    };

    return (
        <div className="App">
            <h1>{message}</h1>
            <button onClick={() => handleRequest('get')}>GET</button>
            <button onClick={() => handleRequest('post')}>POST</button>
            <button onClick={() => handleRequest('put')}>PUT</button>
            <button onClick={() => handleRequest('delete')}>DELETE</button>
        </div>
    );
}

export default App;
