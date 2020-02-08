import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions";

const SmurfsList = (props) => {
   const smurfs = useSelector(state => state.smurfs)
   const dispatch = useDispatch()

   useEffect (() => {
      dispatch(getData());
   }, [dispatch])

   return (
      <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        smurfs.map(smurf => <div key={smurf.id}>{smurf.name}</div>)
      )}
    </>
   )
} 

export default SmurfsList;