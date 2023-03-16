import { useEffect, useState } from "react";

const users = [
  {
    id: 1,
    name: "ankit",
    age: 18,
    email: "ankitkumarjangid12@gmail.com",
  },
  {
    id: 2,
    name: "pranjal",
    age: 19,
    email: "sidhpranjal2002@gmail.com",
  },
  {
    id: 3,
    name: "komal",
    age: 20,
    email: "komaljangir177@gmail.com",
  },
  {
    id: 4,
    name: "mohit",
    age: 21,
    email: "mohitsh7979@gmail.com",
  },
  {
    id: 5,
    name: "raghu",
    age: 22,
    email: "raghushekawat11@gmail.com",
  },
];

const Users = () => {
  const [SearchText, setSearchText] = useState("");
  const [filterUsers, setFilterUsers] = useState(users);

  useEffect(() => {
    console.log("searchText", SearchText);

    const filterUsersData = users.filter((user) => {
      return user.name.toLowerCase().includes(SearchText.toLowerCase());
    });
    setFilterUsers(filterUsersData);
  }, [SearchText]);

  return (
    <div>
      <center>
        <br />
        <h3>Users</h3>
        <div>
          <input
            value={SearchText}
            placeholder="Search user"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <br />
        <table border="2px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.length > 0 ? (
              filterUsers.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>No Users</td>{" "}
              </tr>
            )}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Users;
