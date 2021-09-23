import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import "./Modal.css";
const ImageWall = () => {
  const [image, setImage] = React.useState([]);
  const getImages = async () => {
    const response = await fetch(
      "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
    );
    console.log(response);
    setImage(await response.json());
  };
  useEffect(() => {
    getImages();
  }, []);
  const [model, setModel] = React.useState(false);
  const [tempImgSrc, setTempImgSrc] = React.useState("");
  const getImg = (thumb) => {
    setTempImgSrc(thumb);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="#" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
          onClick={() => setModel(false)}
        >
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </div>
      <h1
        style={{
          textAlign: "center",
          background: "#000",
          color: "white",
        }}
      >
        List Of All Images{" "}
      </h1>
      <Grid className="gallery" container>
        {image.map((myImg) => {
          return (
            <Card
              onClick={() => getImg(myImg.urls.thumb)}
              spacing={1}
              style={{ marginTop: ".5rem" }}
            >
              <img src={myImg.urls.thumb} alt="" />
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default ImageWall;
