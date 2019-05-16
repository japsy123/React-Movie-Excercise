import React from "react";

function UserList(props) {
  var result;
  const { userList } = props;

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

export default UserList;
