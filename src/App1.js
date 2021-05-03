import React, { Fragment,useState,useEffect  } from 'react';
import axios from 'axios';

function App1() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:63577/api/books',
            );
        
            setData(result.data);
        };
    
        fetchData();
    }, []);


    return(
        <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
        <ul>
        {data.hits.map(book => (
                <li key={book.id}><a href={book.bookName}>{book.bookName}</a></li>
            ))}
            </ul>
            </Fragment>
    );
}

export default App1