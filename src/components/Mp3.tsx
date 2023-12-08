interface AudioProps {
  source: string;
}

const Audio: React.FC<AudioProps> = ({ source }) => {
  return <audio controls src={source} />;
}

export default Audio;
