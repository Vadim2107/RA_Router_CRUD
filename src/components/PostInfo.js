import React, {useState, useEffect} from "react";

export default function PostInfo (props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7777/posts`)
            .then((response) => response.json())
            .then((res) => {
                setPosts(res);
            });
    }, [])

    const post = props.posts.find(o => o.id === Number(props.match.params.id));

    const deletePost = async (id) => {
        await fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE'
        })
        console.log(`post №${id} deleted`)
        props.history.push('/');
    }

    return (
        <div className='post-item-info'>
            {posts &&
            <>
                <header className='header-post'>
                    <div className='avatar'>
                        {/* <img src="https://img.icons8.com/color/48/000000/avatar.png" alt='avatar'/> */}
                    </div>
                    <div className='user-name'>Vadim</div>
                </header>
                <div className='post-content'>{post.content}</div>
                <div className='btn-container'>
                    <button className='post-btn-edit' onClick={() => props.history.push(`/post/${post.id}/edit`)}>Изменить</button>
                    <button className='post-btn-delete' onClick={() => deletePost(post.id)}>Удалить</button>
                </div>
            </>
            }
        </div>
    )
}
