import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

interface Props {
  onSendMessage: (text: string) => void;
}

const InputField = ({ onSendMessage }: Props) => {
  const [inputText, setInputText] = useState('');  // State to hold the text input

  // Function to handle sending message
  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);  // Call the parent's onSendMessage function
      console.log('Sent:', inputText);  // Log the sent message
      setInputText('');  // Clear the input field
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box display="flex" alignItems="center" mt={2}>
      <TextField
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}  // Update state on text change
        onKeyDown={handleKeyDown}  // Send message on Enter key press
      />
      <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 2 }}>
        Send
      </Button>
    </Box>
  );
}

export default InputField;
