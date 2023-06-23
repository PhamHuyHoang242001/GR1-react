import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import ViewThuocTriLieu from './ViewThuocTriLieu';
import ViewThuocHetHan from './ViewThuocHetHan';
import axios from 'axios';
import ViewFDA from './ViewFDA';
import { Content, Header } from 'antd/es/layout/layout';


function App() {
  const [selectedButton, setSelectedButton] = useState("1");
  const [datas, setDatas] = useState(null);
  const [curentPage, setCurentPage] = useState(1);
  const [metadata, setMetadata] = useState(null);


  
  
  const handleMenuClick = ({ key }) => {
    setSelectedButton(key);
    setCurentPage(1);
  };

  useEffect(() => {
    async function fetchData1() {
        try {
          const response = await axios.get(
            `https://ut-project-be.vercel.app/api/approved-component?page=${curentPage}`
          );
          console.log(response);
          setDatas(response.data.data);
          console.log(response.data.metadata);
          console.log(response.data.data);
          setMetadata(response.data.metadata);
        } catch (error) {
          console.log(error);
        }
      }
    async function fetchData2() {
        try {
          const response = await axios.get(
            `https://ut-project-be.vercel.app/api/not-approved-component?page=${curentPage}`
          );
          console.log(response);
          setDatas(response.data.data);
          console.log(response.data.metadata);
          console.log(response.data.data);
          setMetadata(response.data.metadata);
        } catch (error) {
          console.log(error);
        }
      }
      async function fetchData3() {
        try {
          const response = await axios.get(
            `https://ut-project-be.vercel.app/api/fda-medicine?page=${curentPage}`
          );
          console.log(response);
          setDatas(response.data.data);
          console.log(response.data.metadata);
          console.log(response.data.data);
          setMetadata(response.data.metadata);
        } catch (error) {
          console.log(error);
        }
      }
    if (selectedButton === "2"){
      fetchData2();
    } else if (selectedButton === "3"){
      fetchData3();
    } else if (selectedButton === "1"){ 
      fetchData1();
    }
  }, [selectedButton,curentPage]);

  return (
    <>
          <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedButton]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1">Còn hạn</Menu.Item>
          <Menu.Item key="2">Hết hạn</Menu.Item>
          <Menu.Item key="3">FDA</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        {datas && selectedButton === "1" && (
          <ViewThuocTriLieu datas={datas} setCurentPage={setCurentPage} metadata={metadata} />
        )}
        {datas && selectedButton === "2" && (
          <ViewThuocHetHan datas={datas} setCurentPage={setCurentPage} metadata={metadata} />
        )}
        {datas && selectedButton === "3" && (
          <ViewFDA datas={datas} setCurentPage={setCurentPage} metadata={metadata} />
        )}
      </Content>
    </Layout>
    </>
  );
}

export default App;
