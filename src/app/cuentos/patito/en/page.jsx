import Imagen from "@/components/Imagen";
import TypographyH1 from "@/components/Titulo";
import Audio from "@/components/Mp3";

const PatitoEn = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex  flex-col items-center ">
                    <TypographyH1 texto="The Ugly Duckling"/>
                    <Imagen src="/image/3.jpg" alt="Descripción de la imagen" />
                    <Audio source="/mp3/patitoEN.mp3" />
                </div>
            </div>
            </div>
            <h4>
                <br /><br />
                Once upon a time, there was a duck that lived in a beautiful pond with other ducks and animals. One day, this duck laid an egg, and when the duckling hatched, everyone was surprised. It was different from the other ducklings; it was larger, awkward, and had gray and ugly feathers.
                <br /><br />
                The other ducklings and animals teased him and called him the ugly duckling. The ugly duckling felt very sad and rejected, thinking that he would never fit in there.
                <br /><br />
                One day, the ugly duckling decided to run away from the pond and seek a place where he would feel accepted. He traveled through the countryside and encountered different animals, but all of them rejected him because of his appearance.
                <br /><br />
                Winter came, and the ugly duckling faced many hardships to survive the cold. Finally, he found a large lake that was completely frozen. A group of beautiful swans were swimming on it, and the duckling was drawn to their elegance and beauty.
                <br /><br />
                The duckling decided to approach the lake and look at himself in the ice. To his surprise, when he saw his reflection, he noticed that he was no longer an ugly duckling but had turned into a beautiful and majestic swan. It turned out that he was not an ugly duckling, but had always been a real swan.
                <br /><br />
                The swans in the lake accepted him with affection, and he became part of their group. The ugly duckling finally found his place and never felt lonely or rejected again.
                <br /><br />
                The story of The Ugly Duckling teaches us that beauty goes beyond physical appearance and that a person&apos;s real value lies in their inner qualities and how they feel about themselves. Sometimes, differences and difficulties can lead us to discover our true potential and find our place in the world.</h4>
            <br /><br />
        </div>
    );
}

export default PatitoEn;