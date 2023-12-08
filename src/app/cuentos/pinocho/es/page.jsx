import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";

const PinochoEs = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center">
                    <TypographyH1 texto="Pinocho"/>
                    <Imagen src="/image/4.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/pinochoES.mp3" />
                </div>
            </div>
            </div>

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