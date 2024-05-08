
import React from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import Button from '@mui/material/Button';
import * as color from '../Assets/Colors/color';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import GetAppIcon from '@mui/icons-material/GetApp';
import './css/share.css';
import choose from "../Assets/Lottie/choose.json";
import download from "../Assets/Lottie/download.json";
import openingapp from "../Assets/Lottie/openingapp.json";
import downloaddone from "../Assets/Lottie/downloaddone.json";

export default function ShareScreen() {
  const { movieid, movietitle } = useParams();
  console.log(movieid, movietitle)
  const [state, setState] = React.useState("choose");
  const [dynamicLink, setDynamicLink] = React.useState("");
  React.useEffect(() => {
    setDynamicLink(`cinepulse://app/movie/${movieid}/${movietitle}`);
  }, [movieid, movietitle]);

  function openCinepulse() {
    window.location.href = dynamicLink;
  }

  const openInAppHandler = () => {
    setState("openingapp");
    setTimeout(() => {
      openCinepulse();
      setState("choose");
    }, 5000);
  };

  const noFromChooseHandler = () => {
    setState("download");
  };

  const downloadAppHandler = () => {
    setState("downloaddone");
  };

  return (
    <div className="container">
      <div className="middle">
        {(state === "choose") ? (
          <>
            <Lottie className='animation' animationData={choose} loop={true} />
            <div className='roboto-bold lightText1 message' style={{ fontSize: 20, marginTop: 10, marginBottom: 15 }}>Do you have CinePulse app installed on your phone?</div>
            <Button variant="outlined" startIcon={<DoneIcon />} onClick={openInAppHandler}>Yes</Button>
            <Button variant="outlined" startIcon={<CloseIcon />} onClick={noFromChooseHandler}>No</Button>
          </>
        ) : (state === "download") ? (
          <>
            <Lottie className='animation' animationData={download} loop={true} />
            <div className='roboto-bold lightText1 message' style={{ fontSize: 20, marginTop: 10, marginBottom: 15 }}>Please download and install our app to use share feature of cinepulse app.</div>
            <Button variant="text" startIcon={<GetAppIcon />} onClick={downloadAppHandler}>Download Cinepulse App!</Button>
          </>
        ) : (state === "downloaddone") ? (
          <>
            <Lottie className='animation' animationData={downloaddone} loop={true} />
             <div className='roboto-bold lightText1 message' style={{ fontSize: 20, marginTop: 10, marginBottom: 15 }}>Click below if you have completed download and installalation process of our app.</div>
            <Button variant="text" startIcon={<GetAppIcon />} onClick={openInAppHandler}>Open Cinepulse App!</Button>
          </>
        ) : (
          <>
            <Lottie className='animation' animationData={openingapp} loop={true} />
           <div className='roboto-bold lightText1 message' style={{ fontSize: 20, marginTop: 10, marginBottom: 15 }}>Opening our app....</div>
            <div id="timer-display"></div>
          </>
        )}
      </div>
    </div>
  );
}
