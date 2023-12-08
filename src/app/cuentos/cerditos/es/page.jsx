import Link from "next/link";
import { Button } from "@/components/ui/button";
import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";
const Cerditos = () => {
    return (
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center">
                    <TypographyH1 texto="Los Tres Cerditos"/>
                    <Imagen src="/image/2.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/cerditosES.mp3" />
                </div>
            </div>
            </div>

            
            <h4>

                <br /><br />
                Había una vez tres cerditos que vivían con su mamá en el bosque. Los tres cerditos eran hermanos, pero eran muy diferentes entre sí. El mayor era trabajador y siempre se esforzaba por hacer las cosas bien. El mediano era un poco más perezoso, pero también trabajaba duro. El más pequeño, en cambio, era juguetón y prefería divertirse todo el tiempo.
                <br /><br />
                Un día, la mamá de los cerditos les dijo que ya era hora de que salieran a construir sus propias casas y que fueran responsables de sí mismos. Los tres hermanos decidieron ir en diferentes direcciones y construir sus casas.
                <br /><br />
                El cerdito más pequeño no quería perder tiempo construyendo una casa, así que construyó la suya de paja muy rápidamente. Después de terminarla, se sentó frente a su casa y comenzó a tocar la flauta, creyendo que ya estaba a salvo.
                <br /><br />
                El cerdito mediano trabajó un poco más y construyó su casa con madera. Pensó que sería lo suficientemente fuerte para protegerlo de cualquier peligro. Una vez que terminó, se puso a descansar dentro de su nueva casa.
                <br /><br />
                El cerdito mayor fue el más sensato de todos. Sabía que construir una casa llevaba tiempo y esfuerzo, así que decidió construir la suya con ladrillos. Sabía que sería la más resistente y segura de todas.
                <br /><br />
                Pero mientras los cerditos trabajaban en sus casas, un lobo malvado acechaba cerca. El lobo estaba hambriento y quería comerse a los cerditos. Primero, fue a la casa de paja del cerdito más pequeño y le pidió que le abriera la puerta.
                <br /><br />
                El cerdito más pequeño, asustado, le dijo que no podía abrir la puerta porque era demasiado pequeña. El lobo, enojado, sopló con fuerza y la casa de paja se derrumbó en un instante. El cerdito corrió hacia la casa de madera del cerdito mediano para buscar refugio.
                <br /><br />
                El lobo persiguió al cerdito hasta la casa de madera y le pidió que le abriera la puerta también. Pero el cerdito mediano le respondió que no podía abrir la puerta porque era demasiado pequeña. El lobo sopló con más fuerza y la casa de madera también se derrumbó.
                <br /><br />
                Asustados, los dos cerditos corrieron hacia la casa de ladrillos del cerdito mayor. El lobo los siguió y les pidió que le abrieran la puerta, pero el cerdito mayor le respondió que no podía abrir la puerta porque era demasiado pequeña.
                <br /><br />
                El lobo sopló con todas sus fuerzas una y otra vez, pero la casa de ladrillos era tan fuerte que no pudo derribarla. El lobo finalmente se dio por vencido y se marchó, jurando vengarse.
                <br /><br />
                Los tres cerditos aprendieron una valiosa lección. El trabajo duro y la planificación valen la pena, y es importante ser responsable y hacer las cosas bien. Desde entonces, vivieron felices y seguros en su casa de ladrillos, cuidándose mutuamente y disfrutando de la vida en el bosque.
                <br /><span>FIN</span><br />
            </h4>
        </div>
    );
}

export default Cerditos;