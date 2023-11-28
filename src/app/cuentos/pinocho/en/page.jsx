import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";


const PinochoEn = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex p-6">

                <Link href="/">
                    <Button className="gap-2">Inicio <FaHome /></Button>
                </Link>

                <Link href="/cuentos/pinocho/en">
                    <Button>Inglés</Button>
                </Link>
                <Link href="/cuentos/pinocho/es">
                    <Button>Español</Button>
                </Link>

            </div>
            <audio controls>
                <source src="/mp3/pinochoEN.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <h1>Pinocchio</h1>
            <h4>
                <br /><br />
                Once upon a time, there was a carpenter named Geppetto who lived alone and longed for a child. One day, he decided to carve a wooden puppet in the shape of a boy and named him Pinocchio. While he was carving the puppet, something magical happened: Pinocchio came to life and started moving and talking like a real boy, although he still retained his wooden form.
                <br /><br />
                Geppetto was excited and overjoyed to have Pinocchio as his son, but he soon realized that Pinocchio had a mischievous nature and often got into trouble. Pinocchio had a weakness for telling lies, and each time he did so, his nose would grow longer. The Blue Fairy, who had witnessed Pinocchio&apos;s creation, warned him that if he wanted to become a real boy, he needed to prove that he was brave, honest, and kind.
                <br /><br />
                Pinocchio embarked on various adventures, but on his way to school, he was tempted by the sly Fox and the Cat, who convinced him to go to a puppet theater instead of attending school. There, the wicked puppeteer Mangiafuoco captured him and turned him into a donkey to sell him. Pinocchio eventually escaped but suffered the consequences of his actions.
                <br /><br />
                Throughout his journey, Pinocchio encountered the Blue Fairy several times, who helped him in moments of difficulty. Pinocchio tried to be good, but he kept falling into traps and disobeying the Fairy&apos;s warnings. At one point, he was even swallowed by a giant whale while searching for Geppetto but managed to survive along with his father.
                <br /><br />
                After facing various trials and overcoming challenges, Pinocchio finally proved his bravery and selflessness by rescuing Geppetto from the belly of the whale. As a reward for his actions, the Blue Fairy transformed Pinocchio into a real boy, freeing him from his wooden form. Pinocchio had learned the importance of honesty, kindness, and obedience.
                <br /><br />
                The story of Pinocchio is a tale about the significance of being truthful, brave, and kind, as well as the consequences of our actions. Through his adventures, Pinocchio evolved from a mischievous puppet to a real boy who learned valuable life lessons and proper behavior.
                <br /><span>END</span><br />
            </h4>
        </div>
    );
}

export default PinochoEn;