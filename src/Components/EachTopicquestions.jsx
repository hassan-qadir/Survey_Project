import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editordata } from "../feature/ReadSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const EachTopicquestions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.read);
  return (
    <>
      <div className="container-fluid bg-light" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-lg-12 mt-4">
            {item.map((element) => {
              return (
                <>
                  <div
                    className="d-flex justify-content-between bg-white mt-3 p-4"
                    style={{ border: "1px solid lightgrey" }}
                  >
                    <div>
                      <h5>{element.title}</h5>
                      <p>{element.Marks}</p>
                    </div>
                    <div>
                      <CiStar size={25} />
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          dispatch(Editordata(element));
                          navigate("/Editor");
                        }}
                      >
                        Solve chellenge
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EachTopicquestions;
