import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);
  useEffect(() => {
    const generateRange = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const daysArray = generateRange(1, 31);
    setDays(daysArray);

    const monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setMonths(monthsArray);

    const currentYear = new Date().getFullYear();
    const yearsArray = generateRange(currentYear - 100, currentYear);
    setYears(yearsArray);
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <img
            src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__"
            alt=""
            height="33px"
            width="40px"
            className="mt-5 mx-auto d-block"
          />

          <h1 className="text-start mb-3">Create new account</h1>
          <form>
            <div className="mb-4">
              <input type="text" className="form-control hight-signup" placeholder="Name" />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control hight-signup"
                placeholder="Phone number"
              />
            </div>
            <div className="text-info cursors">Use email</div>
            <div className="mt-4">
              <h2>Date of birth</h2>
              <p className="text-secondary" style={{ width: "700px" }}>
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </p>

              <div className="d-flex">
                <select
                  name="month  "
                  id="month"
                  className="form-control hight-signup  mx-4"
                  placeholder="Month"
                  style={{ width: "550px " }}
                >
                  <option disabled selected>
                    month
                  </option>
                  {months.map((month, index) => (
                    <option key={index}>{month}</option>
                  ))}
                </select>
                <select
                  name="day"
                  id="day"
                  className="form-control hight-signup mx-4"
                  placeholder="Day"
                  style={{ width: "250px " }}
                >
                  <option disabled selected>
                    Day
                  </option>
                  {days.map((day) => (
                    <option key={day}>{day}</option>
                  ))}
                </select>

                <select
                  name="year"
                  id="year"
                  className="form-control hight-signup mx-4"
                  placeholder="Year"
                  style={{ width: "250px " }}
                >
                  <option disabled selected>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <Link to={"/login"}>
          <button  className="container btn btn-info rounded-full mt-5">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
