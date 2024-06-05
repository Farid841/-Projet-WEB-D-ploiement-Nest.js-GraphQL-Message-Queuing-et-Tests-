// // src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// //import { withAuthenticationRequired } from '@auth0/auth0-react';
// import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
// import LoginPage from './pages/LoginPage';
// import ChatListPage from './pages/ChatListPage';
// import ChatPage from './pages/ChatPage';
// import NewConversationPage from './pages/NewConversationPage';

// const ProtectedRoute = ({ component }: { component: React.ComponentType }) => {
//   const Component = withAuthenticationRequired(component);
//   return <Component />;
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Auth0ProviderWithHistory>
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/chat/:id" element={<ProtectedRoute component={ChatPage} />} />
//           <Route path="/new-conversation" element={<ProtectedRoute component={NewConversationPage} />} />
//           <Route path="/" element={<ProtectedRoute component={ChatListPage} />} />
//         </Routes>
//       </Auth0ProviderWithHistory>
//     </Router>
//   );
// };

// export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import LoginPage from './pages/LoginPage';
import ChatListPage from './pages/ChatListPage';
import ChatPage from './pages/ChatPage';
import NewConversationPage from './pages/NewConversationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/new-conversation" element={<NewConversationPage />} />
          <Route path="/" element={<ChatListPage />} />
        </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export default App;
