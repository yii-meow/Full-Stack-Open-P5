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
                <span>{blog.title} {blog.author}</span>

                <Togglable buttonLabel='view'>
                    <div className='more-details'>
                        <div>{blog.url}</div>

                        likes {blog.likes}
                        <button
                            id='like-button'
                            onClick={() => likePost(blog)}
                        >
                            like
                        </button>
                        <br />

                        {blog.user.username}

                        {user && blog.user.username === user.username &&
                            <button
                                id='remove-button'
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