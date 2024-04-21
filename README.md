# NCU Note Node JS

Bienvenue sur mes Notes, une application simple utilisant Node.js. Ce README vous guidera à travers les étapes pour démarrer l'application et le serveur de base de données local.

## Prérequis

Assurez-vous d'avoir Node.js installé sur votre machine. Si ce n'est pas le cas, vous pouvez le télécharger et l'installer depuis [nodejs.org](https://nodejs.org/).

## Installation

Avant de démarrer l'application, vous devez installer les dépendances nécessaires. Ouvrez un terminal et exécutez la commande suivante à la racine du projet :

```bash
npm install
```
Cette commande installera toutes les dépendances requises pour que l'application fonctionne correctement.

# Démarrage du serveur de données
Pour démarrer le serveur de données qui alimente l'application, exécutez la commande suivante :

```bash
npx json-server db.json
```
Cela lancera le serveur de base de données local utilisant le fichier db.json comme source de données. Le serveur sera accessible à l'adresse http://localhost:3000/.

# Démarrage de l'application
Une fois le serveur de données en cours d'exécution, vous pouvez démarrer l'application en exécutant :

```bash
npm run start
```
Cette commande démarre l'application Node.js. Suivez les instructions dans votre terminal pour ouvrir l'application dans un navigateur web ou accéder via l'URL fournie dans le terminal.

# Support
Si vous rencontrez des problèmes lors de l'installation ou du démarrage de l'application, n'hésitez pas à créer une issue sur ce repository GitHub ou à contacter le support technique.