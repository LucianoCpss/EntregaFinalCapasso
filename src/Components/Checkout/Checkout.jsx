import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'
import { NavLink } from "react-router-dom";

export const Checkout = () =>{
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');

    const {cart, totalPrice, totalQuantity, clearCart} = useContext(CartContext)

    const formProcess = (event) =>{
        event.preventDefault();
        
        if(!name || !surname || !phone || !email || !emailConfirm ){
          console.log("campos")
            setError('Complete todos los campos para continuar con la compra');
            return;
        }

        if(email !== emailConfirm){
          console.log("email")
            setError('Los email no coinciden');
            return;
        }

        const total= typeof totalPrice === 'number' ? totalPrice : 0;
        
        const order ={
            items: cart.map((product)=>({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.quantity,
            })),
            total:total,
            fecha: new Date(),
            name,
            surname,
            phone,
            email,
        }

        Promise.all(
            order.items.map(async (productOrder) => {
                const db = getFirestore();
                const productRef = doc(db, 'products', productOrder.id)

                const productDoc = await getDoc(productRef);
                const actualStock = productDoc.data().stock;
                await updateDoc(productRef, {
                    stock: actualStock - productOrder.quantity,
                });
            })
        )
        .then(()=>{
            const db = getFirestore();
            addDoc(collection(db, 'orders'), order)
            .then((docRef)=>{
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error)=>{
                console.log('No se pudo crear la orden', error);
                setError('Error en la orden');
            })
        })
        .catch((error)=>{
            console.log('No se puede actualizar el stock', error);
            setError('No se actualizo el stock')
        })

        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setEmailConfirm('');
        setMessage('');
    };
    return (
      <div className='d-flex flex-wrap p-4 justify-content-evenly'>
        <h2 className='w-100 mb-4'>Complete el Formulario</h2>
        <form onSubmit={formProcess} className='form d-flex flex-wrap h-50 p-4'>
          <div className='formInput'>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='formInput'>
            <label>Apellido:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className='formInput'>
            <label>Telefono:</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='formInput'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='formInput'>
            <label>Confirmar Email:</label>
            <input
              type="email"
              value={emailConfirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
            />
          </div>

          {error && <p>{error}</p>}

          {orderId && (
            <div>
              <p>
                ¡GRACIAS POR TU COMPRA! Tu numero de seguimiento es: <br />
                {""} {orderId} {""} <br />
              </p>
              <NavLink to= {"/"}>Regresar al inicio</NavLink>
            </div>
          )}

          <div className='formInput justify-content-center mt-4'>
            <button type="submit" disabled={ totalQuantity==0}>Finalizar Compra</button>
          </div>
        </form>

        <div className="checkoutOrder d-flex flex-wrap justify-content-center">
          <h3 className='w-100'>Orden</h3>

          <div className='d-flex flex-wrap w-100'>
            {cart.map((product)=>(
              <div key={product.id} className='d-flex justify-content-between w-100 p-2'>
                  <img src={product.img} alt={product.title} className='checkoutImg' />
                  <div className='d-flex justify-content-between w-75 align-items-center'>
                  <p>{product.quantity}</p>
                  <p>{''} {product.title}</p>
                  <p>{product.price*product.quantity}</p>
                  </div>
              </div>
            ))}
          </div>

          <div className='d-flex w-100 justify-content-evenly mt-4 fs-5'>
           <p><b>Productos: {totalQuantity} </b></p>
           <p><b>Total: ${totalPrice}</b></p>
          </div>
        </div>
      </div>
    );
}