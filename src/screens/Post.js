import { useParams } from "react-router-dom"

const Post = (props) => {
    //console.log(props)

    const { post_id } = useParams()
    console.log(post_id)
    const postNumber = parseInt(post_id) - 1
    console.log(postNumber)
    const post = props[postNumber]
    console.log(post)

    return(
        <div className="post">
           <div className="hero">
              <img src={post.image} alt="post banner"/>
           </div>
           <div className="content">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
           </div>
        </div>
    )
}

export default Post