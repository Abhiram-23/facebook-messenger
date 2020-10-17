import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React ,{useEffect, useState}from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username, setUsername] = useState('');
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])
  useEffect(() => {
    setUsername(prompt('please enter your name 🚨'));
  }, [])
  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username , message:input}]);
    setInput('');
  }
  return (
    <div className="App">
      <img src="data:image/png;base64,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"/>
      <h1>Hello Developers ! 🚀🚀 </h1>
      <h3>Welcome {username}</h3>
      <form className="app__form">
          <FormControl className="app__formControl">
            <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event=>setInput(event.target.value)}/>
            <IconButton className="app__iconB" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
              <SendIcon/>
            </IconButton>
          </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id,message}) =>(
          <Message key={id} username={username} message={message}/>
          ))
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
