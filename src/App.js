import React from "react";
import logo from "./logo.svg";
import "./App.css";

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};
function App() {
  return (
    <div className="App">
      <header>
        <ol>
          {Object.keys(movies).map(movie => {
            const movieID = movies[movie].id;
            var userList;
            profiles.filter(profile => {
              if (profile.favoriteMovieID === movieID.toString()) {
                userList = getUserName(parseInt(profile.userID));
                return true;
              } else {
                return false;
              }
            });
            console.log(userList);
            function getUserName(userID) {
              return Object.keys(users).map(user => {
                if (users[user].id === userID) {
                  return users[user].name;
                }
              });
            }

            var result;
            if (userList) {
              const finalList = userList.filter(user => {
                return user !== undefined;
              });
              console.log(finalList);
              result = finalList.map(username => {
                return <span>{username + " likes this movie"} </span>;
              });
            } else {
              result = "No users like this movie";
            }

            return (
              <li>
                {movies[movie].name}
                {result}
              </li>
            );
            // Iterate over userlist
            //  If userlist is empty = show no users likes this movie
            // else - selec
          })}
        </ol>
      </header>
    </div>
  );
}

export default App;
