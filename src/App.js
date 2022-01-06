// import 'mini.css';
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getAllPosts} from "./getAllPosts";
import Post from "./components/Post";
import FormAddPost from "./components/FormAddPost";
import PostInfo from "./components/PostInfo";
import PostEdit from "./components/PostEdit";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts)
  }, []);

  const addPost = async (content) => {
    await fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 1,
        id: 0,
        title: 'Новый пост...',
        content: content,
      })
    })
        .then(res => res.json())
        .then(myJson => console.log('Add new Post: ', myJson));

    getAllPosts(setPosts);
    console.log(posts);
  }

  console.log(posts);

  return (
    <div className="App">
      <Router>
        <div className="add-post">
          <button className='btn-add-post'>
            <Link to="/posts/new">Создать пост</Link>
          </button>
        </div>
        <Route exact path="/" render={() => posts.map(o =>
            <Post key={o.id} id={o.id} title={o.title} content={o.content}/>)}/>
        <Route path='/posts/new' render={props => <FormAddPost {...props} addPost={addPost}/>}/>
        {/* <Route exact path='/post/:id([0-9]+)?' component={PostInfo}/> */}
        <Route exact path='/post/:id([0-9]+)?' render={props => <PostInfo {...props} posts={posts}/>}/>
        {/* <Route exact path='/post/:id([0-9]+)?/edit' component={PostEdit}/> */}
        <Route exact path='/post/:id([0-9]+)?/edit' render={props => <PostEdit {...props} posts={posts}/>}/>
      </Router>
    </div>
  );
}
