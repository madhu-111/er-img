import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import ChatBot from './ChatBot.';  // Make sure the path is correct

// Define a custom theme or you can use the default Chakra theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#f5f5f5',
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <ChatBot />
      </Box>
    </ChakraProvider>
  );
};

export default App;
