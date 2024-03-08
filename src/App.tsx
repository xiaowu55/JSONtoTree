import React, { useState } from 'react';
import InputComponent from './Components/InputComponent';
import CardComponent from './Components/CardComponent';

import JsonContext from './context/JsonContext';

const App: React.FC = () => {
  const [jsonDate, setJsonDate] = useState('')

  return (
    <JsonContext.Provider value={{ jsonDate, setJsonDate }}>
      <InputComponent />
      <CardComponent />
    </JsonContext.Provider>
  );
};

export default App;