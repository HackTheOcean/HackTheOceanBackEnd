# Links importantes
- [HackTheOcean](https://github.com/HackTheOcean) Organizacion creada para administrar nuestro proyecto de hackaton.
- [FrontEnd](https://github.com/HackTheOcean/HackTheOceanFrontEnd) Seccion frontend del proyecto
- [BackEnd](https://github.com/HackTheOcean/HackTheOceanBackEnd) Seccion backend del proyecto


# HackTheOceanBackEnd
Seccion backend del proyecto desarrollado para hackaton en Launch X

## Comandos utiles
1. `npm run test` Ejecuta los test
2. `npm run linter` Ejecuta linter
3. `npm run linter-fix` Aplica correcciones de estilos con linter
4. `npm run server` Levanta el servidor
5. `npx prisma migrate dev --name init` Implementa el Schema de tablas en la base
5. `node prisma/seed.js` Inserta registros predefinidos a las tablas de la base

## Consideraciones previas
- El proyecto trabaja con una BD en PostgreSQL, asegurate de tener instalado este motor de base de datos.
- El proyecto utiliza Prisma para poder accesar a la base y trabajar con su nformacion.
- Recuerda que el archivo .env no se versiona por segutidad.
- Para lograr la conexion con la BD crea un archivo .env y pega esta linea en su interior (agregando los datos de tu conexion) `DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombredebase?schema=public"`

## Implementacion de schema de tablas con Prisma
- El Schema de la base ya se encuentra creado y puedes verlo en `prisma/schema.prisma`
- Para implementar el schema ejecuta el comando `npx prisma migrate dev --name init`
- Si todo sale bien se creara una carpeta llamada `migrations` dentro de la carpeta `prisma/`, esta carpeta no la versionamos ya que se puede crear con el comando anterior
- Ejecuta el comando `node prisma/seed.js` para agregar registros a las tablas que se acaban de crear

## Endpoints
|Endpoint|Request|Response|
|:--|:--|:--|
|`/pollution`||Listado completo de contaminantes|
|`/pollution`|`:id` id con el que se buscara informacion en la base|Registro unico filtrado por ID|
|`/wildlife`||Listado completo de animales|
|`/wildlife`|`:id` id con el que se buscara informacion en la base|Registro unico filtrado por ID|