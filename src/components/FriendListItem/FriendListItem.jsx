import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.itemcontainer}>
      <img src={avatar} alt="Avatar" width="96" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
