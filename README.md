# Componente React de foto de perfil
Componente de React para añadir una foto de perfil.

## Proyecto de muestra
Hay montado un proyecto con [create-react-app](https://github.com/facebook/create-react-app/) para ver el funcionamiento. Los archivos principales son:
- **GetAvatar.js**: Componente que se ocupa de gestionar la subida y procesado de la imagen
- **Profile.js**: Componente de ejemplo para verla aplicada

Además, debido a su longitud al convertirla en base64, sacamos la imagen por defecto a un archivo externo: **defaultImage.js**.

> Podemos usar un servicio como [base64-image.de](https://www.base64-image.de) para convertir nuestras imágenes

## Componentes
### GetAvatar.js
Recibe 3 props:

| Prop | |
|---|---|
| avatar | La imagen almacenada en el estado. |
| isAvatarDefault | Booleano para indicar si debemos pintar la previsualización del avatar o no. |
|updateAvatar | Método de App que actualiza en nuestro estado la nueva imagen subida por el usuario, convertida a base64. |

### Profile.js
Recibe 1 prop:

| Prop | |
|---|---|
| avatar | La imagen almacenada en el estado. |

### App.js
Es el componente que va a gestionar el estado y donde está definido el método que se va a encargar de actualizar el estado.

## En acción
Como siempre, para verlo funcionando, `npm install` y `npm start`.  

**¡Al turrón!**
