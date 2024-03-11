import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="container m-4">
      <h1 className="text-center mb-5">
        Hello dans votre application Taste and share.
      </h1>
      <h3 className="text-center m-3">
        Commencez dès maintenant en vous
        <Link to="/inscription"> inscrivant</Link>
      </h3>
      <h3 className="text-center m-3">
        Ou <Link to="/connexion">connectez</Link> vous si vous avez déjà un
        compte.
      </h3>
    </div>
  );
}

export default App;
