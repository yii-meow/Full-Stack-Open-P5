import { useState } from "react"

const BlogForm = ({ createBlog, setNotification }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const addBlog = async (e) => {
        e.preventDefault()

        createBlog({
            title,
            author,
            url
        })

        setNotification({
            message: `a new blog ${title} by ${author} added`,
            type: "success"
        })

        setTimeout(() => {
            setNotification({
                message: "",
                type: ""
            })
        }, 5000);

        setTitle('')
        setAuthor('')
        setUrl('')
    }
    return (
        <div>
            <h2>Create New Blog</h2>
            <form onSubmit={addBlog}>
                title:
                <input
                    type='text'
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}>
                </input>
                <br />

                author:
                <input
                    type='text'
                    value={author}
                    onChange={({ target }) => setAuthor(target.value)}>
                </input>
                <br />

                url:
                <input
                    type='text'
                    value={url}
                    onChange={({ target }) => setUrl(target.value)}>
                </input>
                <br />

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default BlogForm