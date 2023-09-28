import { Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import Question from "./Question";

const AddQuestion: React.FC = () => {
  const [question, setQuestion] = useState<number[]>([]);
  const handleClick = (): void => {
    setQuestion([...question, question.length + 1]);
    console.log(question);
  };
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "500px",
        justifyContent: "start",
      }}
    >
      <Space onClick={handleClick} style={{ cursor: "pointer" }}>
        <PlusOutlined />
        <p style={{ fontWeight: "bold" }}>Add Question</p>
      </Space>
      <Space style={{ display: "flex", flexDirection: "column" }}>
        {question.map((q) => (
          <Question key={q} />
        ))}
      </Space>
    </Space>
  );
};
export default AddQuestion;
