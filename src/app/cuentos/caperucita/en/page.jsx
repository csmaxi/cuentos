import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";


const CaperucitaEn = () => {
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
                <source src="/mp3/caperucitaEN.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <h1>Little Red Riding Hood</h1>
            <h4>
                <br /><br />
                Once upon a time, there was a girl named Little Red Riding Hood, named after the red cape she always wore. One day, her mother asked her to take a basket of food and medicine to her grandmother, who lived on the other side of the woods.
                <br /><br />
                The mother warned Little Red Riding Hood not to talk to strangers or stray from the path. But on her way, Little Red Riding Hood encountered a cunning wolf who, disguised as friendliness, asked her where she was going. Little Red Riding Hood, unsuspecting, revealed her destination and details about her grandmother.
                <br /><br />
                The wolf, wishing to eat both the grandmother and Little Red Riding Hood, devised a plan. He tricked Little Red Riding Hood by suggesting that she pick flowers for her grandmother, buying time to reach the grandmother&apos;s house first. Once there, the wolf swallowed the grandmother and disguised himself as her, waiting for Little Red Riding Hood.
                <br /><br />
                When Little Red Riding Hood arrived at her grandmother&apos;s house, she noticed something was odd. The wolf, hidden under the sheets, deceived her by making her come closer. Little Red Riding Hood, confused by her grandmother&apos;s strange appearance, asked questions about her unusual looks. The wolf eventually revealed his true identity and pounced on Little Red Riding Hood.
                <br /><br />
                In some versions of the story, a woodcutter heard Little Red Riding Hood&apos;s screams and rushed to rescue her. In other versions, Little Red Riding Hood and her grandmother are saved by the woodcutter before the wolf can harm them. Either way, the wolf is defeated, and Little Red Riding Hood and her grandmother are safe.
                <br /><br />
                The story of Little Red Riding Hood is a cautionary tale about the dangers of talking to strangers and the importance of following adults&apos; instructions. It also reflects the idea that appearances can be deceptive and that it is crucial to be cautious in unfamiliar situations
                <br /><span>END</span><br />
            </h4>
        </div>
    );
}

export default CaperucitaEn;