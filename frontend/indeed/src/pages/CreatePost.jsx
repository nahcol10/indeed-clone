import {
  Box,
  Button,
  FormControl,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook instead of Navigate
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import { routePath } from "../routers/route";
import { savePost } from "../services/api";

const WholeBody = styled(Box)({
  background: "#d2dae2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const PicWrapper = styled(Box)({
  position: "relative",
  height: "35%",
  width: "70%",
  marginTop: "10px",
  padding: 20,
  background: "#ffffff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "& > img": {
    width: "250px",
    marginRight: "10%",
  },
});

const StyledTypography = styled(Typography)({
  maxWidth: "500px",
  padding: "10px",
  width: "40%",
  fontWeight: 1000,
  fontSize: "20pt",
});

const StyledFormControl = styled(FormControl)({
  width: "70%",
  height: "60%",
  display: "flex",
  background: "#FFFFFF",
  flexDirection: "column",
  marginTop: "10px",
  padding: 20,
  borderRadius: "3px",
  "& > *": {
    marginTop: "20px !important",
  },
});

const defaultObj = {
  profile: "",
  type: "",
  description: "",
  experience: "",
  technology: [],
  salary: "",
};

const options = {
  type: ["online", "Offline"],
  experience: ["0-2 years", "3-5 years", "5-8 years", "8 and more years"],
  technology: [
    "java",
    "javascript",
    "angular",
    "react",
    "node.js",
    "docker",
    "AWS",
    "HTML",
    "css",
    "c",
    "ruby",
  ],
  salary: [
    "Rs 0-300000",
    "Rs 300000-500000",
    "Rs 500000 - 800000",
    "Rs 800000-1300000",
    "Rs 1300000 and more",
  ],
};

function CreatePost() {
  const [data, setData] = useState(defaultObj);
  const navigate = useNavigate(); // using useNavigate hook

  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "technology") {
      // Handle multi-select values for technology
      setData({
        ...data,
        [name]: typeof value === "string" ? value.split(",") : value,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const saveJob = async () => {
    await savePost(data);
    navigate(routePath.home); // Using navigate from the useNavigate hook
  };

  return (
    <>
      <Header />
      <WholeBody>
        <PicWrapper>
          <StyledTypography>Create a Job Post</StyledTypography>
          <img src={image} alt="create" />
        </PicWrapper>
        <StyledFormControl>
          <TextField
            id="job-title"
            placeholder="Job Title"
            name="profile"
            onChange={handleChange}
            value={data.profile}
          />
          <Dropdown
            label="Job Type"
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            options={options.type}
          />
          <TextField
            id="outlined-description"
            placeholder="Job Description"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
          <Dropdown
            label="Experience"
            id="job-experience-label"
            handleChange={handleChange}
            name="experience"
            value={data.experience}
            options={options.experience}
          />
          <Dropdown
            label="Technology"
            id="job-technology-label"
            handleChange={handleChange}
            name="technology"
            value={data.technology}
            options={options.technology}
            multiple
          />
          <Dropdown
            label="Salary"
            id="job-salary-label"
            handleChange={handleChange}
            name="salary"
            value={data.salary}
            options={options.salary}
          />
          <Button
            onClick={saveJob}
            variant="contained"
            style={{ background: "red" }}
          >
            Submit
          </Button>
        </StyledFormControl>
      </WholeBody>
    </>
  );
}

export default CreatePost;
