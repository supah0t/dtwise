import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async() => {
    const response = await fetch("http://127.0.0.1:8000/api/");
    const data = await response.json();
    setItems(data);
  };

  const [items, setItems] = useState([]);

  return(
      <DataContext.Provider value={items}>
        {props.children}
      </DataContext.Provider>
  );
}
