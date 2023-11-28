import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";


const LiebreEn = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex p-6">

                <Link href="/">
                    <Button className="gap-2">Inicio <FaHome /></Button>
                </Link>

                <Link href="/cuentos/liebre/en">
                    <Button>Inglés</Button>
                </Link>
                <Link href="/cuentos/liebre/es">
                    <Button>Español</Button>
                </Link>

            </div>
            <audio controls>
                <source src="/mp3/liebreEN.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <h1>
                The Hare and the Tortoise
            </h1>
            <h4>
                <br /><br />
                Once upon a time, there was a hare and a tortoise who lived in the same forest. The hare was very proud and always made fun of the tortoise&apos;s slowness. It boasted about being the fastest and constantly bragged about its speed. The tortoise, on the other hand, was calm and patient, unaffected by the hare&apos;s taunts, and continued with its slow but steady pace.
                <br /><br />
                One day, the hare couldn&apos;t contain its arrogance and mocked the tortoise again, claiming that it could even win a race against her while sleeping. The tortoise, as composed as ever, proposed a race to the hare. The hare immediately agreed, confident that it would win easily.
                <br /><br />
                The news of the race spread quickly through the forest, and many animals gathered to witness the showdown between the hare and the tortoise. The hare laughed at the tortoise and quickly surged ahead from the start. Seeing it had an advantage, the hare decided to take a nap in the middle of the race, convinced it could wake up and still win easily.
                <br /><br />
                Meanwhile, the tortoise continued moving slowly but steadily. It wasn&apos;t distracted by the laughter and comments from the other animals. One step at a time, it steadily advanced toward the finish line. When the hare finally woke up from its nap and sprinted toward the finish line, it was surprised to find the tortoise about to cross it.
                <br /><br />
                The tortoise won the race, leaving everyone astonished. The hare felt embarrassed and humiliated by its arrogance and conceited attitude. It learned the lesson that consistency and patience can lead to success, even if you&apos;re not the fastest. The tortoise demonstrated that perseverance and steady effort are valuable and that haste and arrogance don&apos;t always lead to victory.
                <br /><br />
                The story of The Hare and the Tortoise teaches the importance of humility, consistency, and perseverance, and how overconfidence can lead to defeat.
                <br /><span>END</span><br />
            </h4>
        </div>
    );
}

export default LiebreEn;