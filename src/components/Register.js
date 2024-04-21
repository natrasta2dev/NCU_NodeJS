import React, { useState } from 'react';

function Register({ addUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Ajouter la logique pour enregistrer le nouvel utilisateur
    // Exemple: Envoi à une API ou mise à jour d'un objet JSON
    addUser({ username, password });
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="New Username" value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="password" placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
