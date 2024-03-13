import React from "react";
import { Link, NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="left">
          <img
            src="https://s3-alpha-sig.figma.com/img/fc73/ba7a/f1e6944d750f97b53adecbabca7ffd40?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHj4MqcoD8Pt9gywdK~mGb3QpXAxpNO67y7K7kxl56NE6u2ENZoTesZW6m7teX-p-IeWHRCEYwuyN6jd~vXWAYBa8Y2Rg5iTYo2KAFKdOnrEs8BgdUCuqWb9aHsp4qlu7NirP52vkL9Xe1aiW3IxKwr4RJrGopYHqSLXM4JEPLkzpKKIK8eoQCwo6mNliI7teAMvS6uXIwWdpaHqT1MMmU0b0plwtNbj4a5Ca~tHz6sTq75PbfCOPd0CVkzbNzP4IAVh2Pts1NxsukBmGzH9FBvOFtbS0iqounqAMhBnnJWrZZXpb9LIB5nrH2RNv084HafNDnAffZP7d0pqMNB9kQ__"
            alt=""
            width="800px"
            height="600px"
          />
        </div>
        <div className="right mx-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__"
            alt=""
            height="33px"
            width="40px"
            className="margin d-block"
          />
          <h1 className="mt-3">
            <b>Happening now</b>
          </h1>
          <h3 className="mt-3">
            <b>Join Twitter Today</b>
          </h3>
          <h6 className="sign-text mt-4">
            {" "}
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
              alt=""
              height="20px"
              width="20px"
            />{" "}
            <span> Sign with google</span>
          </h6>
          <h6 className="sign-text">
            {" "}
            <img
              src="https://pngfre.com/wp-content/uploads/apple-logo-22-1024x1024.png"
              alt=""
              height="20px"
              width="20px"
            />
            <span> Sign with apple</span>
          </h6>
          <NavLink className="Link" to="/signup">
          <h6 className=" sign-text">Sign with phone or email</h6></NavLink>
          <p className="mt-4">
            By singing up you agree to the{" "}
            <span className="text-info">Terms of Service</span> and{" "}
            <span className="text-info">Privacy Policy</span>, including{" "}
            <span className="text-info">Cookie Use</span>.
          </p>
          <Link to="/login" className="btn">
            <p className="mt-4">
              Already have an account?
              <span className="text-info btn-link">Log in</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="d-flex mt-4 bottom justify-content-center gap-3">
        <p>about</p>
        <p>Help center</p>
        <p>Terms of service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Status</p>
        <p>Carrres</p>
        <p>Brand Resources</p>
        <p>Advertsing</p>
        <p>Marketing</p>
        <p>Twitter for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>© 2021 Twitter, Inc. </p>
      </div>
    </div>
  );
};

export default Main;
