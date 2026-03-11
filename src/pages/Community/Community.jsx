import { useState } from 'react';
import { communityPosts } from '../../data/mockCommunity';
import styles from './Community.module.css';

function PostCard({ post }) {
  const [reactions, setReactions] = useState(post.reactions);
  const [liked, setLiked] = useState(false);

  const toggleHeart = () => {
    setReactions(prev => ({
      ...prev,
      heart: liked ? prev.heart - 1 : prev.heart + 1,
    }));
    setLiked(!liked);
  };

  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <div className={styles.avatar}>{post.avatar}</div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{post.author} · <span className={styles.postTime}>{post.timeAgo}</span></div>
        </div>
        <span className={`${styles.postTag} ${styles[post.tag.replace(' ', '')]}`}
              style={post.tag === 'Reef Alert' ? { background: '#F44336' } : undefined}>
          {post.tag}
        </span>
      </div>
      <p className={styles.postContent}>{post.content}</p>
      <div className={styles.reactions}>
        <button className={styles.reactionBtn}>
          ⚠️ {reactions.warning}
        </button>
        <button className={styles.reactionBtn}>
          💬 {reactions.comment}
        </button>
        <button
          className={`${styles.reactionBtn} ${liked ? styles.active : ''}`}
          onClick={toggleHeart}
        >
          ❤️ {reactions.heart}
        </button>
        <div className={styles.spacer} />
        <button className={styles.reportBtn}>Report</button>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <div className={styles.communityPage}>
      <h2 className={styles.pageTitle}>Community Feed</h2>
      {communityPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
