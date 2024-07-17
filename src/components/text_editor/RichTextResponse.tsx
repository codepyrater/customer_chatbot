import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Paper } from '@mui/material';
// props for the RichTextResponse component
interface RichTextResponseProps {
  value: string;
  onChange: (value: string) => void; // function to handle response text change
}

const RichTextResponse = ({ value, onChange }: RichTextResponseProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: 1.5,
        borderRadius: 2,
        backgroundColor: '#e0f7fa',
        maxWidth: '100%',
      }}
    >
      <ReactQuill value={value} onChange={onChange} />
    </Paper>
  );
};

export default RichTextResponse;
