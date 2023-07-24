import "../../styles/Login.css";

const Login = () => {
    return (
        <section className="login-section">
            <form>
                <h1>Login Page</h1>
                <label>Email</label><br />
                <input type="text" placeholder="Enter your e-mail" /><br />
                <label>Password</label><br />
                <input type="text" placeholder="Enter your password" /><br />
                <button>Login</button>
                <button>Create Account</button>
            </form>
        </section>
    )
}

export default Login;