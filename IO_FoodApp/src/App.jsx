import { useState, useEffect } from 'react'
import './App.css'
import supabase from './supabaseClient'



function App() {
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
            <div className='dbInfo'>
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
