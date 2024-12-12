import { Montserrat } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'Tres Arquitectura',
  description: 'Servicios de arquitectura y desarrollo de proyectos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgAttachment/IconoTresNegro.png" type="image/png" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}

