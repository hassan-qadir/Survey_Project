import React, { useEffect } from "react";
import * as Survey from "survey-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { useDispatch, useSelector } from "react-redux";
import { userRead } from "../feature/ReadSlice";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const Questionsurvey = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(userRead());
  }, []);

  const { users } = useSelector((state) => state.read);
  console.log(users);
  const userId = Object.entries(users).filter(([key]) => key === id);
  // console.log(userId[0][1].question);
  const setSurvey = userId[0][1].question;

  const survey = new Survey.Model(setSurvey);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return (
    <>
      <div className="container mt-5">
        <Link to={"/Takeservey"}>
          <Button variant="contained">Back to Survey</Button>
        </Link>
        <div className="row py-5">
          <Survey.Survey model={survey} />
        </div>
      </div>
    </>
  );
};

export default Questionsurvey;
