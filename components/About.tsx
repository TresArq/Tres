export default function About() {
  const aboutItems = [
    {
      title: "SERIEDAD Y COMPROMISO",
      description: "Hacemos de tu idea, lote o propiedad un negocio rentable. realizando estudios de viabilidad, costos de desarrollo, diseño del proyecto y construcción de la obra.",
      backgroundImage: "/imgAttachment/banner1.png"
    },
    {
      title: "CALIDAD Y DISEÑO",
      description: "Desarrollamos con foco en productos y propuestas que mejoren la calidad de vida de las personas, desde la innovación y la sustentabilidad, generando valor agregado que maximiza la rentabilidad de los proyectos.",
      backgroundImage: "/imgAttachment/banner2.png"
    },
    {
      title: "EXPERIENCIA JOVEN",
      description: "Somos una empresa dinámica y flexible, comprometida con la eficiencia de nuestros procesos, adecuándonos a las necesidades del mercado, la innovación y la tecnología.",
      backgroundImage: "/imgAttachment/banner3.png"
    }
  ]

  return (
    <section id="nosotros" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8">
          {aboutItems.map((item, index) => (
            <div key={index} className="relative p-12 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

