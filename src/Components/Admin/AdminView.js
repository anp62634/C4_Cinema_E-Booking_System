import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import AdminNavBar from "./AdminNavBar";
import { AuthContext } from "../../auth-context";

export default function AdminView() {
    const auth = useContext(AuthContext);

    return (
    <React.Fragment>
        {/* Admin Nav Bar */}
        <AdminNavBar/>
        {auth.isLoggedIn && (
            <div className="admin-view">
                <h1>Welcome Admin!</h1>
                <p></p>
                <div className="admin-options">
                    <Link to="managemovies"><h3>Manage Movies</h3></Link>
                    <Link to="manageusers"><h3>Manage Users</h3></Link>
                    <Link to="managepromotions"><h3>Manage Promotions</h3></Link>
                </div>
            </div>
        )}
        {!auth.isLoggedIn && (
            <h1>You are not authorized to access this section</h1>
        )}
    </React.Fragment>
    );
};