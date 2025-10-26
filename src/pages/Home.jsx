import React, { useState } from 'react'
import '../styles/Home.css'
import PaymentModal from '../components/PaymentModal'
import bannerImage from '../assets/smmbanner.png'; // Ensure this path is correct


export default function Home() {
    const [isPaymentOpen, setIsPaymentOpen] = useState(false)

    return (
        <>
            <section className="container__banner">
                <h1 className="banner__title">Super Mendoza's Market</h1>
                <figure className="banner__image">
                    <img src={bannerImage} alt="Banner Nature Image" />
                </figure>
                <h2 className="banner__subtitle">
                    Compra como hombre, ahorra como leyenda con Super Mendoza's Market!
                </h2>
                <div className="banner__container-button">
                    <button
                        type="button"
                        className="banner__button"
                        id='button_a'
                        onClick={() => setIsPaymentOpen(true)}
                    >
                        Saber Más
                    </button>
                </div>
            </section>

            <PaymentModal
                open={isPaymentOpen}
                onClose={() => setIsPaymentOpen(false)}
                amount={19.99}
                productName="Super Mendoza's Market - Suscripción"
            />
        </>
    )
}
