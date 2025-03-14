import { Icon } from "@iconify/react";

export default function Login() {
    return (
        <div className="login-page">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">MyApp</div>
                    <ul className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#login" className="login-link">
                                Log In
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="login-form-section">
                <div className="form-container">
                    <h2>Login</h2>
                    {/* TODO: Show error */}
                    <form onSubmit={loginUser}>
                        <input type="email" placeholder="Email" required />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button type="submit" className="cta-button">
                            Log In
                        </button>
                    </form>
                    <br />
                    <p>
                        Don't have an account?{" "}
                        <a href="/signup">Sign up here</a>
                    </p>
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

    async function loginUser() {
        try {
            const formData = new FormData();

            formData.append("email", "johndoe@example.com");

            const response = await fetch("Backend URL", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                return;
            }

            const data = await response.json();

            if (data.success) {
                //TODO:Success message with Swal and redirect to main page
            } else {
                //TODO:Error message
            }
        } catch (error) {
            console.log(error);
        }
    }
}
