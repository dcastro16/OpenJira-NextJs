import { CSSProperties, FC, ReactNode, useState } from "react";
import AddIcon from "@mui/icons-material/AddOutlined";
import { OrbitMenuItem } from ".";

import styles from "./OrbitMenu.module.css";

interface Props {
  menuItems: string[];
  children?: ReactNode;
}

export const OrbitMenu: FC<Props> = ({ menuItems, children }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const menuStyle = { "--itemCount": menuItems.length } as CSSProperties;

  const handleToggleBtn = () => {
    setIsToggled(!isToggled);
  };

  const renderMenuItems = (name: string, index: number) => {
    return <OrbitMenuItem key={index} id={index} iconName="bolt" name={name} />;
  };

  return (
    <div
      style={menuStyle}
      className={`${styles["menu"]} ${isToggled ? styles["active"] : ""}`}
    >
      {children ? (
        <div className={styles["menu__image"]} onClick={handleToggleBtn}>
          {children}
        </div>
      ) : (
        <div className={styles["menu__toggle"]} onClick={handleToggleBtn}>
          <AddIcon />
        </div>
      )}
      {menuItems.map((name, index) => renderMenuItems(name, index))}
    </div>
  );
};
