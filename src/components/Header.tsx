import type { MenuProps } from "antd";
import { Menu, ConfigProvider } from "antd";

const header: MenuProps["items"] = [
  "Program Details",
  "Application Form",
  "Workflow",
  "Preview",
].map((key) => ({
  key,
  label: `${key}`,
}));

const Headerbar: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHeight: 130,
            itemSelectedBg: "#00635B",
            itemSelectedColor: "white",
          },
        },
      }}
    >
      <Menu
        mode="inline"
        items={header}
        defaultSelectedKeys={["Application Form"]}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "20px",
          height: "100%",
        }}
      ></Menu>
    </ConfigProvider>
  );
};
export default Headerbar;
