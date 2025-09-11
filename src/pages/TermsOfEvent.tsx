import MainLayout from "../components/MainLayout";

const TermsOfEvent = () => (
    <MainLayout>
        <div className="text-white p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Términos del Evento OpenTech Hackathon 2025</h1>

            <div className="space-y-6">
                <p className="text-center text-[#9eb7a8]">
                    Al registrarte en la OpenTech Hackathon 2025, aceptas los siguientes lineamientos:
                </p>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Respeto y Convivencia 🤝</h2>
                    <p className="text-[#9eb7a8]">
                        Todas las personas participantes, mentores, jurados y organizadores deben mantener un ambiente inclusivo, respetuoso y libre de discriminación. No se tolerarán actitudes de acoso, violencia o falta de respeto.
                    </p>
                    <p className="text-[#9eb7a8]">
                        Se espera que todos los participantes sigan el <a href="/code-of-conduct" className="text-[#1dc962] hover:underline">Código de Conducta</a> del evento.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Propiedad Intelectual 💡</h2>
                    <p className="text-[#9eb7a8]">
                        Los proyectos desarrollados durante la hackathon permanecerán como propiedad de los equipos. Sin embargo, el código y entregables deberán liberarse bajo la licencia MIT, lo que permite que cada equipo conserve la autoría y, al mismo tiempo, ofrezca apertura para que la comunidad pueda reutilizar y mejorar el trabajo.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Uso de Tecnologías 💻</h2>
                    <p className="text-[#9eb7a8]">
                        Se incentiva la innovación mediante el uso de Blockchain (Avalanche) y/o Inteligencia Artificial (IA), pero la elección final corresponde al equipo.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Transparencia en la Evaluación 📊</h2>
                    <p className="text-[#9eb7a8]">
                        Los proyectos serán evaluados con base en 4 KPIs: innovación, uso de IA, uso de Blockchain (Avalanche) y claridad en la presentación final o Pitch. Tenga en cuenta que cada KPI tendrá un peso sobre la decisión del jurado y los premios a los que podrá optar.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Derechos de Imagen 📸</h2>
                    <p className="text-[#9eb7a8]">
                        Al inscribirte, autorizas el uso de tu imagen en fotografías, grabaciones y materiales de comunicación del evento.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Condiciones de Participación 📝</h2>
                    <ul className="list-disc list-inside space-y-2 text-[#9eb7a8]">
                        <li>Cada persona debe participar en un solo equipo.</li>
                        <li>Se espera asistencia y compromiso durante toda la jornada (7:30 a.m. – 5:00 p.m.).</li>
                        <li>Los equipos deberán entregar un prototipo funcional y realizar un pitch de máximo 5 minutos ante el jurado.</li>
                    </ul>
                </section>
            </div>
        </div>
    </MainLayout>
);

export default TermsOfEvent;
