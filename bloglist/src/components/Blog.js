import Togglable from "./Togglable"
import BlogService from "../services/blogs"

const Blog = ({ blog }) => {
    const blogStyle = {
        "border": "2px solid black",
        "paddingTop": 10,
        "paddingLeft": 2,
        "marginBottom": 5,
    }

    const likePost = () => {
        BlogService
            .likePost(
                { ...blog, likes: blog.likes + 1 }
            )
    }

    const removeBlog = () => {
        BlogService
            .deletePost(blog.id)
    }

    return (
        <div>
            <div style={blogStyle}>
                {blog.title} {blog.author}

                <Togglable buttonLabel='view'>
                    <div>{blog.url}</div>

                    likes {blog.likes}
                    <button
                        onClick={likePost}
                    >
                        like
                    </button>
                    <br />

                    {blog.user && blog.user.username}

                    <button
                        onClick={removeBlog}>
                        remove
                    </button>
                </Togglable>
            </div>
        </div >
    )
}

export default Blog