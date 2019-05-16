import React, { Component } from "react";

class UserList extends Component {
  render() {
    var result;
    const { userList } = this.props;

    if (userList.length >= 1) {
      const finalList = userList.filter(user => {
        return user !== undefined;
      });
      result = finalList.map(username => {
        return <li>{username}</li>;
      });
    } else {
      result = "No users liked this movie";
      return result;
    }

    return <li>{result}</li>;
  }
}

export default UserList;
