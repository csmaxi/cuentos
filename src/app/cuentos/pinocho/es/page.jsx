import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";


const PinochoEs = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex p-6">

                <Link href="/">
                    <Button className="gap-2">Inicio <FaHome /></Button>
                </Link>

                <Link href="/cuentos/pinocho/en">
                    <Button>Inglés</Button>
                </Link>
                <Link href="/cuentos/pinocho/es">
                    <Button>Español</Button>
                </Link>

            </div>
            <audio controls>
                <source src="/mp3/pinochoES.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <h1>Pinocho</h1>

            <h4>
                <br /><br />
                Había una vez un carpintero llamado Geppetto, quien vivía solo y deseaba tener un hijo. Un día, decidió tallar un muñeco de madera con forma de niño al que llamó Pinocho. Mientras tallaba el muñeco, algo mágico sucedió: Pinocho cobró vida y comenzó a moverse y hablar como un niño de verdad, pero todavía conservaba su forma de madera.
                <br /><br />
                Geppetto estaba emocionado y feliz de tener a Pinocho como su hijo, pero pronto se dio cuenta de que Pinocho tenía una naturaleza traviesa y tendía a meterse en problemas. Pinocho tenía una debilidad por decir mentiras, y cada vez que lo hacía, su nariz crecía. El Hada Azul, que había observado la creación de Pinocho, le advirtió que si quería convertirse en un niño de verdad, debía demostrar que era valiente, honesto y amable.
                <br /><br />
                Pinocho se embarcó en diversas aventuras, pero en su camino a la escuela, fue tentado por el astuto Zorro y el Gato, quienes lo convencieron de ir a un teatro de marionetas en lugar de ir a la escuela. Allí, el malvado titiritero Mangiafuoco lo atrapó y lo convirtió en un burro para venderlo. Pinocho finalmente escapó, pero sufriendo las consecuencias de sus acciones.
                <br /><br />
                A lo largo de su viaje, Pinocho se encontró con el Hada Azul varias veces, quien lo ayudó en momentos de dificultad. Pinocho intentó ser bueno, pero seguía cayendo en trampas y desobedeciendo las advertencias del Hada. En un momento dado, incluso fue tragado por una ballena gigante mientras buscaba a Geppetto, pero logró sobrevivir junto a su padre.
                <br /><br />
                Después de enfrentar varias pruebas y superar desafíos, Pinocho finalmente demostró su valentía y desinterés al rescatar a Geppetto de la barriga de la ballena. Como recompensa por sus acciones, el Hada Azul convirtió a Pinocho en un niño de verdad, liberándolo de su forma de madera. Pinocho había aprendido la importancia de la honestidad, la bondad y la obediencia.
                <br /><br />
                El cuento de Pinocho es una historia sobre la importancia de ser honesto, valiente y amable, así como sobre las consecuencias de nuestras acciones. A través de sus aventuras, Pinocho pasó de ser un muñeco travieso a un niño de verdad que aprendió valiosas lecciones sobre la vida y el comportamiento adecuado.</h4>
            <br />FIN<br />



        </div>
    );
}

export default PinochoEs;