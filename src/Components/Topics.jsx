import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filterdata } from "../feature/ReadSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Topics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.read);
  const uniqueElement = [
    ...new Set(
      question.map((curElm) => {
        return curElm.catageory;
      })
    ),
  ];

  return (
    <>
      <div
        className="container my-5 p-4"
        style={{ background: "var(--primary-color)", height: "15vh" }}
      >
        <h3 className="text-white">Prepare By Topics</h3>
        <div className="container bg-light p-5">
          <div className="row">
            {uniqueElement.map((elmCur) => {
              return (
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    width: "20%",
                    padding: "10px",
                    marginRight: "10px",
                  }}
                  onClick={() => {
                    dispatch(Filterdata(elmCur));
                    navigate("/EachTopicquestions");
                  }}
                >
                  {elmCur}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
