import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [title, setTitle] = useState('default value');
    const [error, setError] = useState(null);

    useEffect(() => {
	fetch("http://localhost:8080")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                setTitle(text);
                setError(null);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError(`Failed to load data: ${err.message}`);
                setTitle('Error loading title');
            });
    }, []);	

	return (
		<>
			<h1>HI! {title}</h1>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</>
	)
}

export default App
