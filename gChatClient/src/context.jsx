import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();
const url = `http://127.0.0.1:3000/users/`;

const AppProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    const getUsers = async () => {
        let req = await fetch(`http://127.0.0.1:3000/users/`);
        let res = await req.json();
        setUsers(res);
    }

    const getMsgs = async () => {
        let req = await fetch(`http://127.0.0.1:3000/messages/`);
        let res = await req.json();
        setMessages(res);
    }

    useEffect(() => {
        getUsers();
        getMsgs();
    }, []);

    return (
        <AppContext.Provider value={{ users, messages }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };