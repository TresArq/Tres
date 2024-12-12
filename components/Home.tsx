import Image from 'next/image'

export default function Home() {
  return (
    <section id="home" className="relative bg-black min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Image src="/imgAttachment/Home.jpg" alt="Home Background" layout="fill" objectFit="cover" quality={100} />
      <div className="relative z-10">
        <Image src="/imgAttachment/TRES_Logo.png" alt="TRES Arquitectura" width={400} height={200} className="max-w-[400px] w-4/5" />
      </div>
    </section>
  )
}

