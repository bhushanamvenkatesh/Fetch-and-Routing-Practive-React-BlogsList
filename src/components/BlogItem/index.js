// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, author, imageUrl, avtarUrl, topic, title} = eachBlog

  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="each-blog-container">
        <div className="image">
          <img src={imageUrl} alt="imaage" className="blog-image" />
        </div>
        <div className="blog-details">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-author">
            <img src={avtarUrl} alt="" className="avatar-Image" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
