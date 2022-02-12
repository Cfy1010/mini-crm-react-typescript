import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type address = {
  name: string;
  email: string;
};

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adresses, setAdresses] = useState<address[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAddress: address = {
      name,
      email,
    };

    setAdresses([...adresses, newAddress]);
    setName('')
    setEmail('')
  };

  return (
    <>
      <h1>App CRM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nom </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor='email'>Email </label>
        <input
          id='email'
          type='text'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <hr />
      {adresses.length > 0 && (
        <ul>
          {adresses.map((element) => (
            <li key={element.email}>
              {element.name} : {element.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
