// Task - 2 Create a list of users where each user has a unique id. Render the user list usingReact and assign a unique keyto each user.

const UserList = () => {
    const users = [
        {id:1, name : "Nisarg Patel"},
        {id:2, name : "Rahul Patel"},
        {id:3, name : "Henil Patel"},
        {id:4, name : "Pranay Patel"},
        {id:5, name : "Parth Patel"},
        {id:6, name : "Preet Patel"},
    ];
    
    return (
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.id}>
                        {user.name} (ID:{user.id})
                    </li>
                )
            })}
        </ul>
    )
}

export default UserList;

