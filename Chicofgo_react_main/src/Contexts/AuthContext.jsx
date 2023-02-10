import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');

  useEffect(() => {
    async function getMember() {
      let response = await axios.get('http://localhost:3001/api/members', {
        withCredentials: true,
      });
      //   console.log(response.data);
      //   console.log(response.data.name);

      if (response.status === 200) {
        console.log('登入成功');
        setIsLoggedIn(true);
        setUsername(response.data.name);
        setUserid(response.data.id);
        // setUserid()
        // localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        // localStorage.setItem('username', JSON.stringify(username));
      }
    }
    getMember();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        username,
        setUsername,
        userid,
        setUserid,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
