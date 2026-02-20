// Styles
import "./title.css";

// Types
type TitleProps = {
  title: string;
};

// Main Component
const Title = ({ title }: TitleProps) => {
  return <h2 className="title">{title}</h2>;
};

export default Title;
