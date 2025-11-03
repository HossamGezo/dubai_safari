// Types
type item = {
  id: number;
  value: string;
};
type SelectBoxProps = {
  items: item[];
};
// Main Component
const SelectBox = ({items}: SelectBoxProps) => {
  return (
    <>
      <select className="select-box bg-white text-[#333] py-2 mb-5 rounded-sm outline-0">
        {items.map((item) => (
          <option
            key={item.id}
            value={item.value}
            className="select-box-item"
          >
            {item.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
