# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Agregar productos a Firestore

Para agregar productos desde un archivo JSON a Firestore:

1. **Agrega la ruta en `App.jsx`:**

   ```jsx
   import SubirProductos from "./components/SubirProductos";
   // ...
   <Route path="/subir-productos" element={<SubirProductos />} />;
   ```

2. **Usa el componente `SubirProductos.jsx`:**

   - Asegúrate de que el archivo `src/data/productos.json` tenga el formato correcto.
   - Puedes modificar el archivo `SubirProductos.jsx` para cambiar los productos que deseas subir, siguiendo el modelo actual.

3. **Accede a `/subir-productos` en tu navegador y haz clic en el botón para subir los productos a Firestore.**

> **Nota:** Recuerda ajustar las reglas de seguridad de Firestore para permitir la escritura durante el desarrollo.
