// Styles
import "./styles.css";
// Types
type TitleType = {
  title: string;
};
// Main Component
const Title = ({title}: TitleType) => {
  return (
    <>
      <div className="title">{title}</div>
    </>
  );
};

export default Title;
