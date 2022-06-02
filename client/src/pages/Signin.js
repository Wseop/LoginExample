import { React, useEffect, useState } from 'react';
import axios from 'axios';

function Signin() {
    const [result, setResult] = useState("로그아웃상태");

    const signin = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/signin/', {
            id: event.target.id.value,
            pw: event.target.pw.value
        }, {
            withCredentials: true
        })
        .then((res) => {
            setResult(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="container" >
            <form onSubmit={signin}>
                <div className="pt-2">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="id"></input>
                </div>
                <div className="pt-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="pw"></input>
                </div>
                <div className="pt-2">
                    <button type="submit" className="btn btn-primary">로그인</button>
                </div>
            </form>
            <p>{result}</p>
        </div>
    )
}

export default Signin;