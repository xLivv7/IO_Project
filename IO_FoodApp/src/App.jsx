import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabaseClient'



function App() {
    const [count, setCount] = useState(0)
    const [table, setTable] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // W³¹cz ³adowanie
            const { data, error } = await supabase.from("Foods").select();
            if (error) {
                console.error("Error fetching Foods table:", error);
            } else {
                setTable(data);
            }
            setLoading(false); // Wy³¹cz ³adowanie
        };

        fetchData();
    }, []);


    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div id="db_test">
                {loading ? (
                    <p>Loading data...</p>
                ) : (
                    <ul>
                        {table.map((food) => (
                            <li key={food.FoodName}>{food.FoodName}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default App
