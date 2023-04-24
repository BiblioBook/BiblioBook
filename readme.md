# Installation de l'application Symfony BiblioBook

## DEPLOIEMENT EN LOCAL

### 1- Pré-requis

Avant de commencer, assurez-vous que les prérequis suivants sont installés :

- PHP 8
- Symfony CLI
- Node.js
- Composer

### 2- Cloner le dépôt GitHub

Clonez le dépôt GitHub de l'application :

```bash
git clone https://github.com/BiblioBook/BiblioBook.git
```

### 3- Installer les dépendances

Installez les dépendances du projet à l'aide de Composer :

```bash
cd BiblioBook
composer install
```

### 4- Installer les dépendances front-end

Installez les dépendances front-end à l'aide de Node.js :

```bash
npm install
```

### 5- Surveiller les modifications de fichiers

Executez la commande :

```bash
npm run watch
```

### 6- Configurer l'application

Copiez le fichier `.env` en `.env.local` et configurez les variables d'environnement :

```bash
cp .env .env.local
```

Définissez vos variables dans le fichier .env.local:

- APP_ENV (dev)
- APP_SECRET
- DATABASE_URL
- MAILER_DSN

## 7- Lancer le serveur

Lancez le serveur Symfony :

```bash
symfony server:start
```

L'application est maintenant disponible à l'adresse http://localhost:8000
