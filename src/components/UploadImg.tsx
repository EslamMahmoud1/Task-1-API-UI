import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";

const { Dragger } = Upload;

const UploadImg: React.FC = () => {
  return (
    <Dragger
      style={{
        width: "512px",
        height: "210px",
        marginLeft: "41px",
        marginTop: "63px",
      }}
    >
      <UploadOutlined style={{ fontSize: "33px" }} />
      <p style={{ fontWeight: "bold" }}>Upload cover image</p>
      <p>16:9 ratio is recommended. Max image size 1mb</p>
    </Dragger>
  );
};
export default UploadImg;
