interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h2 className="font-extrabold text-heading">{title}</h2>;
};

export default Heading;
