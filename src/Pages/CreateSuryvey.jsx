import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataFetch } from "../feature/UserSlice";
import { useFormik } from "formik";
import { userSchema } from "../schemas";
import * as SurveyCreator from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { Stepper, Step, StepLabel, Button } from "@mui/material";

var creatorOptions = {
  showJSONEditorTab: false,
  showTranslationTab: true,
  showPagesToolbox: true,
  showPagesInTestSurveyTab: true,
  showTitlesInExpressions: true,
  showToolbox: true,
  useTabsInElementEditor: false,
};
var creator = new SurveyCreator.SurveyCreator(creatorOptions);

const initialJSON = {
  title: "",
  description: "",
  completedHtml:
    "Thank you for your feedback.Your thoughts and ideas will help us to create a great product!",
  completedHtmlOnCondition: [
    {
      expression: "{nps_score} > 8",
      html: "Thank you for your feedback.We glad that you love our product. Your ideas and suggestions will help us to make our product even better!",
    },
    {
      expression: "{nps_score} < 7",
      html: "Thank you for your feedback. We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.<br />",
    },
  ],
  pages: [
    {
      name: "Write a Question",
      elements: [],
    },
  ],
  showQuestionNumbers: "off",
};

creator.JSON = initialJSON;

creator.showToolbox = "left";
creator.showPropertyGrid = "left";
creator.rightContainerActiveItem("toolbox");

const initialValues = {
  title: "",
  description: "",
  estimatedtime: "",
  date: "",
  count: "",
  amount: "",
};
function getSteps() {
  return ["Basic Information", "Question Details", "Review & Submit"];
}
function StepContent(step) {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        const postData = {
          values,
          question: creator.JSON,
        };
        dispatch(userDataFetch(postData));
        action.resetForm();
      },
    });
  switch (step) {
    case 0:
      return (
        <>
          <h4
            className="mb-2 mt-2 text-primary"
            style={{
              fontFamily: "revert",
              fontWeight: "bold",
            }}
          >
            Step 1
          </h4>
          <h5
            style={{
              color: "var(--primary-color)",
              fontWeight: "500",
              marginBottom: "1rem",
              marginTop: "2rem",
              fontSize: "1.1rem",
            }}
          >
            Enter your survey information
          </h5>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="title">
              <span style={{ fontWeight: "300" }}> Title of The Survey</span>{" "}
              (how your survey will appear to other users on the site){" "}
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your title"
              value={values.title}
              className="form-control"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.title && touched.title ? (
            <p className="text-danger">{errors.title}</p>
          ) : null}
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="description">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              rows="5"
              name="description"
              value={values.description}
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.description && touched.description ? (
            <p className="text-danger">{errors.description}</p>
          ) : null}
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="mb-3">
                <label className="form-label text-dark" htmlFor="estimatedtime">
                  Estimated Time (Min)
                </label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  placeholder="Enter estimated time"
                  name="estimatedtime"
                  value={values.estimatedtime}
                  className="form-control"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.estimatedtime && touched.estimatedtime ? (
                <p className="text-danger">{errors.estimatedtime}</p>
              ) : null}
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="mb-3">
                <label className="form-label text-dark" htmlFor="estimatedtime">
                  Start Date
                </label>
                <input
                  type="date"
                  placeholder="Start date"
                  name="date"
                  value={values.date}
                  className="form-control"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.date && touched.date ? (
                <p className="text-danger">{errors.date}</p>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="mb-2">
                <label className="form-label text-dark" htmlFor="userscount">
                  Users Count
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter users count"
                  name="count"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.count}
                />
              </div>
              {errors.count && touched.count ? (
                <p className="text-danger">{errors.count}</p>
              ) : null}
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="mb-2">
                <label className="form-label text-dark" htmlFor="amount">
                  Amount
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter users amount"
                  name="amount"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                />
              </div>
              {errors.amount && touched.amount ? (
                <p className="text-danger">{errors.amount}</p>
              ) : null}
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className="mt-3">
            <h4
              className="mb-2 mt-2 text-primary"
              style={{ fontFamily: "revert", fontWeight: "bold" }}
            >
              Step 2
            </h4>
            <SurveyCreator.SurveyCreatorComponent
              creator={creator}
              style={{ height: "100vh" }}
            />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="container mt-3">
            <h4
              className="mb-3 mt-2 text-primary"
              style={{
                fontFamily: "revert",
                fontWeight: "bold",
              }}
            >
              Step 3
            </h4>

            <h6 className="mb-3" style={{ fontWeight: "bold" }}>
              Review the following information and submit
            </h6>
            <div className="mt-4">
              <h6>{`Title: ${values.title}`}</h6>
              <h6>{`Description: ${values.description}`}</h6>
              <h6>{`Estimated Time: ${values.estimatedtime}`}</h6>
              <h6>{`Date: ${values.date}`}</h6>
              <h6>{`Amount: ${values.amount}`}</h6>
              <h6>{`Users count: ${values.count}`}</h6>
              <div className=" d-flex justify-content-end">
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    default:
      return;
  }
}
const CreateUser = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <div className="p-2">
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="contain bg-white p-2 mt-3">
          {StepContent(activeStep)}
        </div>
        <hr className="mt-2" />
        {activeStep !== 2 ? (
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CreateUser;
