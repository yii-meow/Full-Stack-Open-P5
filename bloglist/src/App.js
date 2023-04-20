import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState({
    message: '',
    type: ''
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // check if local storage contains user info
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  // Fetch the blogs in database when rendering on the first time
  useEffect(() => {
    blogService.getAll().then(blogs => {
      const sortBlogLikes = blogs.sort((a, b) =>
        b.likes - a.likes
      )
      setBlogs(sortBlogLikes)
    }
    )
  }, [])

  // Login user
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (e) {
      setNotification({
        message: 'wrong username or password',
        type: 'error'
      })
      setTimeout(() => {
        setNotification({
          message: '',
          type: ''
        })
      }, 5000)
    }
  }

  const showBlogs = () => (
    <div>
      <h2>Blogs</h2>
      {user.username} logged in
      <button
        onClick={() => {
          localStorage.removeItem('loggedBlogappUser')
          setUser(null)
        }
        }>logout
      </button>
      <br />

      <Togglable buttonLabel='new blog'>
        <BlogForm
          createBlog={addBlog}
          setNotification={setNotification}
        />
      </Togglable>

      {
        blogs.map(blog => {
          return (
            <div
              key={blog.id}
              className='blog'
            >
              <Blog key={blog.id}
                blog={blog}
                user={user}
                likePost={likePost}
                removeBlog={removeBlog} />
            </div>
          )
        }
        )
      }

    </div>
  )

  const addBlog = async blogObject => {
    blogService
      .create(blogObject)
      .then(returnedBlog => {
        const blogDetails = {
          ...returnedBlog,
          user: {
            username: user.username
          }
        }
        setBlogs(blogs.concat(blogDetails))
      })
  }

  const likePost = async blog => {
    blogService
      .likePost(
        { ...blog, likes: blog.likes + 1 }
      )

    setBlogs(await blogService.getAll())
  }

  const removeBlog = async blog => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await blogService
        .deletePost(blog.id)
    }
  }

  return (
    <div>
      {notification.message !== '' && <Notification notification={notification} />}

      {!user &&
        <Togglable buttonLabel="Login">
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      }

      {user && showBlogs()}

    </div>
  )
}

export default App