 
import {   AppBar, Avatar, Box, Container, Paper, Toolbar, Typography,   } from '@mui/material';
import InputField from '../inputfield/inputfield';
 
const Chatbot_Window = () => {
  return (
   <Container maxWidth="md" sx={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
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
      
      <Box>
      <InputField/>
      </Box>

   </Container>
  )
}

export default Chatbot_Window