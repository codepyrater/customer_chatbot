 
import {  AppBar, Box, Container, Paper, Toolbar, Typography,   } from '@mui/material';
import InputField from '../inputfield/inputfield';
import { MessageProp } from '../../types/types';
import {   useState } from 'react';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GeminiService from '../services/geminiService';
const Chatbot_Window = () => {
  const [messages, setMessages] = useState<MessageProp[]>([]);
  const [editableResponse, setEditableResponse] = useState<string>('');






  const handleSendMessage = async (input: string) => {
    if (input.trim()) {
      const userMessage: MessageProp = { sender: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      const botResponse = await GeminiService.sendMessage(userMessage.text);
      const botMessage: MessageProp = { sender: 'bot', text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setEditableResponse(botResponse); // Set editable response
      console.log(editableResponse); // Print bot response to console
   
 
     
    }
  };
 



  return (
   <Container maxWidth="sm" sx={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static" color="primary">
        <Toolbar> 
          <SupportAgentIcon fontSize="large" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            Stormy Bot
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} sx={{ padding: 2,  flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', padding: 2 }}>

        {messages.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent:  'flex-start' }}>
            {message.text}
          </Box>
        ))}
        </Box>






      <Box >
      <InputField onSendMessage={handleSendMessage} />
      </Box>
        </Paper>
      
 

   </Container>
  )
}

export default Chatbot_Window