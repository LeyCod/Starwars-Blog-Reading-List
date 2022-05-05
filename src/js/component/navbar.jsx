import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
//Styles
import Logo from "../../assets/img/SwLogo.png";
import { FaTrashAlt } from "react-icons/fa";
//Components
import { SearchBar } from "./searchBar/searchBar.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark justify-content-around border border-warning">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={Logo} alt="Star Wars logo" width="150px" height="100" /></span>
			</Link>
			<div>

			<SearchBar/>

			</div>
			<div class="dropdown">
			<button className="btn btn-warning btn-lg dropdown-toggler" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">favorites <span className="favCounter"> {store.storeFavorites.lenght} </span></button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.storeFavorites.map((fav, index) => {
					<li key={index}><Link class="dropdown-item" href="#">{fav}</Link> <FaTrashAlt onClick={()=>actions.deleteFavorites(fav)}/></li>
				})}
				</ul>
			</div>
		</nav>
	);
};

/**
 * TODO len.storeFavorite
 * ? actions.storeFavorites().lenght
 **/
