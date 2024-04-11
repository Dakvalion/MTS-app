
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();
const tableContext = createContext({ applications: [] });

export const AppProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [applications, setApplications] = useState([]);

 const fetchApplications = async () => {
    try {
      const response = await fetch('тут будет апи');
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Ошибка при получении заявок:', error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

 return (
    <UserContext.Provider value={{ user, setUser }}>
      <tableContext.Provider value={{ applications }}>
        {children}
      </tableContext.Provider>
    </UserContext.Provider>
 );
};

export const useUser = () => useContext(UserContext);

export const useApplications = () => useContext(tableContext);