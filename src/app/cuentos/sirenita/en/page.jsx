import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";

const SirenitaEn = () => {
    return (
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center">
                    <TypographyH1 texto="The Little Mermaid"/>
                    <Imagen src="/image/6.png" alt="Descripción de la imagen" />
                    <Audio source="/mp3/sirenitaEN.mp3" />
                </div>
            </div>
            </div>
            <h4>
                <br /><br />
                Once upon a time, at the bottom of the ocean, there lived a young and beautiful mermaid named Ariel. She lived in an underwater kingdom alongside her father, King Triton, and her mermaid sisters. Ariel was curious and dreamed of exploring the world above the surface, despite her father&apos;s warnings about the dangers of humans.
                <br /><br />
                One day, while Ariel was exploring a shipwreck on the surface, she saw a human prince named Eric. She instantly fell in love with him, but a sudden storm caused Eric to fall into the water, and Ariel saved him, bringing him to shore before disappearing. Ariel desperately wished to become human to be with Eric and was willing to do anything to achieve it.
                <br /><br />
                The evil sea witch, Ursula, noticed Ariel&apos;s desires and offered her a deal. Ursula would give Ariel human legs in exchange for her beautiful voice. Ariel agreed to the deal and became human, but she lost her voice in the process. She had three days to get a true love&apos;s kiss from Eric, or she would become Ursula&apos;s property.
                <br /><br />
                Ariel reached the shore, and Eric found her. Although she couldn&apos;t speak, she managed to win his affection. However, Ursula, disguised as a beautiful young woman named Vanessa, enchanted Eric to fall in love with her. Ariel and her friends, Flounder and Sebastian, fought against Ursula to save Eric. Finally, with the help of her father, King Triton, Ariel regained her voice and defeated Ursula.
                <br /><br />
                Eric and Ariel were reunited and kissed, breaking the spell. Ariel debated whether to stay with Eric or return to the ocean, but she ultimately chose to stay with Eric and live as a human. King Triton accepted her choice and transformed her into a human permanently. While she had to sacrifice her voice, Ariel found the love and happiness she had longed for.
                <br /><br />
                The story of The Little Mermaid is a tale of love, sacrifice, and the quest for identity. Ariel learns valuable lessons about the consequences of her choices and the importance of being true to oneself. The story explores themes of overcoming obstacles and fighting for what one desires, as well as the idea that true love transcends differences.
                <br /><span>END</span><br />
            </h4>
        </div>
    );
}

export default SirenitaEn;