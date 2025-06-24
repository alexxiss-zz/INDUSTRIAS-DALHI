/*import productos from '../data/productos.json';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function SubirProductos() {
  const handleUpload = async () => {
    try {
      const productosRef = collection(db, 'productos');
      for (let producto of productos) {
        await addDoc(productosRef, producto);
        console.log(`Subido: ${producto.nombre}`);
      }
      alert('Productos subidos exitosamente');
    } catch (error) {
      console.error("Error al subir productos:", error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button onClick={handleUpload}>Subir productos a Firestore</button>
    </div>
  );
}

export default SubirProductos;
*/