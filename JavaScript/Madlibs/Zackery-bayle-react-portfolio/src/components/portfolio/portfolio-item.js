import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div>
           <Link to={`/portfolio/${props.slug}`}><h3>{props.title}</h3></Link>
           <h4>{props.type}</h4>
           {/* <Link to={`/portfolio/${props.slug}`}>{props.slug} Link</Link> */}

        </div>
    );
}