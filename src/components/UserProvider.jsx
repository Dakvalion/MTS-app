
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const UserContext = createContext();
const tableContext = createContext({ applications: [] });

export const AppProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [applications, setApplications] = useState([]);

 const fetchApplications = useCallback(() => {
  if (user && user.id) {
    fetch('http://localhost:8080/api/trips', {
      method: "GET",
    })
    .then(response => response.json())
    .then(data => setApplications(data))
    .catch(error => console.log('error'));
  }
  }, [user]); 

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

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