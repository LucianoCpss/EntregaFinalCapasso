# WolfKingdom


## Descripción
Tienda e-commerce orientada a la venta de prendas de vestir. Presenta un menu inicial con algunos articulos para la venta, los cuales pueden ser seleccionados para realizar la accion de agregarlos al carrito y finalizar la compra en caso de ser necesario. Este proyecto fue presentado como entrega final para el curso de React JS de Coder House. 

## Enfoque y Objetivos
El enfoque de este proyecto estuvo centrado en crear una tienda funcional que pudiera ser implementada en la vida ordinaria, es decir, que pudiese ser utilizada en el mercado real para la venta de productos populares como los es la indumentaria.

## Componentes Principales
A grandes rasgos los componentes principales utilizados en el proyecto fueron.

- **Header:** Componente que se presenta en la parte superior de la tienda en todo momento. Su utilidad es la de presentar las categorias de los productos y dar navegabilidad dentro de estas mismas, ademas de incluir el acceso al carrito donde luego se depositaran los productos que se vayan a querer comprar.
- **ItemListContainer:** Todos los articulos que pueden ser comprados estan listados dentro de este componente. Permite al usuario encontrar los productos para seleccionarlos, ingresar al detalle y realizar la compra.  
- **ItemDetailContainer:** Una vez seleccionado el producto de interes se nos redirige a este componente, el cual se encarga de presentar toda la informacion necesaria sobre este para que el cliente pueda tomar la decision de realizar la compra y agregar el producto al carrito.
- **Cart:** Este componente sirve para que el cliente pueda ver los productos que estaba interesado en comprar, junto con la cantidad total de productos y su valor.
- **Checkout:** El ultimo componente en ser presentado es este. Se encarga de mostrar los productos en la orden y presenta el formulario que hay que completar para poder finalizar la compra.

## Elementos utilizados

- **Bootstrap:** Se utilizó Bootstrap con el objetivo de agregarle estilo de forma mas eficiente al proyecto
- **FireBase:** Se utilizó FireBase como base de datos para ingresar y guardar datos, tanto de los productos como de las ordenes de compra finalizas.
- **React Router Dom:** React Router Dom fue utilizado para la navegacion interna de la tienda, permitiendo cambiar de un componente a otro segun fuera necesario. Fue el encargado del cambio de rutas de navegacion segun la categoria del producto o su id entre otras cosas.  

## Archivos
El proyecto presenta todos los componentes en las respectivas carpetas con sus nombres. Cada uno contiene dentro de su carpeta (ademas del componente mismo) las carpetas de sus componentes hijos, de forma que se mantengan juntos y sea mas facil distinguir el componente contenedor del componente contenido.


