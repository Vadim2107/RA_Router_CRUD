import React, {useState, useEffect} from "react";

export default function PostEdit (props) {
    const [posts, setPosts] = useState(null);
    const [value, setValue] = useState('');
    // const elemArr = props.match.params.id - 1;

    useEffect(() => {
        fetch(`http://localhost:7777/posts`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                setPosts(res);
            });
    }, [])

    const post = props.posts.find(o => o.id === Number(props.match.params.id));

    if(posts) {
        if(value === '') {
            setValue(post.content);
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:7777/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 1,
                id: post.id,
                title: 'Новый пост...',
                content: value,
            })
        })

        console.log(`post №${post.id} edited`)
        props.history.push(`/post/${post.id}`);
    }

    return (
        <div className='post-item-edit'>
            {posts &&
            <>
                <header className='post-item-edit_top'>
                    <h3>Редактировать публикацию</h3>
                    <button className='btn-edit-del' type='button' onClick={() => props.history.push(`/post/${post.id}`)}>&#10006;</button>
                </header>
                <form onSubmit={onSubmitForm} className='form-edit'>
                    <textarea className='form-edit-textarea' value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button className='btn-save' type='submit'>Сохранить</button>
                </form>
            </>
            }
        </div>
    )
}
