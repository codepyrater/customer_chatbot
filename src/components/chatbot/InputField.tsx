import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react';
// Define the props interface
interface Props {
  onSendMessage: (text: string) => void;
}

const InputField = ({ onSendMessage }: Props) => {
  const [text, setText] = useState('');  // State to manage the input field's value

  const handleSend = () => {
    if (text.trim()) {  // Check if the input is not empty or just spaces
      onSendMessage(text);  // Call the onSendMessage prop function with the input text
      console.log(text);
      setText('');  // Clear the input field
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSend();  // Send message on Enter key press
    }
  };



  return (
<Box display="flex" alignItems="center" mt={2}>
<TextField
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}  // Update state with the input field's value
        onKeyDown={handleKeyDown}  // Handle key down events
      />
      <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 2 }}>
        Send
      </Button>
    </Box>
  )
}

export default InputField;