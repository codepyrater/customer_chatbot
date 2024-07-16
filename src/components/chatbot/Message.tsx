import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { MessageProp } from '../../types/types';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Person2Icon from '@mui/icons-material/Person2';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const Message = ({ sender, text }: MessageProp) => {
  const isUser = sender === 'user';

  // Sanitize the HTML content
  const sanitizedText = DOMPurify.sanitize(text);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 2,
        maxWidth: '100%',
      }}
    > 
      {!isUser && (
        <SupportAgentIcon fontSize="large" sx={{ marginRight: 2 }} />
      )}
      <Paper
        elevation={2}
        sx={{
          padding: 1.5,
          borderRadius: 2,
          backgroundColor: isUser ? '#e0f7fa' : '#f1f1f1',
          maxWidth: '75%',
          wordBreak: 'break-word',
        }}
      >
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>

          {/* Parse the sanitized text */}
          {parse(sanitizedText)}
        </Typography>
      </Paper>
      {isUser && (
        <Person2Icon fontSize="large" sx={{ marginLeft: 2 }} />
      )}
    </Box>
  );
};

export default Message;
