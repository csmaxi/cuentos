
interface TypographyH1Props {
  texto: string;
}

const TypographyH1: React.FC<TypographyH1Props> = ({ texto }) => {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{texto}</h1>;
}

export default TypographyH1;