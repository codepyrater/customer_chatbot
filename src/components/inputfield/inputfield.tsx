import { Box, TextField, Button } from '@mui/material'
 
const InputField = () => {
  return (
<Box display="flex" alignItems="center" mt={2}>
      <TextField
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" sx={{ ml: 2 }}>
        Send
      </Button>
    </Box>
  )
}

export default InputField;