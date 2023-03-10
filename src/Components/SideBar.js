import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachographDigital, faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function SideBar({ isLink }) {
    const { dashboardLink, bookDetailsLink } = isLink;
    return (
        <ul
            className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
            id="accordionSidebar">
            {/* <!-- Sidebar - Brand --> */}
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to={"/"}>
                <div className="sidebar-brand-icon">
                    <img
                        src="https://www.kindpng.com/picc/m/616-6169709_library-logo-of-a-person-holding-a-book.png"
                        alt="Library"
                        className="library-logo"
                    />
                </div>
                <div className="sidebar-brand-text mx-2">Digital Library</div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={dashboardLink} >
                    <FontAwesomeIcon
                        icon={faTachographDigital}
                        style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={bookDetailsLink}>
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>Book Details</span>
                </Link>
            </li>
        </ul>
    );
}

export default SideBar;
