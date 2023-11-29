import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";



const BlancanievesEn = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex p-6">

                <Link href="/">
                    <Button className="gap-2">Inicio <FaHome /></Button>
                </Link>

                <Link href="/cuentos/blancanieves/en">
                    <Button>Inglés</Button>
                </Link>
                <Link href="/cuentos/blancanieves/es">
                    <Button>Español</Button>
                </Link>

            </div>
            <audio controls>
                <source src="/mp3/blancaEN.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio
            </audio>
            <h1>Snow White</h1>
            <h4>
                <br /><br />
                Once upon a time, in a distant kingdom, there was a beautiful princess named Snow White. She lived happily with her father, the king, until an evil and jealous queen became her stepmother.
                <br /><br />
                The wicked stepmother had a magic mirror that told her she was the fairest of them all. But one day, the mirror revealed that Snow White was now the fairest in the kingdom, which enraged the queen.
                <br /><br />
                The evil queen ordered her huntsman to take Snow White into the forest and get rid of her forever. However, the huntsman&apos;s noble heart couldn&apos;t harm the sweet princess, so he let her escape and warned her to hide in the forest.
                <br /><br />
                Snow White found herself alone in the woods but soon discovered a small house that belonged to seven adorable dwarfs. They welcomed her with warmth, and from that day on, they lived together as a big family.
                <br /><br />
                Meanwhile, the evil stepmother learned that Snow White was still alive, and determined to eliminate her, she prepared a poisoned apple. Disguised as an old woman, the queen deceived Snow White and offered her the apple. The innocent and trusting princess took a bite of the apple and fell into a deep sleep.
                <br /><br />
                The seven dwarfs, upon finding Snow White motionless, were filled with sorrow. But a brave prince, who had been searching for the princess, arrived in the forest and found her asleep. With a loving kiss, the spell was broken, and Snow White woke up.
                <br /><br />
                Upon learning that Snow White was still alive, the wicked queen devised a plan to destroy her, but her evil schemes failed. Snow White, the dwarfs, and the prince joined forces and confronted the evil queen, who was ultimately punished for her wickedness.
                <br /><br />
                Since then, Snow White lived happily with the prince and the seven dwarfs in the castle. And so, love, friendship, and kindness triumphed in this fairy tale, proving that there is always a happy ending for those with a pure and noble heart.
                <br /><span>END</span><br />
            </h4>
        </div>
    );
}

export default BlancanievesEn;