import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";


const LiebreEs = () => {
    return (
        <div className="flex flex-col items-center">
           <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center ">
                    <TypographyH1 texto="La Liebre y la Tortuga"/>
                    <Imagen src="/image/5.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/liebreES.mp3" />
                </div>
            </div>
            </div>
            <h4>
                <br /><br />
                Había una vez una liebre y una tortuga que vivían en el mismo bosque. La liebre era muy orgullosa y siempre se burlaba de la lentitud de la tortuga. Se jactaba de ser la más rápida y presumía de su velocidad constantemente. La tortuga, en cambio, era tranquila y paciente, no le importaban las burlas de la liebre y seguía con su paso lento pero constante.
                <br /><br />
                Un día, la liebre no pudo contener su arrogancia y se burló nuevamente de la tortuga, diciendo que incluso durmiendo ganaría una carrera contra ella. La tortuga, tranquila como siempre, le propuso una carrera a la liebre. La liebre aceptó de inmediato, segura de que ganaría fácilmente.
                <br /><br />
                La noticia de la carrera se extendió rápidamente por el bosque, y muchos animales se reunieron para ver el enfrentamiento entre la liebre y la tortuga. La liebre se rió de la tortuga y se adelantó rápidamente desde el principio. Viendo que tenía una ventaja, decidió tomar una siesta en medio de la carrera, convencida de que podría despertar y aún ganar fácilmente.
                <br /><br />
                Mientras tanto, la tortuga continuó avanzando lentamente pero sin detenerse. No se distrajo con las risas y los comentarios de los otros animales. Un paso a la vez, avanzaba constantemente hacia la meta. Cuando la liebre finalmente se despertó de su siesta y corrió hacia la meta, se sorprendió al descubrir que la tortuga estaba a punto de cruzarla.
                <br /><br />
                La tortuga ganó la carrera, dejando a todos asombrados. La liebre se sintió avergonzada y humillada por su arrogancia y su actitud presumida. Aprendió la lección de que la constancia y la paciencia pueden llevar al éxito, incluso si no se es el más rápido. La tortuga demostró que la perseverancia y el esfuerzo constante son valiosos, y que la prisa y la arrogancia no siempre conducen al triunfo.
                <br /><br />
                El cuento de La Liebre y la Tortuga enseña la importancia de la humildad, la constancia y la perseverancia, y cómo el exceso de confianza puede llevar a la derrota.
                <br /><span>FIN</span><br />
            </h4>
        </div>
    );
}

export default LiebreEs;