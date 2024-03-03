import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";

const PatitoEs = () => {
    return (
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center ">
                    <TypographyH1 texto="El Patito Feo"/>
                    <Imagen src="/image/3.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/patitoES.mp3" />
                </div>
            </div>
            </div>
            <h4>
                <br /><br />
                Había una vez una pata que vivía en un hermoso estanque con otros patos y animales. Un día, esta pata puso un huevo, y cuando nació el patito, todos quedaron sorprendidos. Era diferente a los demás patitos; era más grande, desgarbado y tenía plumaje gris y feo.
                <br /><br />
                Los otros patitos y animales se burlaban de él y lo llamaban El patito feo. El patito feo se sintió muy triste y rechazado, pensando que nunca encajaría en ese lugar.
                <br /><br />
                Un día, el patito decidió huir del estanque y buscar un lugar donde se sintiera aceptado. Viajó por el campo y se encontró con diferentes animales, pero todos lo rechazaron debido a su aspecto.
                <br /><br />
                El invierno llegó, y el patito feo pasó muchas dificultades para sobrevivir al frío. Finalmente, encontró un gran lago que estaba completamente congelado. Un grupo de hermosos cisnes nadaba en él, y el patito se sintió atraído por su elegancia y belleza.
                <br /><br />
                El patito decidió acercarse al lago y mirarse en el hielo. Para su sorpresa, cuando vio su reflejo, notó que ya no era un patito feo, sino que se había convertido en un cisne hermoso y majestuoso. Resultó que no era un patito feo, sino que siempre había sido un cisne real.
                <br /><br />
                Los cisnes del lago lo aceptaron con cariño y se convirtió en parte de su grupo. El patito feo finalmente encontró su lugar, y nunca más se sintió solo o rechazado.
                <br /><br />
                El cuento del patito feo nos enseña que la belleza va más allá del aspecto físico y que el valor real de una persona radica en su interior y en cómo se siente consigo misma. A veces, la diferencia y la dificultad pueden llevarnos a descubrir nuestro verdadero potencial y encontrar nuestro lugar en el mundo.</h4>
            <br /><br />
        </div>
    );
}

export default PatitoEs;