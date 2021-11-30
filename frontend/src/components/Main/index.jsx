import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const selectPercent = state => state.percent;
const selectStatus = state => state.status;

const Main = () => {

    const [text, setText] = useState();

    const status = useSelector(selectStatus);
    const percent = useSelector(selectPercent);

    const submit = (e) => {
        e.preventDefault();
        if (text.length > 10) {
            alert("Text too long, 10 letters is maximum");
        } else {
            axios.post(`https://localhost/api/brain`, { text })
                .then()
                .then(err => {
                    alert("Error: ", err)
                });
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={submit} >
                    <label>
                        Text:
                        <input type="text" name="name" value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
            <p className="text-center">Status: {status}</p>
            <p className="text-center">Work done by {percent || 0}%</p>
        </div>
    )
}

export default Main;