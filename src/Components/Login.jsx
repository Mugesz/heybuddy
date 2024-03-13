import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center p-3">
        <div className="col-md-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__"
            alt=""
            height="33px"
            width="40px"
            className="mt-5  d-block"
          />
          <h1 className="mt-3 mb-4">Login to Twitter</h1>
          <div className="card-body">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control hight"
                  placeholder="Phone number , email address"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control hight"
                  placeholder="Password"
                />
              </div>
              <button className=" container btn btn-primary mt-3 hight-signup br">
                Login
              </button>
            </form>

            <div className="d-flex justify-content-between mt-3">
              <Link className="btn text-info">forget password?</Link>
              <Link to="/signup" className="btn text-info">
                Signup to Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
