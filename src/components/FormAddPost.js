import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function FormAddPost (props) {
    const [value, setValue] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        props.addPost(value);
        props.history.push('/');
    }
    
    return (
        <form onSubmit={onSubmitForm} className='postAddForm'>
            <button className='close-form'><NavLink to='/'>&#10006;</NavLink></button>
            <textarea
                placeholder='Напишите следующий пост!'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='postAddForm-btn'>Опубликовать</button>
        </form>
    )
}
