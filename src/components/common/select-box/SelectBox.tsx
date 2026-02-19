// Utils
import { cn } from "@/utils/cn";

// Types
import type { OptionType } from "@/types/option.types";

// Types
type SelectBoxProps = {
  items: OptionType[];
} & React.ComponentProps<"select">;

// Main Component
const SelectBox = ({ items, className, ...rest }: SelectBoxProps) => {
  return (
    <select
      className={cn(
        "select-box bg-white text-[#333] py-2 mb-5 rounded-sm outline-0",
        className,
      )}
      {...rest}
    >
      {items.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label || item.value}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
