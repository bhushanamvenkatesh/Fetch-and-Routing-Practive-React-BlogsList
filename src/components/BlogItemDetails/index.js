// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    console.log(updatedData)
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemData
    return isLoading ? (
      <Loader type="TainSpin" color="#00BFFF" height={50} width={50} />
    ) : (
      <div className="blog-item-container">
        <h1>{title}</h1>
        <div className="avatar-author">
          <img src={avatarUrl} alt="avatar" className="avatar-dp" />
          <p>{author}</p>
        </div>

        <img src={imageUrl} alt={title} className="blogItem-image" />

        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
