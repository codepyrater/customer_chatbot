## Customer Support Chatbot UI
# Overview
This project is a Customer Support Chatbot User Interface (UI) developed using React and TypeScript. The UI is designed to be efficient and also provide effective interactions for Customer Support Agents. It has rich text editing features, quick replies, and integrates with the Gemini API for chatbot functionalities.

## Features
- Rich Text Editing: Agents can format the chatbot responses using bold, italic, underline, lists, and links feature provided by the React Quill.
- Quick Replies: Predefined quick replies to streamline interactions.
- Responsive Design: Ensured compatibility across different devices and platforms.

## Libraries Used
- React: A JavaScript library for building chatbot User interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Material-UI (MUI): A popular React UI framework for building responsive, accessible, and customizable design systems.
- React Quill: A React component for Quill, a powerful rich text editor.
- Gemini API: Free open source API for chatbot responses.

## Commands
### Install Dependencies
Using Yarn Package Manager

```bash
yarn create react-app customer_chatbot --template typescript
```

Add Material-UI:

```bash
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material 
```

Add React Quill:

```bash
yarn add react-quill
yarn add quill
```

Add Gemini API Library:

```bash
yarn add @google/generative-ai
```

## Environment Variables
To use the Gemini API, you'll need an API key. Follow these steps:

1. Get the API Key:
    - Sign up for the Gemini API and obtain your free API key from the Gemini website.
2. Store the API Key in .env:
    - Create a .env file in the root directory of your project and add your API key:
    ```env
    REACT_APP_API_KEY=your_api_key_here
    ```

## Project Structure
```
chatbot-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── ChatWindow.tsx
│   │   ├── Message.tsx
│   │   ├── InputField.tsx
│   │   
│   ├── services/
│   │   ├── GeminiService.ts
│   │── text_editor/ RichTextResponse.tsx    
│   ├── App.tsx
│   ├── index.tsx
├── .env
├── package.json
├── README.md
```

## Getting Started
### Prerequisites
- Node.js (v14 or later)
- Yarn (v1.22 or later)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/chatbot-ui.git
    cd chatbot-ui
    ```
2. Install dependencies:
    ```bash
    yarn install
    ```
3. Setup environment variables:
    - Create a .env file in the root directory and add your API key:
    ```env
    REACT_APP_API_KEY=your_api_key_here
    ```

### Running the Project
To start the development server, run:
```bash
yarn start
```
This will open the application in your default web browser.

## Usage
1. Start the development server:
    ```bash
    yarn start
    ```
2. Interact with the chatbot:
    - Use the rich text editor to format responses from the API.
    - Utilize quick reply buttons for common queries.
    - Edit and send responses using the "Send Edited Response" button.

## Components
### ChatWindow.tsx
Description: Main component that integrates all other components and handles interaction logic.
Features:
- Displays messages.
- Provides quick replies.
- Integrates the input field for sending messages.

### Message.tsx
Description: Component to display individual messages.
Features:
- Handles and displays formatted text using DOMPurify and html-parser.

### RichTextResponse.tsx
Description: Component providing a rich text editor using React Quill.
Features:
- Allows agents to format text before sending.

### InputField.tsx
Description: Input field for agents to type and send messages.
Features:
- Triggers message send on Enter key press.

### GeminiService.ts
Description: Service to interact with the Gemini API for chatbot responses.
Features:
- Sends messages to the Gemini API and receives responses.
 

## Conclusion
This project provides a interactive customer support chatbot UI using React and Material-UI, integrated with the Gemini API for chatbot functionalities. It provides rich text editing features, quick replies, and ensures responsiveness across various devices, making it suitable for enterprise-level applications.

For any questions or further assistance, feel free to reach out or refer to the project documentation.

 