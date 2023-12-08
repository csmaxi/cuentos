import Link from 'next/link';
import { Button } from './ui/button';
import { Cuentos } from "../../data/datos";

const Buttons = () => {
  return (
    <div className='flex flex-col'>
      {Cuentos.map((cuento) => (
        <div key={cuento.id} className="flex">
          {cuento.cuentoes && (
            <div>
              <Link href={cuento.cuentoes}>
                <Button>Español</Button>
              </Link>
            </div>
          )}
          {cuento.cuentoen && (
            <div>
              <Link href={cuento.cuentoen}>
                <Button>Inglés</Button>
              </Link>
            </div>
          )}
          <audio controls>
            <source src={cuento.mp3} type="audio/mpeg" />
            Tu navegador no soporta la etiqueta de audio.
          </audio>
          <h1>{cuento.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Buttons;
