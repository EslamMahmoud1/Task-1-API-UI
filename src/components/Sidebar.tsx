import {
  HomeOutlined,
  MenuOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("menu", "1", <MenuOutlined />),
  getItem("home", "2", <HomeOutlined />),
  getItem("list", "3", <UnorderedListOutlined />),
];

const Sidebar: React.FC = () => {
  return <Menu theme="light" items={items}></Menu>;
};

export default Sidebar;
