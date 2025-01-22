import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chatroom.css';

const socket = io('http://localhost:3000'); // Update the URL to match your backend server

const Chatroom = () => {
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Listen for new users joining
    socket.on('userJoined', (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    // Listen for users disconnecting
    socket.on('userDisconnected', (user) => {
      setUsers((prevUsers) => prevUsers.filter((u) => u !== user));
    });

    // Listen for new messages
    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup listeners on unmount
    return () => {
      socket.off('userJoined');
      socket.off('userDisconnected');
      socket.off('receiveMessage');
    };
  }, []);

  const handleJoin = () => {
    if (username.trim().length > 1) {
      socket.emit('joinChat', username);
      setIsJoined(true);
    } else {
      alert('Please enter your full name to join the chat.');
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const data = { from: username, message };
      socket.emit('sendMessage', data); // Emit the message to the server
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="chat-room">
      {!isJoined ? (
        <div className="join-chat">
          <h1>Join Chat</h1>
          <input
            type="text"
            placeholder="Enter your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div className="chat-interface">
          <div className="users-list">
            <h3>Active Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>
          <div className="messages">
            <h3>Messages</h3>
            <div className="message-list">
              {messages.map((msg, index) => (
                <div key={index} className="message">
                  <strong>{msg.from}: </strong>
                  <span>{msg.message}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="send-message">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatroom;
