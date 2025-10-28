## Gestion des Comptes Bancaires

Ce projet est une application web pour gérer des comptes bancaires. Il est composé d’un **backend Spring Boot** et d’un **frontend React**. L’application permet d’ajouter des comptes, de les lister et de visualiser leurs informations.

---

##  Technologies utilisées

- **Backend** : Java 17, Spring Boot, Spring Data JPA, H2 (ou autre base de données)
- **Frontend** : React, Axios, Bootstrap
- **Communication** : API REST (JSON et XML)
- **Gestion CORS** : Autorisation de l’accès du frontend au backend

---

##  Structure du projet frontend

src/
│
├── Components/
│ ├── CompteForm.js # Formulaire pour ajouter un compte
│ └── CompteList.js # Liste des comptes existants
│
├── App.js # Composant principal
├── config.js # Configuration de l'URL de l'API
└── index.js # Point d’entrée React

yaml
Copier le code

---

##  Installation et exécution

### Backend (Spring Boot)

1. Cloner le projet backend ou ouvrir votre projet Spring Boot (Spring-RestController).
2. Configurer la base de données dans `application.properties`.
3. Lancer le serveur :

```bash
mvn spring-boot:run
Le backend sera disponible sur : http://localhost:8080/banque.

Frontend (React)
Installer les dépendances :

bash
Copier le code
npm install
Lancer le frontend :

bash
Copier le code
npm start
Le frontend sera disponible sur : http://localhost:3000.

 ## Fonctionnalités
Ajouter un compte avec :

Solde

Date de création

Type : Courant ou Épargne

Lister tous les comptes existants

La liste se met à jour automatiquement après l’ajout d’un nouveau compte

Gestion des erreurs de saisie et de réseau

## Notes importantes
CORS : Assurez-vous que le backend autorise le frontend (exemple : @CrossOrigin(origins = "http://localhost:3000") sur le contrôleur Spring Boot).

Format des données :

solde : nombre (double)

dateCreation : format yyyy-MM-dd

type : enum COURANT ou EPARGNE