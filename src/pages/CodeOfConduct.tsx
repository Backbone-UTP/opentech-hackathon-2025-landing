import MainLayout from '../components/MainLayout';

const CodeOfConduct = () => (
    <MainLayout>
        <div className="text-white p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Código de Conducta de OpenTech Hackathon 2025</h1>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Introducción 📝</h2>
                    <p className="text-[#9eb7a8]">
                        Nuestro objetivo es proporcionar una experiencia libre de acoso para todos, independientemente de su género, identidad y expresión de género, orientación sexual, discapacidad, apariencia física, tamaño corporal, raza, religión (o falta de ella), o elección de tecnología. No toleramos el acoso de los participantes en ninguna forma. Los participantes que violen estas reglas pueden ser sancionados o expulsados del evento a discreción de los organizadores.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Comportamiento Esperado 🌟</h2>
                    <ul className="list-disc list-inside space-y-2 text-[#9eb7a8]">
                        <li><span className="font-bold">Sé Respetuoso:</span> Trata a todos con respeto. Participa de manera auténtica y activa. Al hacerlo, contribuyes al bienestar de la comunidad.</li>
                        <li><span className="font-bold">Comunicación Constructiva:</span> Ejercita la comunicación abierta y acogedora. Sé considerado con las diferentes perspectivas y experiencias.</li>
                        <li><span className="font-bold">Colaboración:</span> Fomenta un entorno de colaboración y trabajo en equipo. Comparte tus conocimientos y ayuda a los demás.</li>
                        <li><span className="font-bold">Respeta los Espacios:</span> Respeta los diferentes espacios de colaboración y las necesidades de los demás. Evita interrupciones innecesarias.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Comportamiento Inaceptable 🚫</h2>
                    <ul className="list-disc list-inside space-y-2 text-[#9eb7a8]">
                        <li><span className="font-bold">Acoso:</span> Cualquier forma de acoso no será tolerada, incluyendo comentarios ofensivos relacionados con género, identidad y expresión de género, orientación sexual, discapacidad, apariencia física, tamaño corporal, raza, religión, o elección de tecnología.</li>
                        <li><span className="font-bold">Violencia y Amenazas:</span> No se tolerarán amenazas de violencia ni lenguaje violento.</li>
                        <li><span className="font-bold">Discriminación:</span> Evita cualquier comportamiento discriminatorio. Todos son bienvenidos y deben sentirse seguros y valorados.</li>
                        <li><span className="font-bold">Interrupciones:</span> No interrumpas ni monopolices las conversaciones. Permite que todos tengan la oportunidad de participar y ser escuchados.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Resolución de Conflictos 🔧</h2>
                    <ul className="list-disc list-inside space-y-2 text-[#9eb7a8]">
                        <li><span className="font-bold">Habla Directamente:</span> Si alguien te hace sentir incómodo, intenta hablar con esa persona directamente, si te sientes seguro haciéndolo.</li>
                        <li><span className="font-bold">Contacta a los Organizadores:</span> Si prefieres no hablar directamente con la persona o si la situación no mejora, contacta a uno de los organizadores. Ellos están aquí para ayudar y tomarán las medidas apropiadas.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Consecuencias de Comportamiento Inaceptable ⚖️</h2>
                    <ul className="list-disc list-inside space-y-2 text-[#9eb7a8]">
                        <li><span className="font-bold">Advertencia:</span> Una advertencia verbal sobre el comportamiento inapropiado.</li>
                        <li><span className="font-bold">Expulsión Temporal:</span> El participante puede ser expulsado temporalmente del evento.</li>
                        <li><span className="font-bold">Expulsión Permanente:</span> En casos graves o repetidos, el participante puede ser expulsado permanentemente del evento.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Contacto 📞</h2>
                    <p className="text-[#9eb7a8]">Si necesitas reportar un incidente o necesitas asistencia, por favor contacta a los organizadores:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#9eb7a8] mt-2">
                        <li><span className="font-bold">Andrés Prieto:</span> <a href="mailto:ing.andres.m.prieto@gmail.com" className="text-[#1dc962] hover:underline">ing.andres.m.prieto@gmail.com</a></li>
                        <li><span className="font-bold">Sergio Estrella:</span> <a href="mailto:sergio.estrella@utp.edu.co" className="text-[#1dc962] hover:underline">sergio.estrella@utp.edu.co</a></li>
                        <li><span className="font-bold">Nathalia Gonzalez:</span> <a href="mailto:nathalia@elcinco.io" className="text-[#1dc962] hover:underline">nathalia@elcinco.io</a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#1dc962]">Agradecimientos 🙏</h2>
                    <p className="text-[#9eb7a8]">
                        Agradecemos a todos por ayudar a crear un evento acogedor y seguro para todos. Juntos, podemos construir una comunidad inclusiva y colaborativa.
                    </p>
                </section>

                <p className="text-center text-lg font-bold mt-8">¡Gracias por tu cooperación y disfruta del evento! 🎉🚀</p>
            </div>
        </div>
    </MainLayout>
);

export default CodeOfConduct;
