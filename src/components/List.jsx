function List({ users, handleClick }) {

    return (
        <ul className="user-list">
            {users.map(item => <li key={item.id} className="user-item" onClick={() => handleClick(item.id)}>{item.name}</li>)}
        </ul>
    );
}

export default List;