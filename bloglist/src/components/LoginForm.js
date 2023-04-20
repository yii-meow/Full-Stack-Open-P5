import PropTypes from 'prop-types'

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
                id='username'
                type='text'
                value={username}
                onChange={handleUsernameChange}
            />
            <br />

            password
            <input
                id='password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
            />
            <br />

            <button id='login-button' type='submit'>Login</button>
        </form>
    </div>
)

LoginForm.protoTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm