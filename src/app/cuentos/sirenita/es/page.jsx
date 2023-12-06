import Link from "next/link";
import { Button } from "@/components/ui/button";



const SirenitaEs = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex ">

               

                <Link href="/cuentos/sirenita/en">
                    <Button>Inglés</Button>
                </Link>
                <Link href="/cuentos/sirenita/es">
                    <Button>Español</Button>
                </Link>

            </div>
            <audio controls>
                <source src="/mp3/sirenitaES.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <h1>La sirenita</h1>
            <h4>
                <br /><br />
                Había una vez, en el fondo del océano, una joven y hermosa sirena llamada Ariel. Ella vivía en un reino submarino junto a su padre, el rey Tritón, y sus hermanas sirenas. Ariel era curiosa y soñaba con explorar el mundo de la superficie, a pesar de las advertencias de su padre sobre los peligros de los humanos.
                <br /><br />
                Un día, mientras Ariel exploraba un naufragio en la superficie, vio a un príncipe humano llamado Eric. Se enamoró de él al instante, pero una tormenta repentina causó que Eric cayera al agua y Ariel lo rescató, llevándolo a la orilla antes de desaparecer. Ariel deseaba desesperadamente ser humana para estar con Eric, y estaba dispuesta a hacer cualquier cosa para lograrlo.
                <br /><br />
                La malvada bruja del mar, Úrsula, notó los deseos de Ariel y le ofreció un trato. Úrsula le daría piernas humanas a cambio de su hermosa voz. Ariel aceptó el trato y se convirtió en humana, pero perdió su voz en el proceso. Tenía tres días para conseguir un beso de amor verdadero de Eric; de lo contrario, se convertiría en propiedad de Úrsula.
                <br /><br />
                Ariel llegó a la costa y Eric la encontró. Aunque no podía hablar, logró ganarse su afecto. Sin embargo, Úrsula, disfrazada como una joven hermosa llamada Vanessa, hechizó a Eric para que se enamorara de ella. Ariel y sus amigos, Flounder y Sebastian, lucharon contra Úrsula para salvar a Eric. Finalmente, con la ayuda de su padre, el rey Tritón, Ariel recuperó su voz y derrotó a Úrsula.
                <br /><br />
                Eric y Ariel se reunieron y se besaron, rompiendo el hechizo. Ariel debatió si quedarse con Eric o volver al océano, pero finalmente eligió quedarse con Eric y vivir como humana. El rey Tritón aceptó su elección y la transformó en humana permanentemente. Aunque tuvo que sacrificar su voz, Ariel encontró el amor y la felicidad que tanto anhelaba.
                <br /><br />
                El cuento de La Sirenita es una historia de amor, sacrificio y la búsqueda de la identidad. Ariel aprende valiosas lecciones sobre las consecuencias de sus decisiones y la importancia de ser uno mismo. La historia explora temas de superar obstáculos y luchar por lo que se desea, así como la idea de que el amor verdadero trasciende las diferencias.
                <br /><span>FIN</span><br />
            </h4>
        </div>
    );
}

export default SirenitaEs;