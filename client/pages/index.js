import { Icon } from "@iconify/react";

export default function Home() {
    return (
        <div className="landing-page">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">MyApp</div>
                    <ul className="nav-links">
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        {/* TODO: IF USER LOGGED IN DONT SHOW LOGIN BUTTON, SHOW EMAIL INSTEAD */}
                        <li>
                            <a href="login" className="login-link">
                                Log In
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to MyApp</h1>
                    <p>
                        Your ultimate solution for productivity, collaboration,
                        and efficiency.
                    </p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>

            <section id="features" className="features">
                <h2>Our Features</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3>Productivity Tools</h3>
                        <p>
                            Increase your efficiency with built-in tools
                            designed to help you stay organized and focused.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Collaboration</h3>
                        <p>
                            Work together in real-time with teammates, no matter
                            where you are. Seamlessly collaborate on projects.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Security</h3>
                        <p>
                            Your data is safe with us. We employ advanced
                            encryption and security protocols to protect your
                            information.
                        </p>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>
                            "MyApp has transformed the way I manage my team.
                            It's an essential tool for our day-to-day
                            operations."
                        </p>
                        <p>- John Doe, CEO of Example Corp</p>
                    </div>
                    <div className="testimonial-card">
                        <p>
                            "Absolutely love the ease of use and the level of
                            collaboration this platform enables. Couldn't live
                            without it!"
                        </p>
                        <p>- Jane Smith, Product Manager</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 MyApp. All Rights Reserved.</p>
                    <div className="social-links">
                        <a
                            href="https://twitter.com/myapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="akar-icons:twitter-fill" />
                        </a>
                        <a
                            href="https://facebook.com/myapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="akar-icons:facebook-fill" />
                        </a>
                        <a
                            href="https://instagram.com/myapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="akar-icons:instagram-fill" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
