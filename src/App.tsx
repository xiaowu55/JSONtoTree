import React, { useState } from 'react';
import InputComponent from './Components/InputComponent';
import CardComponent from './Components/CardComponent';

import JsonContext from './context/JsonContext';
import { Flex, Layout } from 'antd';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#f9f7f7',
  height: 60,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#3f72af',
};


const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#112d4e',
  display: 'flex', 
  padding: '20px',
};



const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  height: '80vh',
  display: 'flex',
};

const InputComponentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#f9f7f7',
  padding: '20px',
  width: '50%',
  margin: '0 10px'
};

const CardComponentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#f9f7f7',
  padding: '20px',
  width: '50%',
  margin: '0 10px',
};



const App: React.FC = () => {
  const [jsonDate, setJsonDate] = useState('')
  const { Header, Content } = Layout;
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>JSON to Tree</Header>
        <Content style={contentStyle}>
          <JsonContext.Provider value={{ jsonDate, setJsonDate }}>
            <InputComponent style={InputComponentStyle}/>
            <CardComponent style={CardComponentStyle}/>
          </JsonContext.Provider>
        </Content>
      </Layout>
    </Flex>
  )
};

export default App;