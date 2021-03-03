import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner(props){
    const { promiseInProgress } = usePromiseTracker();
  
    return (
      promiseInProgress && (
        <CircularProgress></CircularProgress>
      )
    );
  };