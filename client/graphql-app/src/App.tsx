import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import * as ROUTES from "./constants/routes";
import Todos from "./pages/Todos";

function App() {
  const client = new ApolloClient({
    uri: `http://localhost:3001/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path={ROUTES.createUser} element={<CreateUser />} />
            <Route path={ROUTES.todos} element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
