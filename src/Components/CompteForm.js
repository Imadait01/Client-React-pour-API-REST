// src/Components/CompteForm.js
import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm({ onCompteAdded }) {
  const [compte, setCompte] = useState({
    solde: '',
    dateCreation: new Date().toISOString().split('T')[0],
    type: 'COURANT'
  });

  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const compteToSend = {
      solde: parseFloat(compte.solde),
      dateCreation: compte.dateCreation,
      type: compte.type
    };

    axios.post(`${API_BASE_URL}/comptes`, compteToSend)
      .then(response => {
        alert('Compte ajouté avec succès !');
        setCompte({
          solde: '',
          dateCreation: new Date().toISOString().split('T')[0],
          type: 'COURANT'
        });
        if (onCompteAdded) onCompteAdded(); // mise à jour de la liste
      })
      .catch(error => {
        console.error(error.response ? error.response.data : error);
        alert('Erreur lors de la création du compte');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input
            type="number"
            name="solde"
            className="form-control"
            value={compte.solde}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input
            type="date"
            name="dateCreation"
            className="form-control"
            value={compte.dateCreation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select
            name="type"
            className="form-select"
            value={compte.type}
            onChange={handleChange}
          >
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;
