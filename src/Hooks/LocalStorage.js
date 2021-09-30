import {React,useState,useEffect} from 'react';
const PREFIX = "codepen-clone-"
const LocalStorage=(key,initialvalue) => {
  const prefixedKey= PREFIX+key
  const [value,SetValue]=useState(()=>{
    const jsonvalue = localStorage.getItem(prefixedKey);
    if(jsonvalue) {
      return JSON.parse(jsonvalue);
    }
    if(typeof initialvalue === 'function') {
      return initialvalue();
    }
    else{
      return initialvalue;
    }
  })
  useEffect(()=>{
    localStorage.setItem(prefixedKey,JSON.stringify(value));
  },[prefixedKey,value])
  return [value,SetValue]
}
export default LocalStorage;
