import React, { useState } from 'react';
import { Box, Input, Button, VStack, Text, ScrollableFeed } from '@chakra-ui/react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setLoading(true);

      // Simulate API call to backend (can be replaced with real backend API)
      try {
        const response = await axios.post('http://localhost:5000/chat', { message: input });
        const botResponse = response.data.reply;

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Sorry, something went wrong.', sender: 'bot' },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box width="400px" height="500px" borderWidth="1px" borderRadius="md" padding="4">
      <VStack spacing={4} align="start" height="100%" justify="space-between">
        <ScrollableFeed>
          {messages.map((message, index) => (
            <Box
              key={index}
              alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
              bg={message.sender === 'user' ? 'blue.500' : 'gray.200'}
              color={message.sender === 'user' ? 'white' : 'black'}
              p="2"
              borderRadius="md"
              maxWidth="80%"
            >
              <Text>{message.text}</Text>
            </Box>
          ))}
        </ScrollableFeed>
        <Box display="flex" width="100%">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            size="md"
            mr="2"
          />
          <Button onClick={handleSendMessage} colorScheme="blue" size="md" isLoading={loading}>
            Send
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ChatBot;
