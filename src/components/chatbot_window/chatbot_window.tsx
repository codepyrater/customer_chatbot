 
import {  AppBar, Avatar, Box, Container, Paper, Toolbar, Typography,   } from '@mui/material';
import InputField from '../inputfield/inputfield';
import { MessageProp } from '../../types/types';
import { useEffect, useState } from 'react';
 
const Chatbot_Window = () => {
  const [messages, setMessages] = useState<MessageProp[]>([]);
  const handleSendMessage = async (input: string) => {
    if (input.trim()) {
      const userMessage: MessageProp = { sender: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

     
    }
  };
  // useEffect(() => {
  //   if (messages.length > 0) {
  //     console.log(messages);
  //   }
  // }, [messages]);



  return (
   <Container maxWidth="sm" sx={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <AppBar position="static" color="primary">
        <Toolbar>
           
          <Avatar alt="Bot" src="assests\image.png" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            Stormy Bot
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} sx={{ padding: 2,  flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
        </Paper>
      
      <Box >
      <InputField onSendMessage={handleSendMessage} />
      </Box>

   </Container>
  )
}

export default Chatbot_Window