import styles from './posts.module.scss'
import { Link } from 'react-router';

const Posts = () => {
  const posts= [
    { id: "Germanshepherd", title: 'German Shephered' },
    { id: "Malinois", title: 'Belgian Malinoa' },
    { id: "Husky", title: 'Husky' }
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