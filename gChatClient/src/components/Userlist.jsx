import { useGlobalContext } from "../context";
import UserCard from "./UserCard";
import "../styles/Userlist.css";

const Userlist = () => {
    const { users } = useGlobalContext();

    return (
        <aside className="user-side">
            {
                users.map((user) => {
                    return (
                        <UserCard key={user.id} {...user} />
                    )
                })
            }
        </aside>
    )
}

export default Userlist;