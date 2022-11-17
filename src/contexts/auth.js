import Cookies from 'js-cookie'

const { useContext, createContext, useState, useEffect } = require("react");

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const userCookie = Cookies.get('user');

  if(userCookie){
    user = (JSON.parse(userCookie));
  }

  console.log("user changed on context to: ", user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider, AuthContext, AuthConsumer };
