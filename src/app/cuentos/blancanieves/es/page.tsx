import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";


const BlancanievesEs = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center">
                    <TypographyH1 texto="Blancanieves"/>
                    <Imagen src="/image/1.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/blancaES.mp3" />
                </div>
            </div>
            <h4>
                <br /><br />
                Había una vez, en un lejano reino, una hermosa princesa llamada Blancanieves. Ella vivía feliz con su padre, el rey, hasta que una malvada y envidiosa reina se convirtió en su madrastra.
                <br /><br />
                La malvada madrastra tenía un espejo mágico que le decía que ella era la más hermosa de todas. Pero un día, el espejo reveló que ahora Blancanieves era la más hermosa del reino, lo que enfureció a la reina.
                <br /><br />
                La malvada reina ordenó a su cazador llevar a Blancanieves al bosque y deshacerse de ella para siempre. Pero el corazón noble del cazador no pudo hacerle daño a la dulce princesa, así que la dejó escapar y le advirtió que se escondiera en el bosque.
                <br /><br />
                Blancanieves se encontró sola en el bosque, pero pronto descubrió una pequeña casa, que pertenecía a siete adorables enanitos. Ellos la acogieron con cariño y desde ese día, vivieron juntos como una gran familia.
                <br /><br />
                Mientras tanto, la malvada madrastra descubrió que Blancanieves seguía viva, y decidida a acabar con ella, preparó una manzana envenenada. Disfrazada de una anciana, la reina engañó a Blancanieves y le ofreció la manzana. La princesa, inocente y confiada, dio un mordisco a la manzana y cayó en un profundo sueño.
                <br /><br />
                Los siete enanitos, al encontrar a Blancanieves inmóvil, se llenaron de tristeza. Pero un valiente príncipe, que había estado buscando a la princesa, llegó al bosque y la encontró dormida. Al besarla con amor, el hechizo se rompió, y Blancanieves despertó.
                <br /><br />
                La malvada reina, al enterarse de que Blancanieves seguía viva, preparó un plan para destruirla, pero sus malvados planes fracasaron. Blancanieves, los enanitos y el príncipe se unieron y enfrentaron a la malvada reina, quien finalmente fue castigada por sus maldades.
                <br /><br />
                Desde entonces, Blancanieves vivió feliz junto al príncipe y los siete enanitos en el castillo. Y así, el amor, la amistad y la bondad triunfaron en este cuento de hadas, demostrando que siempre hay un final feliz para aquellos que tienen un corazón puro y noble.
                <br /><span>FIN</span><br />
            </h4>
        </div>

    );
}

export default BlancanievesEs;