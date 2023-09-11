# NextJS OpenJira App

To run the app, you need to have the database

```

docker-compose up -d
```

- The -d, means **detached**

- Mongo URL local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de datos con información de pruebas

Llamar a:

```
http://localhost:3000/api/seed
```
