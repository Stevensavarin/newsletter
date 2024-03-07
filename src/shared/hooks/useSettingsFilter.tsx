import { settingsActiveItem } from "@/app/configs/constants";
import { useAtom } from "jotai";
import { Key } from "@react-types/shared";

const useSettingsFilter = () => {
  const [activeItem, setActiveItem] = useAtom<Key>(settingsActiveItem);

  return { activeItem, setActiveItem };
};

export default useSettingsFilter;
