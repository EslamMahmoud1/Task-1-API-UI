import { useState } from "react";
import { Space, Select, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Question: React.FC = () => {
  const [question, setQuestion] = useState<string>("");

  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
      }}
    >
      <p>Type</p>
      <Select
        onSelect={(value) => setQuestion(value)}
        style={{ width: "200px" }}
        options={[
          { value: "Paragraph", label: "Paragraph" },
          { value: "Short Answer", label: "Short Answer" },
          { value: "Yes/No", label: "Yes/No" },
          { value: "Dropdown", label: "Dropdown" },
          { value: "Multiple Choice", label: "Multiple Choice" },
          { value: "Date", label: "Date" },
          { value: "Number", label: "Number" },
          { value: "File Upload", label: "File Upload" },
          { value: "Video question", label: "Video question" },
        ]}
      ></Select>

      {question === "Paragraph" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Short Answer" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Yes/No" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Dropdown" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Multiple Choice" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Date" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Number" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "File Upload" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      {question === "Video question" && (
        <Space style={{ display: "flex", flexDirection: "column" }}>
          <p>Question</p> <Input></Input>
        </Space>
      )}
      <Space style={{ display: "flex", justifyContent: "space-evenly" }}>
        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        <Button
          type="default"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Save
        </Button>
      </Space>
    </Space>
  );
};
export default Question;
