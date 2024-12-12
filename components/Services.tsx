export default function Services() {
  const services = [
    {
      title: "ARQUITECTURA",
      description: "Nuestro equipo de profesionales se encarga de diseñar proyectos de alta calidad, para lograr el maximo rendimiento en tu inversión, óptimizando costos y recursos. Trabajamos desde la visión de la arquitectura moderna, haciendo foco en las necesidades del cliente.",
      details: "ANTEPROYECTO │ PROYECTO │ DOCUMENTACIÓN │ DIRECCIÓN DE OBRA"
    },
    {
      title: "+",
      description: "Como valor agregado te brindamos herramientas para facilitarte la comunicación y comercialización generando Material Multimedia de los Proyectos.",
      details: "RENDERS FOTORREALISTAS │ RECORRIDOS VIRTUALES │ PAGINAS WEB │ PRESENTACIONES DIGITALES"
    },
    {
      title: "DESARROLLO",
      description: "Realizamos todos los estudios relativos a la viabilidad arquitectónica y comercial del proyecto, para descubrir si su creación es factible y si se trata de un proyecto rentable. Realizamos la búsqueda del lote o propiedad, diseñamos el proyecto, gestionamos los aspectos legales, economicos y ejecutamos la construcción.",
      details: "FACTIBILIDAD │ GESTIÓN INTEGRAL │ MODELO E IMPLEMENTACIÓN DE NEGOCIO │ LEGALES"
    }
  ]

  return (
    <section id="servicios" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-3xl font-black text-white mb-4">{service.title}</h3>
              <p className="text-white mb-6">{service.description}</p>
              <p className="text-white font-bold pt-6 border-t border-gray-700">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

