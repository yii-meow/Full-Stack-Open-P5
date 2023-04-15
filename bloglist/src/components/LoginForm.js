const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => (
    <div>
        <h2>Login to Application</h2>
        <form onSubmit={handleSubmit}>
            username
            <input
                type='text'
                value={username}
                onChange={handleUsernameChange}
            />
            <br />

            password
            <input
                type='password'
                value={password}
                onChange={handlePasswordChange}
            />
            <br />

            <button type='submit'>Login</button>
        </form>
    </div>
)

export default LoginForm