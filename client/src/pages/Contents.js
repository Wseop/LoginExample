import { React, useEffect, useState } from 'react';
import axios from 'axios';

function Contents() {
    const [result, setResult] = useState(null);

    const logout = () => {
        axios.get('http://localhost:8080/signin/logout/', {
            withCredentials: true
        })
        .then(res => {
            setResult(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        axios.get('http://localhost:8080/contents/', {
            withCredentials: true
        })
        .then(res => {
            setResult(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            {result === null ? null : 
                <div>
                    <p>{result}</p>
                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
            }
        </div>
    )
}

export default Contents;