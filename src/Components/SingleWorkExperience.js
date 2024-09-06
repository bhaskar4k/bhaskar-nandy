import { React, useState, useEffect } from "react";
import icra_analytics from "../Image/icra_analytics.png";
import cognizant from "../Image/cognizant.png";

function SingleWorkExperience(props) {
  let logo_name = null;
  let a_single_work_exp_id = "a_single_work_exp" + props.index;
  const [
    tech_stack_working_or_worked_status,
    set_tech_stack_working_or_worked_status,
  ] = useState("Worked on");

  const [working_duration, set_working_duration] = useState("");

  if (props.org_name === "ICRA Analytics Ltd.") logo_name = icra_analytics;
  else logo_name = cognizant;

  function calculate_time_difference(startMonth, startYear, endMonth, endYear) {
    let yearDiff = endYear - startYear;
    let monthDiff = endMonth - startMonth;

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    monthDiff++;

    if (monthDiff === 12) {
      monthDiff = 0;
      yearDiff++;
    }

    return {
      years: yearDiff,
      months: monthDiff,
    };
  }

  useEffect(() => {
    if (props.index < props.size - 1) {
      document.getElementById(a_single_work_exp_id).style.marginBottom = "20px";
    }

    if (props.ending_date === "Present") {
      set_tech_stack_working_or_worked_status("Working on");
    }

    let duration = calculate_time_difference(
      props.starting_month,
      props.starting_year,
      props.ending_month,
      props.ending_year
    );

    let years = duration.years,
      months = duration.months;

    let working_year = years + (years > 1 ? " Years" : " Year");
    let working_month = months + (months > 1 ? " Months" : " Month");

    let duration_temp;
    if (years === 0) {
      duration_temp = "(" + working_month + ")";
    } else if (months === 0) {
      duration_temp = "(" + working_year + ")";
    } else {
      duration_temp = "(" + working_year + " - " + working_month + ")";
    }

    set_working_duration(duration_temp);
  }, []);

  return (
    <>
      <div id={a_single_work_exp_id}>
        <div className="work_exp_child">
          <div className="company_info">
            <div className="company_logo">
              <img src={logo_name} alt=""></img>
            </div>
            <div className="company_details">
              <p className="designation">{props.designation}</p>
              <p className="company_name">{props.org_name}</p>
              <p className="duration">
                {props.starting_date} - {props.ending_date} {working_duration}
              </p>
            </div>
          </div>
          <p className="tech_stack">
            <span className="tech_stack_color">
              {tech_stack_working_or_worked_status} :
            </span>{" "}
            {props.tech_stack}
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleWorkExperience;
