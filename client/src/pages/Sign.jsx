import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import connexion from "../services/instances";
import { UserContext } from "../context/User";

function Sign({ type }) {
  const form = useRef();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const signup = async (jsonData, cb) => {
    try {
      await connexion.post("/users/signup", jsonData);
      cb();
      setTimeout(() => {
        navigate("/connexion");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  const signin = async (jsonData, cb) => {
    try {
      const user = await connexion.post("/users/signin", jsonData);
      setUser(user.data);
      cb();
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  const reset = (formData) => {
    formData.forEach((value, key) => {
      form.current[key].value = "";
    });
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    if (type === "up") {
      signup(jsonData, () => reset(formData));
    } else {
      signin(jsonData, () => reset(formData));
    }
  };

  return (
    <div className="container text-black">
      <h1 className="text-center m-4">
        {type === "up" ? "Inscription" : "Connexion"}
      </h1>
      <form ref={form} onSubmit={handleSubmission} className="border m-2 p-3">
        <div className="form-group row">
          <label className="col-sm-12 col-form-label">
            Votre Email
            <input type="text" required name="email" className="form-control" />
          </label>
        </div>
        <div className="form-group row">
          <label className="col-sm-12 col-form-label">
            Votre mot de passe
            <input
              type="password"
              required
              name="password"
              className="form-control"
            />
          </label>
        </div>
        {type === "up" && (
          <div className="form-group row">
            <label className="col-sm-12 col-form-label">
              Votre confirmation de mot de passe
              <input
                type="password"
                required
                name="confirm"
                className="form-control"
              />
            </label>
          </div>
        )}
        <button type="submit" className="btn btn-dark my-4">
          {type === "up" ? "S'inscrire" : "Se Connecter"}
        </button>
      </form>
    </div>
  );
}

Sign.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Sign;
