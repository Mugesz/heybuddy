import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

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
    const yearsArray = generateRange(currentYear - 50, currentYear);
    setYears(yearsArray);
  }, []);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
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
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="text-info cursors">Use email</div>
            <div className="mt-4">
              <h2>Date of birth</h2>
              <p className="text-secondary">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </p>

              <div className="row">
                <div className="col">
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle drop"
                      type="button"
                      id="monthDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ width: "350px" }}
                    >
                      {selectedMonth || "Month"}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="monthDropdown"
                    >
                      {months.map((month, index) => (
                        <li key={index}>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleMonthSelect(month)}
                          >
                            {month}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col">
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle drop mx-3"
                      type="button"
                      id="dayDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ width: "150px" }}
                    >
                      {selectedDay || "Day"}
                    </button>
                    <ul
                      className="dropdown-menu day-dropdown"
                      aria-labelledby="dayDropdown"
                    >
                      {days.map((day, index) => (
                        <li key={index}>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleDaySelect(day)}
                          >
                            {day}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col">
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle drop"
                      type="button"
                      id="yearDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ width: "150px" }}
                    >
                      {selectedYear || "Year"}
                    </button>
                    <ul
                      className="dropdown-menu year-dropdown"
                      aria-labelledby="yearDropdown"
                    >
                      {years.map((year, index) => (
                        <li key={index}>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleYearSelect(year)}
                          >
                            {year}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <Link to={"/login"}>
            <button className=" container btn btn-info rounded-full mt-5">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
