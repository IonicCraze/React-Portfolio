import React, { useState } from "react";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";
import NavBar from "../Nav";

export default function BuildPage() {
	const [currentBuild, setCurrentBuild] = useState("Home");

	const pageBuild = () => {
		if (currentBuild === "Portfolio") {
			return <Portfolio />;
		}
		if (currentBuild === "Resume") {
			return <Resume />;
		}
		if (currentBuild === "Contact") {
			return <Contact />;
		}
		return <About />;
	
	};

	const changeBuild = (page) => setCurrentBuild(page);

	return (
		<div>
            <NavBar 
            currentBuild={currentBuild} 
            changeBuild={changeBuild}/>
			{pageBuild()}
		</div>
	);
}