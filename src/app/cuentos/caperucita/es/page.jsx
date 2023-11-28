import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";


const CaperucitaEs = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex p-6">

                <Link href="/">
                    <Button className="gap-2">Inicio <FaHome /></Button>
                </Link>

                <Link href="/cuentos/caperucita/en">
                    <Button>Inglés</Button>
                </Link>
                <Link href="/cuentos/caperucita/es">
                    <Button>Español</Button>
                </Link>

            </div>
            <audio controls>
                <source src="/mp3/caperucitaES.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <h1>Caperucita Roja</h1>
            <h4>
                <br /><br />
                Había una vez una niña llamada Caperucita Roja, así apodada debido a la capa roja que siempre llevaba puesta. Un día, su madre le pidió que llevara una cesta de alimentos y medicinas a su abuela, que vivía al otro lado del bosque.
                <br /><br />
                La madre advirtió a Caperucita Roja que no hablara con extraños ni se apartara del camino. Pero en su camino, Caperucita Roja se encontró con un lobo astuto que, disfrazado de amabilidad, le preguntó a dónde iba. Caperucita Roja, sin sospechar nada, le reveló su destino y detalles sobre su abuela.
                <br /><br />
                El lobo, deseando comerse a la abuela y a Caperucita Roja, ideó un plan. Engañó a Caperucita Roja al sugerirle que recogiera flores para su abuela y así ganar tiempo para llegar primero a la casa de la abuela. Una vez allí, el lobo se tragó a la abuela y se disfrazó de ella, esperando a Caperucita Roja.
                <br /><br />
                Cuando Caperucita Roja llegó a la casa de su abuela, notó que algo estaba extraño. El lobo, oculto bajo las sábanas, la engañó haciéndola acercarse. Caperucita Roja, confundida por la apariencia de su abuela, hizo preguntas sobre su aspecto extraño. El lobo finalmente reveló su verdadera identidad y saltó sobre Caperucita Roja.
                <br /><br />
                En algunas versiones del cuento, un leñador escuchó los gritos de Caperucita Roja y corrió a rescatarla. En otras versiones, Caperucita Roja y su abuela son rescatadas por el leñador antes de que el lobo las lastime. De cualquier manera, el lobo es derrotado y Caperucita Roja y su abuela están a salvo.
                <br /><br />
                El cuento de Caperucita Roja es una advertencia sobre los peligros de hablar con extraños y la importancia de seguir las instrucciones de los adultos. También refleja la idea de que la apariencia puede ser engañosa y que es crucial ser cauteloso en situaciones desconocidas.
                <br />FIN<br />
            </h4>
        </div>
    );
}

export default CaperucitaEs;