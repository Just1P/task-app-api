### Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

### Étapes d'installation

1. Clonez le repository :

   ```bash
   git clone <url-du-repository>
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement (voir [Configuration](#configuration)).

4. Lancer les containers Docker : 
    ```bash
    docker-compose up -d
    ou docker compose up -d

5. Démarrez l'application :

   ```bash
   npm run start:dev
   ```

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet à partir du fichier .env-example.

## Documentation API

La documentation API est générée avec **Swagger** et accessible à l'adresse :

```
http://localhost:8000/api
```


# Description

TODO app, CRUD

# Schéma BDD

```sql
CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    done BOOLEAN DEFAULT false
```

# Generate ressources

```bash
 nest generate ressource task
 nest g res task
 ```
 
# Run project
```bash
# Development
 docker compose up -d
 npm run start:dev
# Production
 npm run start
```

User
- id
- username
- email
- password
- createdAt
- updatedAt
- deletedAt

