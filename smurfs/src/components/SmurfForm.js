import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/actions';

const SmurfForm = () => {
   const dispatch = useDispatch()

   const [smurfToPost, setSmurfToPost] = useState({
      name: '',
      age: '',
      height: '',
   })
   
   const handleChange = e => {
      setSmurfToPost({...smurfToPost, [e.target.name]: e.target.value})   
   }

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(postData(smurfToPost));
      setSmurfToPost({
         name: '',
         age: '',
         height: '',
         id: Date.now()
      })
   }

   return (
      <form onSubmit={handleSubmit}>
         <input onChange={handleChange} type='text' name='name'  placeholder='Name' />
         <input onChange={handleChange} type='number' name='age'  placeholder='Age' />
         <input onChange={handleChange} type='text' name='height'  placeholder='Height' />
         <button>Add Smurf</button>
      </form>
   )
}

export default SmurfForm;