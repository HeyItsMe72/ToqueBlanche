﻿# ToqueBlanche
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
