import React, { useState  } from 'react';
import { Box, Container, Typography, Button, Paper, AppBar, Toolbar,  } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GeminiService from '../services/geminiService';
 
import { MessageProp } from '../../types/types';
import Message from './Message';
 
import InputField from './InputField';

const ChatWindow = () => {
  // state to manage all chat messages
  const [messages, setMessages] = useState<MessageProp[]>([]);
 
  // State to manage the editable response content
  const [editableResponse, setEditableResponse] = useState<string>('');

  // Function to handle sending a new message
  const handleSendMessage = async (input: string) => {
    if (input.trim()) {
      // Add the user's message to the chat
      const userMessage: MessageProp = { sender: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      
      // Get a response from the bot using the GeminiService
      const botResponse = await GeminiService.sendMessage(userMessage.text);
      setEditableResponse(botResponse); // Set the bot's response as the editable content
    }
  };

 

 

  return (
    <Container maxWidth="sm" sx={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
   
      <AppBar position="static" color="primary">
        <Toolbar>
          <SupportAgentIcon fontSize="large" sx={{ marginRight: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            Stormy Bot
          </Typography>
        </Toolbar>
      </AppBar>

  
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
        {/* Chat messages */}
        <Box sx={{ flex: 1, overflowY: 'auto', padding: 2 }}>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          
        </Box>


        {/* Input field */}
        <Box>
          <InputField onSendMessage={handleSendMessage} />
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatWindow;