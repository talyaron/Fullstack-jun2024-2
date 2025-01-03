import { Outlet } from "react-router";
import React from "react";

const Posts = () =>{
    return(
        <div>
            <h2>My posts</h2>
            <ol>
                <li>Instagram posts</li>
                <li>WhatsApp</li>
                <li>Telegram</li>
            </ol>
            <Outlet />
        </div>
    )
}

export default Posts;