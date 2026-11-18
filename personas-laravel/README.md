# Proyecto Personas en Laravel

## Guía 2: Mostrar registros

En esta práctica trabajé con Laravel para mostrar un listado de personas registradas en una base de datos. Para ello, utilicé migraciones, un modelo, una factory y un seeder que permite generar diez registros ficticios.

## Funcionamiento de los archivos

**1. ¿Qué archivo recibe la petición?**

El archivo `routes/web.php` contiene la ruta `/personas`, que recibe la petición del usuario y la dirige hacia el método `index()` de `PersonaController`. Esta ruta está protegida mediante autenticación.

**2. ¿Qué archivo consulta los datos?**

El archivo `app/Http/Controllers/PersonaController.php` se encarga de consultar los registros utilizando el modelo `Persona`. Mediante el método `index()`, obtiene las personas registradas, las ordena por su ID y envía la información a la vista.

**3. ¿Qué archivo genera el HTML?**

El archivo `resources/views/personas/index.blade.php` se encarga de generar el HTML para mostrar los registros. En esta vista se utiliza Blade para recorrer las personas y presentar su ID, DNI, nombre y fecha de nacimiento en una tabla.

## Resultado

Al ingresar al sistema mediante el login, se puede acceder al listado de personas, donde se muestran diez registros ficticios. Además, el sistema protege la ruta para evitar que usuarios sin iniciar sesión accedan a la información.

Guía 4: Editar y actualizar personas

En esta práctica se implementó la funcionalidad de editar y actualizar los datos de personas registradas en el sistema, conservando su ID.

Funcionamiento de los archivos

routes/web.php: Define las rutas que reciben las peticiones para editar y actualizar personas y las dirige al controlador correspondiente.

PersonaController.php: Procesa las peticiones y utiliza el modelo Persona para buscar y actualizar los registros en la base de datos.

Persona.php: Es el modelo que representa la tabla de personas y permite interactuar con sus datos.

edit.blade.php: Genera el formulario HTML de edición, mostrando los datos actuales de la persona.

index.blade.php: Muestra el listado de personas y el enlace para editar cada registro.