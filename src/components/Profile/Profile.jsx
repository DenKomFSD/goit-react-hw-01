import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.username}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.blockname}>Followers</span>
          <span className={styles.count}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.blockname}>Views</span>
          <span className={styles.count}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.blockname}>Likes</span>
          <span className={styles.count}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
