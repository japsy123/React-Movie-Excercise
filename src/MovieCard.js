import React from "react";
import UserList from "./UserList";

function MovieCard(props) {
  const { users, profiles, movieID, movieName } = props;

  var userList = [];
  const profileFilter = profiles.filter(profile => {
    if (profile.favoriteMovieID === movieID.toString()) {
      Object.keys(users).filter(user => {
        if (users[user].id === profile.userID) {
          userList.push(users[user].name);
          return users[user].name;
        }
      });
      return true;
    } else {
      return false;
    }
  });
  return (
    <li>
      <h2>{movieName}</h2>
      <p>Liked By:</p>
      <ul>
        <UserList userList={userList} />
      </ul>
    </li>
  );
}

export default MovieCard;
