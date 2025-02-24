# 🚗 LA FUSIÓN...🔥

La fusión es una app **CRM** que permite la gestion de vehiculos, leads, tareas y mucho mas. 

Para ello ya Tilo cuenta con una aplicacion funcional que cumple con gran parte de los requisitos para ser un sistema integral que cumpla con aspectos de un CRM (Leadcars), por ello se plantea la extensión de funcionalidades, utilizando esta app como base para "El nuevo CRM de Tilo". por ello se plantea un desarrollo hibrido en el que se puedan añadir funcionalidades de gestion de stock y publicacion en portales, y mejorar la experiencia de uso, con una nueva interfaz.

## Desarrollo frontend: 
Se plantea desarrollar  una app que conviva con la app actual de LeadCars. esta app será accesible a traves del path /v2/* de app.leadcars.es,  y conectará contra la api actual. Esto permitirá tener una app totalmente independiente de la plataforma actual de LeadCars. y poder ir migrando poco a poco a esta nueva app.

La aplicación estará alojada en el mismo servidor que la app actual de LeadCars. y se añadirá una regla de nginx para usarlo como proxy para que todo lo que esté en el path /v2/ se sirva desde esta nueva app.

## API. 

para el API del CRM se prevee usar la API REST de LeadCars, ya que tiene todas las funcionalidades del sistema de leads y se puede usar como **API GATEWAY**, para que desde un solo punto de acceso se pueda acceder a servicios de fuel.

**cada usuario de LeadCars tendrá una paridad con un usuario de Core/Fuel para poder gestionar acciones sobre vehiculos.**

----------

## Desarrollo general :
- Crear repositorio en Bitbucket.
- Implementar CI/CD con Bitbucket pipelines al servidor de desarrollo.
- Implementar dockerizacion de la app.

**Consideraciones para la nueva app:** 

 - Implementación de app en Vue Nuxt , con Prime Vue 4 - Tailwind CSS.
 - Implementar control de rutas y autenticación.
 - Multiidioma. (Tolgee)
 - Control de permisos.
 - Implementar vistas para : 
    - Listado de vehiculos.
    - Ficha de vehiculo.
    - Crear vehiculo.
    - Editar vehiculo.
    - Multipublicador en portales para vehiculos.
    - Ver leads de vehiculo. **pendiente definir si se hará desde la app o se enviará al servicio actual** 
    - Crear oferta **pendiente definir si se hará desde la app o se enviará al servicio actual** 

## Scope global

- Usuario de LC debe tener un par en Fuel para poder crear/editar vehiculos.

- La app actual de leadcars debe ser capaz de dejar en una cookie con un token de autenticación que pueda ser utilizado para enviar las peticiones a la api de leadcars., si es un jwt incluir el id, nombre, email, avatar, id de cliente, idioma **codigo del idioma es_ES**, nombre de cliente.

- Servicio para obtener datos del cliente actual.
  - servicios del cliente

- Servicio para obtener datos del usuario actual.
  - servicios del usuario
  - Usuario de Core/Fuel.
  - roles y Permisos : Se deben incluir los roles de LC y permisos de Core/Fuel. (para controlar si un usuario puede hacer una acción u otra, ejem : editar precios, crear vehiculo, etc)

## Scope de vehículos

### Buscador de vehículos
Se debe implementar servicios que permitan obtener :
- Listado de Marcas
- Listado de Modelos (agrupar modelos por marca)
- Listado de Versiones (agrupar versiones por modelo)
- Listado de carrocerías
- Listado de combustibles
- Listado de transmisión 
- Listado de Colores
- Valores de Potencia min - max
- Valores de Precio min-max
- Valores de Año min-max
- Listado de Sedes
- Listado de Concesionarios
- Listado de Procedencia
- Listado de Etiquetas de vehículos (* Estas etiquetas serán de fuel ? o de Lc?)
- Listado de Distintivos ambientales
- Listado de Estados

### Servicio para filtrar vehiculos : 
El listado de vehiculos se deberá mostrar en secciones separadas : VN's VO's. **que ocurre con los vehiculos comerciales, motos,etc...?**

- Filtrar por cada uno de los atributos : Marcas, Modelos, Versiones, carrocerías, combustibles, transmisión, Colores, Potencia, Precio, Año, Sedes, Concesionarios, Procedencia, Etiquetas, Distintivos Ambientales, Estados.
- Filtrar por días en stock. (+30, +60, +90)
- Filtrar solo con leads
- Filtrar solo con imagenes
- Filtrar solo ofertas
- Filtrar solo disponibles.
- Filtrar por portales publicados. (esto para el multipublicador)

### Exportar listados [FUEL]
- Servicios para exportar listados
- Exportar en formato xlsx.

## Scope de ficha de vehiculo
- Servicio para obtener los datos de la ficha de vehiculo.
- Servicio para imprimir la ficha de vehiculo. (esto se hará desde el frontend o desde el backend??)
- Servicio para listar las ofertas de un vehiculo.
- Servicio para ver las ofertas de un vehiculo.

## Leads de vehiculo. [LC]
- Endpoint para sacar los leads por id de vehículos. 
- Servicio para añadir un lead a un vehiculo.
- Servicio para crear una oferta

## Scope de crear un vehiculo [FUEL] **REVISAR**
- **revisar UX/UI**
- Servicio para validar matricula y/o bastidor.
- Servicio para listar marcas, modelos , version ... todos los datos de JATO.
- Servicio para listar datos de vehiculo de tipo "clasico", (BBDD de maxterauto).
- Servicio para listar valores de "Categorias web" (carrocerias).
- Servicio para obtener valores para "Garantias"

## Scope de publicador/multipublicador [FUEL/EXCHANGER] **REVISAR**
- Listado de vehiculos a publicar. **Solo se pueden publicar vos?**
- Listado de portales, debe incluir datos de estadisticas
  - cantidad de vehículos creados/publicados en cada portal y si tiene un limite de vehículos.
- Servicio para publicar/despublicar en lotes. 
  - El servicio debe ser capaz  de publicar/despublicar lotes de vehículos en los diferentes portales, y si para algun vehiculo falta algun dato, debe ser capaz de devolver al frontend los vehiculos con problemas e indicando que campos le falta para que el usuario pueda corregirlos.
  - Se podrá publicar/despublicar : 
    - Busquedas por filtros.
    - Selección por ids.
    - Vehiculo 1 por 1.
  - Implementar un servicio para validar si un coche por id está "válido" para publicar en un portal , se utilizará para poner un indicador sobre el logo del portal en caso que falte algún dato.


------------------------------ 



## Normas para la API :

Autenticación:
- Se utilizará un token de autenticación para las peticiones a la api.
- El token se enviará en el header de la petición con el siguiente formato:
  - Authorization: Bearer <token>

Para mejorar la legibilidad y mantenibilidad de la api se utilizarán las siguientes normas:

- usar preferiblemente **claves en Ingles**.
- atributos de una entidad:  usar formato snake_case
  - name
  - id
  - make
  - model
  - version
  - body_style
  - fuel_type
  - transmission
  - color
  - ... 
  

Estructura de la api:
- /api/v3/

Reglas de nomenclatura:
- usar sustantivos en plural para las entidades en formato kebab-case
  - vehicles
  - leads
 
Usar verbos http para las acciones.
  - GET    /api/v3/vehicles        → Obtener lista de vehiculos
  - GET    /api/v3/vehicles/101    → Obtener detalle de un vehiculo
  - POST   /api/v3/vehicles        → Crear un nuevo vehiculo
  - PUT    /api/v3/vehicles/101    → Actualizar un vehiculo
  - DELETE /api/v3/vehicles/101    → Eliminar un vehiculo

- Las respuestas de la api siempre deben ser en formato json.

- Las respuestas de listados deben cumplir con el siguiente formato:
 
  {
    "data": [
      {},
      ...
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 10,
      "totalPages": 10
    },
    "links": {
      "self": "https://api.leadcars.com/api/v3/vehicles",
      "next": "https://api.leadcars.com/api/v3/vehicles?page=2",
      "prev": "https://api.leadcars.com/api/v3/vehicles?page=1"
    }
  }


- Para las peticiones de un detalle se utilizará el siguiente formato:

  {
    "data": {},
    "success": true,
  }

- Para las respuestas de error se utilizará el siguiente formato:

  {
    "success": false,
    "message": "Error al crear el vehiculo",
    "errors": [
     {
      "code": "400",
      "field": "vin",
      "message": "La matricula es obligatoria"
    },
    ]
  }

- Para las respuestas de exito se utilizará el siguiente formato:

  {
    "success": true,
    "data": {},
    "message": "Vehiculo creado correctamente"
  }

### Códigos de respuesta:

**Código** : **Descripción**

200 : Petición exitosa
201 : Recurso creado exitosamente
204 : Petición exitosa sin contenido de respuesta
400 : Error en la solicitud del cliente
401 : No autenticado
403 : No autorizado
404 : Recurso no encontrado
422 : Error de validación
500 : Error del servidor

---




