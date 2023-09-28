import { Checkbox, Input, Space, Switch } from "antd";

const TextIn: React.FC = (prop) => {
  const props = prop as { placeholder: string };
  return (
    <Input
      placeholder={props.placeholder}
      style={{
        border: "none",
        borderBottom: "2px solid #D0F7FA",
        width: "530px",
        height: "50px",
      }}
    />
  );
};

const CheckSwitch: React.FC = (prop) => {
  const props = prop as { in: string };
  return (
    <Space
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "530px",
        borderBottom: "2px solid #D0F7FA",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>{props.in}</p>
      <Space
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <Checkbox></Checkbox>
        <p>Internal</p>
        <Switch></Switch>
        <p>Hide</p>
      </Space>
    </Space>
  );
};

const PersonalInfo: React.FC = () => {
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "32px",
      }}
      className="personal-info"
    >
      <TextIn placeholder="First Name" />
      <TextIn placeholder="Last Name" />
      <TextIn placeholder="Email" />
      <CheckSwitch in="Phone" />
      <CheckSwitch in="Nationalty" />
      <CheckSwitch in="Current Residence " />
      <CheckSwitch in="ID Number " />
      <CheckSwitch in="Date of Birth  " />
      <CheckSwitch in="Gender " />
    </Space>
  );
};
export default PersonalInfo;
