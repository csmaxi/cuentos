import Image from "next/image";
interface ImagenProps {
    src: string;
    alt: string;
}

const Imagen: React.FC<ImagenProps> = ({ src, alt }) => {
    return (
        <Image className="rounded-full m-4"
            src={src}
            alt={alt}
            width={300}
            height={300}
        />
    )
}

export default Imagen;
