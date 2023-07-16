


export function Profile(props) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={props.avatar}
          alt="User avatar"
          class="avatar"
        />
        <p class="name">{props.name}</p>
        <p class="tag">{props.tag}</p>
        <p class="location">Salvador, Brasil</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}



