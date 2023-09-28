import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Headerbar from "../components/Header";
import Box from "../components/Box";
import UploadImg from "../components/UploadImg";
import PersonalInfo from "../components/PersonalInfo";

const { Header, Content, Footer, Sider } = Layout;

const ApplicationForm: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" collapsed>
        <Sidebar></Sidebar>
      </Sider>
      <Layout>
        <Header style={{ marginTop: 123, height: "130px" }}>
          <Headerbar></Headerbar>
        </Header>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box name={"Upload cover image "}>
            <UploadImg></UploadImg>
          </Box>
          <Box name={"Personal Information"}>
            <PersonalInfo></PersonalInfo>
          </Box>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};
export default ApplicationForm;
