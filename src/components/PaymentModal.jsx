import React, { useState } from 'react'
import '../styles/PaymentModal.css'
import Yape from '../assets/yape.png'
import Visa from '../assets/visa.png'
import Nequi from '../assets/nequi.png'
import Bdv from '../assets/venezuela.png'
import Rusia from '../assets/rusia.png'

export default function PaymentModal({ open, onClose, productName = '', amount = 0 }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [card, setCard] = useState('')
  const [processing, setProcessing] = useState(false)

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setProcessing(true)
    // Simular procesamiento
    setTimeout(() => {
      alert(`Pago simulado: $${amount} — Gracias ${name || 'cliente'}`)
      setProcessing(false)
      onClose()
    }, 900)
  }

  return (
    <div className="pm-overlay" role="dialog" aria-modal="true">
      <div className="pm-modal">
        <button className="pm-close" onClick={onClose} aria-label="Cerrar">×</button>
        <h2 className="pm-title">Pagar</h2>
        <p className="pm-sub">{productName} — Monto: ${amount}</p>

        <form className="pm-form" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />

          <label>Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" />

          <label>Número de tarjeta</label>
          <input required value={card} onChange={(e) => setCard(e.target.value)} placeholder="#### #### #### ####" />

          <div className="pm-payment-methods">
            <p>Métodos de pago aceptados:</p>
          <img className="pm-yape" src={Yape} alt="Yape" />
          <img className='pm-nequi' src={Nequi} alt="Visa" />
          <img className='pm-visa' src={Visa} alt="Nequi" />
          <img className='pm-bvd' src={Bdv} alt="Banco De Venezuela" />
          <img className='pm-rusia' src={Rusia} alt="" />
          </div>

          <div className="pm-actions">
            <button type="button" className="pm-cancel" onClick={onClose} disabled={processing}>Cancelar</button>
            <button type="submit" className="pm-pay" disabled={processing}>{processing ? 'Procesando...' : `Pagar $${amount}`}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
