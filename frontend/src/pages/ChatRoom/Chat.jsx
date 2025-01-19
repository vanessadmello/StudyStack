import React, { useEffect, useState } from "react";
import { socket } from "../../App";

export default function Chat() {
    useEffect(() => {
        socket.emit("chat message", "heyyyy")
        console.log("hello")
    })
    const [messages, setMessages] = useState([]);
    // etc

    socket.on('message', (msg) => {
        console.log(msg)
        setMessages([...messages, msg]);
    });

    return (
        // components
        <div>
            {messages}
        </div>
    );
}