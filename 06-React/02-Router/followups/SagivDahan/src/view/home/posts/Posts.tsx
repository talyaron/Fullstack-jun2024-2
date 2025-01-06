import styles from './posts.module.scss'
import { Link } from 'react-router';

const Posts = () => {
  const posts= [
    { id: "germanshepherd", title: 'German Shephered' },
    { id: "malinois", title: 'Belgian Malinoa' },
    { id: "husky", title: 'Husky' }
  ];

  return (
    <div className={styles.posts}>
      <h2>Posts</h2>
      <div className={styles.postsList}>
        {posts.map(post => (<Link to={`/home/post/${post.id}`} key={post.id}>{post.title}</Link>))}
      </div>
    </div>
  )
}

export default Posts