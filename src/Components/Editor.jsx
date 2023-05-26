import React, { useState } from "react";
import { useSelector } from "react-redux";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";

import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/ext-language_tools";
import {
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  TextField,
} from "@mui/material";

const Editor = () => {
  const { editor } = useSelector((state) => state.read);
  const [value, setNewValue] = useState("");
  const [data, setData] = useState("");
  const [language, setLanguage] = useState(editor.language);
  const [theme, setTheme] = useState("monokai");
  // const handleLanguage = (event) => {
  //   setLanguage(event.target.value);
  // };
  const handleTheme = (event) => {
    setTheme(event.target.value);
  };
  function onChangeeditor(newValue) {
    setNewValue(newValue);
  }

  function getLanguage() {
    let lang = "";
    if (language === "javascript") lang = "js";
    if (language === "python") lang = "py";
    if (language === "java") lang = "java";
    if (language === "c_cpp") lang = "cpp";

    return lang;
  }
  const sendValue = async (value) => {
    const res = await fetch("https://api.codex.jaagrav.in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: value,
        language: getLanguage(),
      }),
    });
    const resData = await res.json();
    setData(resData);
  };
  // console.log(data);
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div
            className="col-lg-5 p-2 position-fixed"
            style={{
              background: "#f1f1f1",
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <h6 style={{ fontWeight: "600" }}>Objective</h6>
            <pre
              style={{
                overflow: "hidden",
                fontSize: "14px",
              }}
            >
              {editor.question}
            </pre>
            <h6 className="mt-2" style={{ fontWeight: "600" }}>
              Sample Output
            </h6>
            <p className="bg-white p-2">{editor.sampleOutput}</p>
          </div>

          <div className="d-flex justify-content-end mt-3 mb-1">
            <div style={{ marginRight: "1%" }}>
              <TextField
                id="outlined-basic"
                label="language"
                variant="outlined"
                value={language}
              />
            </div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={theme}
                  label="theme"
                  onChange={handleTheme}
                >
                  <MenuItem value={"monokai"}>Dark</MenuItem>
                  <MenuItem value={"xcode"}>light</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="col-lg-6 bg-light" style={{ marginLeft: "42%" }}>
            <AceEditor
              height="80vh"
              width="117%"
              minHeight="2 lines"
              fontSize="16px"
              fontFamily="Inconsolata"
              enableBasicAutocompletion={true}
              enableLiveAutocompletion={true}
              defaultValue={editor.default}
              mode={`${language}`}
              setOptions={{ useWorker: false }}
              theme={`${theme}`}
              onChange={onChangeeditor}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
          <div className="d-flex justify-content-end mt-2 pb-3">
            <div style={{ marginRight: "1%" }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "grey",
                  borderColor: "white",
                }}
                onClick={() => sendValue(value, language)}
              >
                Run code
              </Button>
            </div>
            <Button
              variant="contained"
              color="success"
              onClick={() => sendValue(value, language)}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="col-lg-6" style={{ marginLeft: "43%", width: "55vw" }}>
        {data === "" ? (
          ""
        ) : data.output === editor.sampleOutput ? (
          <div className=" my-3 p-3 ">
            <div className="row mt-2 ">
              <div className="col-3">
                <h5 className="text-success">Test Case 1</h5>
              </div>
              <div className="col-4">
                <p>Compile message</p>
                <input
                  type="text"
                  value={data.status}
                  style={{
                    border: "2px solid green",
                    padding: "2px",
                    width: "120%",
                  }}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3">
                <h5 className="text-success">Test Case 2</h5>
              </div>
              <div className="col-4">
                <p>Expected output</p>
                <input
                  type="text"
                  value={editor.sampleOutput}
                  style={{
                    border: "2px solid green",
                    padding: "2px",
                    width: "120%",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 p-3" style={{ background: "MediumSeaGreen" }}>
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="text-white">Congratulation</h3>
                  <p className="text-white">
                    You solved this challenge,Would you like to challenge your
                    friends
                  </p>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => sendValue(value, language)}
                  >
                    Next Challenge
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" my-3 p-3">
            <div className="row mt-2 ">
              <div className="col-3">
                <h5 className="text-danger">Test Case 1</h5>
              </div>
              <div className="col-4">
                <p>Compile message</p>
                <input
                  type="text"
                  value="Wrong answer"
                  style={{
                    border: "2px solid red",
                    padding: "2px",
                    width: "120%",
                  }}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3">
                <h5 className="text-danger">Test Case 2</h5>
              </div>
              <div className="col-4">
                <p>Expected output</p>
                <input
                  type="text"
                  value={editor.sampleOutput}
                  style={{
                    border: "2px solid red",
                    padding: "2px",
                    width: "120%",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 p-3" style={{ background: "#C34A2C" }}>
              <div>
                <h3 className="text-white">Sorry</h3>
                <p className="text-white">
                  You not solved this challenge,Please try again
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Editor;
