import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FormRegistration } from './components/FormRegistration/FormRegistration';
import { Chat } from './components/Chat/Chat';

function App() {
  const [user, setUser] = useState(sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : '')

  return (
    <Container className='vh-100'>
      {user
        ? <Chat />
        : <FormRegistration setUser={setUser} />
      }
    </Container>
  );
}

export default App;
