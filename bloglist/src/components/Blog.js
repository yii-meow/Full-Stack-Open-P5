import Togglable from './Togglable'

const Blog = ({ blog, user, likePost, removeBlog }) => {
    const blogStyle = {
        'border': '2px solid black',
        'paddingTop': 10,
        'paddingLeft': 2,
        'marginBottom': 5,
    }

    return (
        <div>
            <div style={blogStyle}>
                {blog.title} {blog.author}

                <Togglable buttonLabel='view'>
                    <div className='more-details'>
                        <div>{blog.url}</div>

                        likes {blog.likes}
                        <button
                            onClick={() => likePost(blog)}
                        >
                            like
                        </button>
                        <br />

                        {blog.user.username}

                        {user && blog.user.username === user.username &&
                            <button
                                onClick={() => removeBlog(blog)}>
                                remove
                            </button>
                        }
                    </div>
                </Togglable>
            </div>
        </div >
    )
}

export default Blog