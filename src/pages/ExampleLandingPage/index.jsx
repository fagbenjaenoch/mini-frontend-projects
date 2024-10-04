import "./main.css";
import HeroImg from "./public/assets/hero-img.gif";
import IllustrationOne from "./public/assets/illustration-1.gif";
import IllustrationTwo from "./public/assets/illustration-2.gif";
import { MenuIcon } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";

function BrandIcon() {
	return <span className="brand-icon">Zephtor</span>;
}

export default function ExampleLandingPage() {
	return (
		<div className="body">
			<nav>
				<div className="container">
					<div className="nav-wrapper">
						<BrandIcon />

						<div className="nav-links desktop-only">
							<a href="#">Home</a>
							<a href="#">Features</a>
							<a href="#">Pricing</a>
							<a href="#">About Us</a>
							<a href="#">Contact</a>
						</div>

						<div className="buttons desktop-only">
							<button type="button" className="cta-btn">
								Sign up
							</button>
							<a href="#">Login</a>
						</div>

						<MenuIcon className="mobile-only" size={32} />
					</div>
				</div>
			</nav>

			<div className="container">
				<div className="hero-section">
					<div className="hero-content">
						<h1>Your digital transformation begins here</h1>
						<p>
							Unlock the full potential of your business. Start your journey
							today and experience the future of business software.
						</p>
						<div className="flex-row">
							<button type="button" className="cta-btn">
								Explore features
							</button>
							<button type="button" className="cta-btn">
								Get started
							</button>
						</div>
						<p className="text-sm">No credit card required</p>
					</div>
					<div className="hero-img">
						<img
							src={HeroImg}
							alt="A man wearing a virtual reality glass floating in the air with seemingly tech gadgets swirling round him"
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="section">
					<div className="section-header">
						<h2>Saas solutions that drive results</h2>
						<p>Explore our suite of powerful software solutions.</p>
					</div>
					<div className="section-content">
						<div className="feature">
							<div className="feature-header">Enterprise planning</div>
							<div className="feature-content">
								Seamlessly manage and integrate all core business functions to
								optimize efficiency and productivity.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Project management</div>
							<div className="feature-content">
								Ensure project success by efficiently planning, executing, and
								tracking your initiatives with our project management software.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Analytics and reporting</div>
							<div className="feature-content">
								Leverage data-driven insights to make informed decisions and
								stay ahead of the competition.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="section-with-img">
					<div className="section-img">
						<img
							src={IllustrationOne}
							alt="An illustration of a woman analyzing graphs"
						/>
					</div>
					<div className="section-content">
						<h2>Customization and integration</h2>
						<p>
							Our SaaS solutions are flexible and can be tailored to your
							specific business requirements. We understand that each
							organization is unique, and we are committed to delivering
							software that fits your needs like a glove.
						</p>
						<button type="button" className="cta-btn">
							Learn more
						</button>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="section-with-img reverse">
					<div className="section-img">
						<img
							src={IllustrationTwo}
							alt="An illustration of a collection of support staffs"
						/>
					</div>
					<div className="section-content">
						<h2>Dedicated support</h2>
						<p>
							Zephtor provides ongoing support and training to ensure you
							maximize the value of our software. Our experts are here to assist
							you at every step of your digital transformation journey.
						</p>
						<button type="button" className="cta-btn">
							Learn more
						</button>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="section last">
					<div className="section-header">
						<h2>Discover what sets Zephtor apart</h2>
						<p>Our suite of SaaS solutions is packed with powerful features.</p>
					</div>
					<div className="section-content">
						<div className="feature">
							<div className="feature-header">Seamless integration</div>
							<div className="feature-content">
								Integrate Zephtor seamlessly with your existing systems and
								processes, ensuring a smooth transition to our software.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">User-friendly interface</div>
							<div className="feature-content">
								Our intuitive user interface ensures your team can hit the
								ground running with minimal training, increasing productivity.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Real-time analytics</div>
							<div className="feature-content">
								Gain access to real-time data and analytics, enabling you to
								make informed decisions and stay ahead of the curve.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Mobile accessibility</div>
							<div className="feature-content">
								Access your data and tools from anywhere with mobile
								compatibility, keeping your team connected on the go.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Customization options</div>
							<div className="feature-content">
								Tailor Zephtor to your unique business needs with extensive
								customization options for a personalized experience.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Scalability</div>
							<div className="feature-content">
								Whether you're a small startup or a large enterprise, our
								solutions scale with your business as it grows.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Robust security</div>
							<div className="feature-content">
								Your data is our top priority. Benefit from state-of-the-art
								security measures to keep your information safe.
							</div>
						</div>
						<div className="feature">
							<div className="feature-header">Ongoing support</div>
							<div className="feature-content">
								Count on our dedicated support team for training,
								troubleshooting, and continuous improvement.
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<div className="container">
					<div className="footer-wrapper">
						<div className="footer-header">
							<BrandIcon />
							<p>Your digital transformation partner.</p>
						</div>
						<div className="footer-content">
							<div className="footer-section">
								<h5>Quick links</h5>
								<div className="flex-column">
									<a href="#">Home</a>
									<a href="#">Features</a>
									<a href="#">Pricing</a>
									<a href="#">About us</a>
									<a href="#">Contact us</a>
								</div>
							</div>
							<div className="footer-section">
								<h5>Legal</h5>
								<div className="flex-column">
									<a href="#">Privacy policy</a>
									<a href="#">Terms of service</a>
									<a href="#">Cookie policy</a>
								</div>
							</div>
							<div className="footer-section">
								<h5>Stay Connected</h5>
								<div className="flex-column">
									<a href="#">Linkedin</a>
									<a href="#">Facebook</a>
									<a href="#">X (Formerly Twitter)</a>
								</div>
							</div>
						</div>
					</div>

					<div className="copyright-section">
						<small>
							Made by{" "}
							<a
								href="https://github.com/fagbenjaenoch"
								className="easter-egg"
								title="Stay Hungry"
							>
								Enoch
								<ExternalLinkIcon size={14} />
							</a>
						</small>
						<small>
							Inspired by{" "}
							<a target="_blank" href="https://typescale.com">
								Typescale
								<ExternalLinkIcon size={14} />
							</a>
						</small>
					</div>
				</div>
			</footer>
		</div>
	);
}
