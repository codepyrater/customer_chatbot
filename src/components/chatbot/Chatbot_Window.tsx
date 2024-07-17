import React, { useState  } from 'react';
import { Box, Container, Typography, Paper, AppBar, Toolbar, Button,  } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GeminiService from '../services/geminiService';
import { MessageProp } from '../../types/types';
import Message from './Message';
import InputField from './InputField';
import RichTextResponse from '../text_editor/RichTextResponse';
const ChatWindow = () => {
  const [messages, setMessages] = useState<MessageProp[]>([]); // state for managing messages
  const [editableResponse, setEditableResponse] = useState<string>(''); // state for managing editable response
  const [quickReplies] = useState<string[]>(['Hello', 'Help', 'Thank you']); // Quick replies

  // Function to handle sending message
  const sendMessage = async (inputText: string) => {
    if (inputText.trim() !== '') { // Check if the input text is not empty
      const newMessage: MessageProp = { sender: 'user', text: inputText }; // Create a new message object for user
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      const botReply = await GeminiService.sendMessage(newMessage.text);
      setEditableResponse(botReply);  // Set the bot's response
    }
  };

  // Function to handle response text change
  const handleResponseChange = (newResponse: string) => {
    setEditableResponse(newResponse);
  };

  // Function to send the edited response
  const submitEditedResponse = () => {
    if (editableResponse.trim() !== '') {
      const botMessage: MessageProp = { sender: 'bot', text: editableResponse }; // Create a new message object for bot
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setEditableResponse('');  // Clear the editable response
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

      <Paper elevation={3} sx={{ padding: 2,  flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
        <Box sx={{ flex: 1, overflowY: 'auto', padding: 2 }}>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          {editableResponse && (
            <Box sx={{ marginBottom: 2 }}>
              <RichTextResponse value={editableResponse} onChange={handleResponseChange} />
              <Button variant="contained" color="primary" onClick={submitEditedResponse} sx={{ marginTop: 1 }}>
                Send to Customer
              </Button>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, borderTop: '1px solid #ddd', flexWrap: 'wrap' }}>
          {quickReplies.map((reply, index) => (
            <Button key={index} variant="outlined" onClick={() => sendMessage(reply)} sx={{ marginBottom: 1 }}>
              {reply}
            </Button>
          ))}
        </Box>

        <Box>
          <InputField onSendMessage={sendMessage} />
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatWindow;