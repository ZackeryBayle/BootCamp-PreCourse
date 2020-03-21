import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div>
           <Link to={`/portfolio/${props.slug}`}><h3>{props.title} slug</h3></Link>
           <a href={props.url}>{props.title} Link</a>
           <h4>{props.type}</h4>

        </div>
    );
}