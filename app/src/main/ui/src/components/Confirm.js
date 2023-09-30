import React, { useState } from "react";
function Confirm(props) {
    function submit(event, props){
        event.preventDefault();
        fetch("api/confirm", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.flight)
        })
        .then((response) => response.json())
        .then((json) => {
            props.setConfirmation(json);
        });
        console.log("Price Confirmed")
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e, props)}>
                <input type="submit" value="Confirm Price"/>
            </form>
        </div>
    );
};
export default Confirm;