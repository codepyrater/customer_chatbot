import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { MessageProp } from '../../types/types';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Person2Icon from '@mui/icons-material/Person2';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const Message = ({ sender, text }: MessageProp) => {
  const isUserMessage = sender === 'user';  // Check if the message is from the user

  const cleanText = DOMPurify.sanitize(text);  // Sanitize the text to prevent XSS attacks

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUserMessage ? 'flex-end' : 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 2,
        maxWidth: '100%',
      }}
    >
      {!isUserMessage && (
        <SupportAgentIcon fontSize="large" sx={{ marginRight: 2 }} />
      )}
      <Paper
        elevation={2}
        sx={{
          padding: 1.5,
          borderRadius: 2,
          backgroundColor: isUserMessage ? '#e0f7fa' : '#f1f1f1',
          maxWidth: '75%',
          wordBreak: 'break-word',
        }}
      >
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
          {parse(cleanText)}   
        </Typography>
      </Paper>
      {isUserMessage && (
        <Person2Icon fontSize="large" sx={{ marginLeft: 2 }} />
      )}
    </Box>
  );
};

export default Message;
