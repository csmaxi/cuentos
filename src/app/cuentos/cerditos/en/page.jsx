import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";



const CerditosEn = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center">
                    <TypographyH1 texto="The Three Little Pigs"/>
                    <Imagen src="/image/2.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/cerditosEN.mp3" />
                </div>
            </div>
            </div>
            <h4>
                <br /><br />
                Once upon a time, there were three little pigs who lived with their mom in the forest. The three pigs were brothers, but they were very different from each other. The eldest was hardworking and always tried to do things right. The middle one was a bit lazy, but he also worked hard. The youngest, on the other hand, was playful and preferred to have fun all the time.
                <br /><br />
                One day, the pigs&apos; mom told them that it was time for them to go out and build their own houses and be responsible for themselves. The three brothers decided to go in different directions and build their houses.
                <br /><br />
                The youngest pig didn&apos;t want to waste time building a house, so he quickly built his out of straw. After finishing it, he sat in front of his house and began to play the flute, thinking he was safe.
                <br /><br />
                The middle pig worked a bit harder and built his house with wood. He thought it would be strong enough to protect him from any danger. Once he finished, he rested inside his new house.
                <br /><br />
                The eldest pig was the wisest of all. He knew that building a house took time and effort, so he decided to build his with bricks. He knew it would be the most sturdy and secure of all.
                <br /><br />
                But while the pigs worked on their houses, a wicked wolf was lurking nearby. The wolf was hungry and wanted to eat the pigs. First, he went to the straw house of the youngest pig and asked him to open the door.
                <br /><br />
                The youngest pig, frightened, told him he couldn&apos;t open the door because it was too small. The angry wolf huffed and puffed, and the straw house collapsed in an instant. The pig ran to the wooden house of the middle pig to seek shelter.
                <br /><br />
                The wolf chased the pig to the wooden house and asked him to open the door too. But the middle pig replied that he couldn&apos;t open the door because it was too small. The wolf huffed and puffed harder, and the wooden house also collapsed.
                <br /><br />
                Terrified, the two pigs ran to the brick house of the eldest pig. The wolf followed them and asked them to open the door, but the eldest pig replied that he couldn&apos;t open the door because it was too small.
                <br /><br />
                The wolf huffed and puffed with all his might, but the brick house was so strong that he couldn&apos;t knock it down. The wolf finally gave up and left, vowing to get revenge.
                <br /><br />
                The three pigs learned a valuable lesson. Hard work and planning pay off, and it&apos;s important to be responsible and do things right. From then on, they lived happily and safely in their brick house, taking care of each other and enjoying life in the forest.</h4>
            <br /><span>END</span><br />
        </div>
    );
}

export default CerditosEn;