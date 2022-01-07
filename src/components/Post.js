import React from "react";
import {NavLink} from "react-router-dom";

export default function Post({id, content, created}) {

    const dateNow = new Date();
    const datePost = created;
    const diff = dateNow.getTime() - datePost;

    let time;

    if (diff < 3600000) {
        time = `${Math.ceil(diff/ (60 * 1000))} минут`;
    } else if (diff < 86400000) {
        time = `${Math.ceil(diff/ (60 * 60 * 1000))} часов`;
    } else {
        time = `${Math.ceil(diff/ (24 * 60 * 60 * 1000))} дней`;
    }

    return (
        <div className='post-item'>
            <NavLink to={`/post/${id}`}>
                <header className='header-post'>
                    <div className='avatar'>
                        {/* <img src="../img/Vadim.jpg"/> */}
                    </div>
                    <div>
                        <div className='user-name'>Vadim</div>
                        <div className='post-created'>Основатель группы - {time}.</div>
                    </div>
                </header>
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
