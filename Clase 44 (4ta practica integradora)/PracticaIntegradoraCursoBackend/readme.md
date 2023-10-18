¿Cómo abordar la última práctica integradora?

Primero, como ya será usual, toca dar un vistazo a lo que se tiene.

* Sistema de usuarios con roles "student" y "teacher". Además de un sistema de políticas para acceso según rol
* Todo el servidor se encuentra con una arquitectura más sólida en comparación con el modelo previo.
* Manejo de passport para poder mantener un middleware "current" que nos permita obtener la información del usuario guardado en la cookie.
* Servicio de mailing para enviar correo cada vez que el usuario se registra a algún curso

La implementación de la última práctica integradora es bastante simple, debido a que sólo es necesario marcar los últimos detalles y dudas.

* Documentación
* Logger
* Testing (Opcional - Reemplaza a "Aspectos visuales con Handlebars" (si no hay tiempo))
* Aspectos visuales con Handlebars (Opcional - Reemplaza "Testing" (si no hay tiempo))

Consejo importante:
¡Hay algo maravilloso en esta práctica integradora! Y es que es la práctica integradora donde puedes ayudar a tus estudiantes con la mayor cantidad de dudas que tengan. Al ser la última práctica integradora, como profesor has reconocido perfectamente cuáles son las principales dudas y los principales puntos de dolor de esta comisión. ¡Explótalos y aprovecha este tiempo para ver algo que les pueda servir!

TODOS LOS CAMBIOS ESTÁN 100% testeados, por lo que se asegura que el funcionamiento será exitoso en caso de copiarse correctamente cada línea del código.

A continuación, se te deja un log de los cambios completos que se han realizado, el paso a paso en el cual se estructuró esta rama. Eres libre de hacerlo en el orden que necesites, siempre y cuando tengas el tiempo para implementarlo y explicarlo correctamente.
¡Comenzamos!

1. Se agrega una nueva variable de entorno en el env NODE_ENV, la cual podrá contener los campos "development" o "production" según sea el caso.
2. Se agrega la variable de entorno en el archivo config.js, para que ésta tome el valor del archivo .env, o en su defecto sea "production".
3. Se crea un archivo "logger.middleware.js" en la carpeta "middleware", éste servirá para poder generar el logger a partir del entorno. 
4. Se agrega la lógica del logger y los diferentes transportes según sea el entorno.
5. Se importa el middleware que añade el logger en el archivo app.js
6. Se instalan las dependencias de Swagger y se coloca la configuración en app.js
7. Se crean los archivos para documentar usuarios y para documentar cursos (Documentación simple del usuario, no es necesario probar cada endpoint)
8. ¡Sé creativo! ¿Qué más necesitan tus estudiantes?

¡Hemos terminado!

Te invito a que repases con detalle estos pasos para que puedas evaluar tus propios tiempos de ejecución de cada paso, al final, te servirá para qué partes ir más aceleradas, en cuales puedes tomar más tiempo o qué codigos recomiendas ya tener hechos desde el inicio de la clase (todo es un malabar de tiempos en el cual tú eres el dueño).


NUEVOS IMPORTS:
winston
swagger-jsdoc
swagger-ui-express