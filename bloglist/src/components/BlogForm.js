import { useState } from 'react'

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

        // setNotification({
        //     message: `a new blog ${title} by ${author} added`,
        //     type: 'success'
        // })

        setTimeout(() => {
            setNotification({
                message: '',
                type: ''
            })
        }, 5000)

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
                    id='title'
                    type='text'
                    value={title}
                    placeholder='write title'
                    onChange={({ target }) => setTitle(target.value)}>
                </input>
                <br />

                author:
                <input
                    id='author'
                    type='text'
                    value={author}
                    placeholder='write author'
                    onChange={({ target }) => setAuthor(target.value)}>
                </input>
                <br />

                url:
                <input
                    id='url'
                    type='text'
                    value={url}
                    placeholder='write url'
                    onChange={({ target }) => setUrl(target.value)}>
                </input>
                <br />

                <button id='create-button' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default BlogForm