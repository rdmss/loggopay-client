const { useContext, createContext, useState } = require("react");

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  console.log("user changed on context to: ", user);

  return (
    <AuthContext.Provider value={{ user, setuser }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider, AuthContext, AuthConsumer };
