export default function Contact() {
  return (
    <section id="contacto" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <a href="mailto:info@tresarquitectura.com" className="text-white text-xl font-bold">info@tresarquitectura.com</a>
          </div>
          <div className="text-center">
            <a href="https://wa.me/5491140387281" className="text-white text-xl font-bold">+54 9 11 4038-7281</a>
          </div>
          <div className="text-center">
            <a href="https://wa.me/5491158508647" className="text-white text-xl font-bold">+54 9 11 5850-8647</a>
          </div>
          <div className="text-center">
            <span className="text-white text-xl font-bold">Rodriguez Peña 505, Banfield, Bs As, Argentina</span>
          </div>
          <div className="flex gap-8 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wa.me/5491140387281" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

