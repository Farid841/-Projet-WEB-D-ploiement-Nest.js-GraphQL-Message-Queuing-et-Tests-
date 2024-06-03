# Utiliser l'image officielle Node.js comme image de base
FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tous les fichiers de l'application dans le répertoire de travail
COPY . .

# Construire l'application NestJS
RUN npm run build

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["node", "dist/main"]
