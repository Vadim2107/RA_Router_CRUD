import React from "react";
import {NavLink} from "react-router-dom";

export default function Post({id, title, content}) {
    return (
        <div className='post-item'>
            <NavLink to={`/post/${id}`}>
                <header className='header-post'>
                    <div className='avatar'>
                        {/* <img src="../img/Vadim.jpg"/> */}
                    </div>
                    <div className='user-name'>Vadim</div>
                </header>
                <div className='post-title'>{title}</div>
                <div className='post-content'>{content}</div>
                <div className='comment-form'>
                    <div className='comment-avatar'>
                        {/* <img src="https://img.icons8.com/offices/30/000000/avatar.png" alt="Avatar"/> */}
                    </div>
                    <input placeholder='Напишите комментарий...'/>
                </div>
            </NavLink>
        </div>
    )
}
