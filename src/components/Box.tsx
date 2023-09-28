import { Space } from "antd";

const Box: React.FC = (prop) => {
  const props = prop as { name: string; children: React.ReactNode };
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "595px",
          backgroundColor: "white",
          marginLeft: "70px",
          marginTop: "113px",
          borderRadius: "10px",
        }}
      >
        <Space
          style={{
            fontWeight: "medium",
            fontSize: 25,
            textAlign: "center",
            height: "77px",
            backgroundColor: "#D0F7FA",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <p style={{ marginLeft: "32px" }}>{`${props.name}`}</p>
        </Space>
        <Space>{props.children}</Space>
      </Space>
    </>
  );
};

export default Box;
