import React, { Component } from "react";
import UserList from "./UserList";

class MovieCard extends Component {
  render() {
    const { users, profiles, movieID, movieName } = this.props;

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
}

export default MovieCard;
