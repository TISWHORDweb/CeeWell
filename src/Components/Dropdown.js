import React from 'react'

function Dropdown(props) {
    return (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.title}
            </a>
            <ul class="dropdown-menu">
               {props.children}
            </ul>
        </li>
    )
}

export default Dropdown