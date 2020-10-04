import { Button, FormControl, InputLabel, FormHelperText, Input} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  const sendMessage = event => {
    event.preventDefault()
   
    db.collection('messages')
    .add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  };

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot=>
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()}))))
  }, [])

  useEffect(() => {
    // const name = prompt("Enter your name");
    setUsername(prompt("Enter your name"))
  }, [])

  return (
    <div style={{textAlign: "center"}}>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=399&h=399" height="150px" alt=""/>
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input className="app__input" placeholder="Enter the message..." value={input} onChange={event=>setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} onClick={sendMessage} variant="contained" color="primary" type="submit">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id, message})=>(
          <Message key={id} username={username} message={message}/>
        ))}
      </FlipMove>
    </div>
  )
}

export default App;
