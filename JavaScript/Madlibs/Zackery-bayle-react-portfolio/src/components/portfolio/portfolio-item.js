import React from "react";

export default function(props) {
    return (
        <div>
           <h3>{props.title}</h3>
           <h4>{props.type}</h4>
        </div>
    );
}