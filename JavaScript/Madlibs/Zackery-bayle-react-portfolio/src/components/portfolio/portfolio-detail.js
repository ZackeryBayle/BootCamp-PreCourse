import React from 'react';

export default function(props) {
    return(
        <div>
            <h2>Portfolio Detail for {props.match.params.slug}</h2>
            {/* <h3>{props.match.params.name}</h3> */}
        </div>
    );
}