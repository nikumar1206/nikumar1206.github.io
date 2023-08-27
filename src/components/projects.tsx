import NeuButton from "./button";

function Projects() {
	return (
		<section id="projects" className="projects-section">
			<div className="projects-content mt-20">
				<div className="projects-container">
					<article className="project revealz">
						<div className="project-image one"></div>
						<h3 className="proj-title">LineAlert</h3>
						<p className="proj-description">
							LineAlert is a safety-focused app that allows users to create and
							view alerts of ongoing issues in NYC subway stations.
						</p>
						<div className="proj-buttons">
							<NeuButton
								text="Live"
								onClick={() =>
									window.open("https://aa-linealert.onrender.com/#/", "_blank")
								}
							/>
							<NeuButton
								text="GitHub"
								onClick={() =>
									window.open(
										"https://github.com/leochung97/LineAlert",
										"_blank"
									)
								}
							/>
						</div>
					</article>

					<article className="project revealz">
						<div className="project-image two"></div>
						<h3 className="proj-title">StreetSmart</h3>
						<p className="proj-description">
							StreetSmart is a pixel-perfect clone of StreetEasy, a real-estate
							search-engine.
						</p>
						<div className="proj-buttons">
							<NeuButton
								text="Live"
								onClick={() =>
									window.open("https://streetsmart.up.railway.app/#/", "_blank")
								}
							/>
							<NeuButton
								text="GitHub"
								onClick={() =>
									window.open(
										"https://github.com/nikumar1206/StreetSmart",
										"_blank"
									)
								}
							/>
						</div>
					</article>

					<article className="project revealz">
						<div className="project-image three"></div>
						<h3 className="proj-title">Way of the Blade</h3>
						<p className="proj-description">
							Inspired by Japanese animation, Way of the Blade is a fighting
							game playable against a friend or an AI.
						</p>
						<div className="proj-buttons">
							<NeuButton
								text="Live"
								onClick={() =>
									window.open(
										"https://nikhil-kumar.tk/Way-of-The-Blade/",
										"_blank"
									)
								}
							/>
							<NeuButton
								text="GitHub"
								onClick={() =>
									window.open(
										"https://github.com/nikumar1206/Way-of-The-Blade/)",
										"_blank"
									)
								}
							/>
						</div>
					</article>
				</div>
			</div>
			<a href="#contact" className="fa-ad-wrapper contact">
				<i className="fa-solid fa-angle-down angle-down"></i>
			</a>
		</section>
	);
}
export default Projects;
