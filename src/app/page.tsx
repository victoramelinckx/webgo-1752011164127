
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con nuestra web lista en un día y soporte constante." cta1="Transforma Tu Negocio" />
<How step1Title="Comparte tu visión" step1Desc="Cuéntanos sobre tu negocio en minutos." step2Title="Web en 24 horas" step2Desc="Creamos tu sitio de ventas rápidamente." step3Title="Soporte 24/7" step3Desc="Asistencia continua para maximizar tus ventas online." />
<Aboutus headline="WebGo: Tu Tienda Online Simplificada" subheadline="Digitalizamos ventas y gestionamos tu web sin complicaciones ni tiempo perdido." beneficiotitulo1="Gestión Total" beneficio1="Olvídate del trabajo web diario." beneficiotitulo2="Ventas Aumentadas" beneficio2="Transformamos recomendaciones en ventas digitales." />
<Services heading="Impulsa Tu Negocio al Mundo Digital" description="Transformamos tus recomendaciones en ventas online, sin complicaciones." services={[{"name":"Desarrollo Web Rápido","icon":"rocket","description":"Tu tienda online en menos de 24 horas."},{"name":"SEO Optimizado","icon":"search","description":"Atraemos más clientes con SEO efectivo."},{"name":"Gestión Completa","icon":"gear","description":"Nos encargamos de todo el sitio web."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita las ventas con opciones de pago."},{"name":"Marketing Digital","icon":"megaphone","description":"Impulsa tu presencia con estrategias digitales."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en impresionantes realidades digitales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio?","respuesta":"WebGo se especializa en crear sitios web fáciles de usar que te ayudan a vender en línea. Nos encargamos de todo para que puedas concentrarte en tu negocio."},{"pregunta":"¿Qué beneficios obtengo al usar WebGo para mis ventas online?","respuesta":"Con WebGo, tendrás un sitio web que atrae a más clientes y aumenta tus ventas. Nos ocupamos del diseño, mantenimiento y optimización para que no tengas que preocuparte por nada."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo soluciona WebGo este problema?","respuesta":"Nuestro equipo de WebGo gestiona todo por ti, desde la creación hasta el mantenimiento del sitio web, permitiéndote centrarte en lo que haces mejor: dirigir tu negocio."},{"pregunta":"¿Qué pasa si no sé nada sobre ventas online?","respuesta":"No te preocupes, en WebGo ayudamos a propietarios de negocios como tú a entender y aprovechar el potencial de las ventas online, con herramientas y soporte fáciles de usar."},{"pregunta":"¿Puede WebGo ayudarme si solo vendo por recomendación?","respuesta":"Sí, WebGo transforma tus recomendaciones en ventas online efectivas. Diseñamos tu sitio para atraer nuevos clientes y expandir tu alcance más allá del boca a boca."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio con Ventas Online" 
                      description="Con WebGo, digitaliza tus ventas y alcanza nuevos clientes sin complicaciones. No más depender solo de recomendaciones: ¡contáctanos y crece sin límites!"
                      formPostUrl="/api/contact-us"
                      projectId="72Ec9DeZ3tRazvjZr4PmjYVTMPn2"
                    />
<Footer />
    </main>
  );
}
