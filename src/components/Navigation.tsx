import { NavLink } from "react-router";

import { routes } from "../routes";

export default function Navigation() {
    return (
        <nav>
            <ul>
                {routes.map((route) => (<li key={route.path}>
                    <NavLink to={route.path} end>
                        {route.title}
                    </NavLink>
                </li>)
                )}
            </ul>
        </nav>
    );
}