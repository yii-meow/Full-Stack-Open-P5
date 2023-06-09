import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
let config = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
    config = {
        headers: { Authorization: token }
    }
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newBlog => {
    const response = await axios.post(baseUrl, newBlog, config)
    return response.data
}

const likePost = async blog => {
    await axios
        .put(`${baseUrl}/${blog.id}`, blog)
}

const deletePost = async blogId => {
    console.log(blogId, '123')
    await axios
        .delete(`${baseUrl}/${blogId}`, config)
}

export default { setToken, getAll, create, likePost, deletePost }