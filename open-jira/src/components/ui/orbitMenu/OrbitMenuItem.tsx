import { CSSProperties, FC } from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBoltOutlined";
import { IconButton } from "@mui/material";

interface Props {
  id: number;
  name?: string;
  iconName: string;
  href?: string;
  onClick?: () => void;
}

export const OrbitMenuItem: FC<Props> = ({ id, onClick }) => {
  const style = { "--i": id } as CSSProperties;
  return (
    <li key={id} style={style}>
      <IconButton onClick={onClick}>
        <ElectricBoltIcon />
      </IconButton>
    </li>
  );
};
