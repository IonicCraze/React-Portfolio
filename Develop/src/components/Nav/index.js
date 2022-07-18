import React from "react";

function NavBar({ currentBuild, changeBuild }) {
	return (
		<nav>
			<ul className="nav flex-row nav-tabs">
				<li className="nav-item">
					<a href="#about" onClick={() => changeBuild("About")}
						className={currentBuild === "About"}>About</a>
				</li>
				
                <li className="nav-item">
					<a href="#portfolio" onClick={() => changeBuild("Portfolio")}
						className={currentBuild === "Portfolio"}>Portfolio</a>
				</li>
				
                <li className="nav-item">
					<a href="#resume" onClick={() => changeBuild("Resume")}
						className={currentBuild === "Resume"}>Resume</a>
				</li>
				
                <li className="nav-item">
					<a href="#contact" onClick={() => changeBuild("Contact")}
						className={currentBuild === "Contact"}>Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;