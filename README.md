# ToqueBlanche
![HTML5](https://img.shields.io/badge/HTML%20-orange?logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS%20-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript%20-yellow?logo=JavaScript&logoColor=white)

![SinglePage](https://img.shields.io/badge/SINGLE%20PAGE%20-purple?style=for-the-badge&label=PROYECTO%20DE%20MAQUETACI%C3%93N&labelColor=green)

![ResponsiveSite](https://img.shields.io/badge/Responsive%20Site%20-yellow?style=for-the-badge&label=100%25&labelColor=%23FE008B&color=%23FEE300)

![Toque-Blanche](https://github.com/HeyItsMe72/ToqueBlanche/assets/124311622/99f5de0b-e679-4a67-a705-2a60de1256f7)

## Introducción 
*Toque Blanche* es un proyecto de maquetación realizado con fines educativos; utiliza la temática gastronómica, permitiendo ser utilizado para restaurantes o buffetes de eventos. Se trata de un proyecto denomidado **_single page_** o **_sitio de una página_** que permite al usuario navegar entre distintas secciones de un mismo index. 

Este proyecto no contiene utilidades de ningún tipo de librería o framework, utiliza tecnologías puras: **HTML5**, **CSS3** y **_Vanilla_ JavaScript (ES6)**.

**CSS _styles.css_**

_styles.css_ es un archivo que incluye todas las importaciones necesarias para asignar los estilos a la maquetación, además, asigna estilos generales al index, como: reseteo de los elementos (box-sizing), y estilos generales que son utilizados en las etiquetas html para que no sean repetidos en los estilos de cada sección que los comparta. Los estilos de cada sección se encuentran en la carpeta: _assets/css_.

**JavaScript _index.js_** 

_index.js_ es el archivo que incluye las importaciones del resto de las funcionalidades de la página (modales, carruseles y simulación submit). La dirección de los archivos correspondientes a las funcionalidades mencionadas es: _assets/js_

## Secciones
La página principal del sitio (_index.html_) contiene 4 secciones principales mostradas en la barra de navegación: 
* Cuisine.
* About.
* Toque Blanche (inicio del index).
* Contact.

### Inicio _Toque Blanche_
Al cargar la página, lo primero que se muestra es el _header_ con el título _Toque Blanche_ seguido de un banner que incluye un carrusel automático que muestra una imagen cada 3 segundos. Este _slidder_ es un creado completamente con html y css; comenzando organizando las imágenes dentro de una lista desordenada (_ul_) dentro de un apartado (*slider-frame*) al que se le dará anchura y altura. Al asignar *display: flex* a este contenedor, permitimos a las imágenes aparecer en fila, facilitando que el _overflow: hidden_ cubra aquellas imágenes que queden fuera del tamaño del contenedor; finalmente, con una animación se le permite a cada elemento aparecer dentro del contenedor, cambiando el procentaje de margen izquierdo en cada 3 segundos; esto útlimo debido a que en la lista se encuentran únicamente 5 imágenes dentro del slidder y la animación de 0 a 100% dura en total 15 segundos, permitiendo a cada imagen visualizarse 3 segundos. Para acceder a esta animación y estilos: _assets/css/header(slider frame)_.

Otra funcionalidad importante en este inicio de página es el botón *Contact*. Al dar click aparece un modal de contacto (_contact-modal_) que incluye un formulario dentro del cual se permite al usuario enviar correos electrónicos para poder contactar los servicios de *Toque Blanche*. Dentro del modal, al dar click en el boton *Send* aparecerá un loader durante tres segundos, el cual desaparecerá y enviará un texto: *¡Mensaje Enviado!* informando al usuario de que su mensaje ha sido enviado de forma éxitosa; por el momento, toda esta funcionalidad es una simulación, pues no se hizo uso de backend ni de api (como formSubmit) que hayan permitido un control real del mensaje enviado. Para lograrlo, se utilizó código JavaScript sencillo que se encuentra en el archivo *submit.js* y se explica a continuación. 

**_submit.js_**

Este archivo incluye la función _simulateMessage()_ la cual es ejecutada al lanzarse el "submit" del formulario dentro del modal de contacto. Básicamente se trata de un par de timers que permiten mostrar el loader durante 3 segundos, para luego dar paso a un texto de "_¡Mensaje enviado!_", limpiando el contenido de los inputs que el usuario haya llenado. 

### Cuisine 
En esta sección se muestran cuatro carruseles de imágenes, cada uno correspondiente a un diferente estilo de comida (aunque para fines prácticos, las imágenes no cambian): _Mexican_, _French_, _Asian_, _Cocktails_. Para realizar los carruseles, se utilizó funcionalidades de CSS y código en JavaScript, que a continuación se explica. 

Con respecto a CSS y HTML, se genera un contenedor general con la clase _carousel_, que a su vez contiene al _slider-list_, por su parte, cada imágen se encuentra dentro del contenedor _slider_, elemento del _slider-list_. Tanto al contenedor _carousel_ como al _slidder-list_ se les asigna un _display: flex_ que permite mostrar los elementos en una fila; los botones de _next_ (siguiente) y _prev_ (anterior), son elementos del contenedor, que con _justify-content: space-between_ permiten separse a cada extremo del contenedor. Para separar a cada _slider_ se da un margen a los lados de 1rem. Finalmente, la funcionalidad se da en _multislider.js_. 

**_multislider.js_**

Este archivo inclye la función _Move_ la cual es lanzada cuando se da un click en los botones de _next_ o _prev_. Si la el click viene del elemento _next_ el valor con que Move se ejecuta es 2, mientras que para _prev_ el valor es 1. La función _Move_ es bastante sencilla: se basa en modificar el valor hacia la izquierda que mantenga _slider-list_, en relación a la anchura de _carousel_ y el ancho del _slidder_.  

### About 
En esta sección de la página, se muestran dos partes: experiencia y educación. La parte de experiencia se compone de tres imágenes, que al dar click a cada una, aparece un modal de experiencia (_experience-modal_) que permiten al usuario conocer los proyectos y responsabilidades que se llevaron a cabo, entre otro tipo de información. Por su parte, _Education_ muestra la información de la preparación universitaria. 

Para llamar a los modales, ya sean los modales de experiencia (_experience-modal_) o de contacto (_contact-modal_), se utiliza el código del archivo _modals.js_ que se explica a continuación: 

**_modals.js_** 

Este archivo incluye la función _showModal.js_ que es ejecutada cuando se da un "click" en los botones correspondientes. Si el objetivo del evento en su lista de clases corresponde a un "open-modal" se accede al atributo _data-name_ que permite mostrar el nombre del modal que debe ser llamado, esto permite que una misma función se reutilizable para todos los modales que vayan o puedan ser mostrados. 

### Contact 
La sección de _Contact_ simplemente muestra un mensaje que invita al usuario a adquirir los servicios de _Toque Blanche_ y mantenerse en contacto con sus redes sociales, las cuales son mostradas en una fila de íconos de las redes sociales. Además, se añade un contenedor que muestra información como: teléfonos de contacto, ubicación y horario.  

## Mejoras 
![Submit](https://img.shields.io/badge/Submit%20-red?style=for-the-badge&label=%C3%81reas%20de%20oportunidad&labelColor=%23FEB100&color=FE0000)

Una buena mejora para la página y escalar el proyecto, sería una validación del formulario, además de un manejo de los emails que son enviados, ya sea utilizando el API de [FormSubmit](https://formsubmit.co/) o manejando la información con backend. 

![Carousels](https://img.shields.io/badge/Carousels-red?style=for-the-badge&label=%C3%81reas%20de%20oportunidad&labelColor=%23FEB100&color=FE0000)

Una excelente mejora en esta sección sería hacer carruseles "infinitos", permitiendo que al finalizar los slidders, de nuevo comenzara la ruleta con el slidder 1. 
