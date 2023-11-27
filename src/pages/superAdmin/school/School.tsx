import { useSelector , useDispatch } from "react-redux"
import { setTest } from "../../../features/testSlice";
import {  useState } from "react";
const School = () => {
  const dispatch=useDispatch()
  const testvalue = useSelector((state:{'testSlice':{'test':''}})=>state.testSlice.test)
  const student = useSelector((state:{'testSlice':{'student':''}})=>state.testSlice.student)

 
  const [mytest,setMyTest]=useState('')
  const onInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setMyTest(e.target.value)
}

  const submitForm=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
   dispatch(setTest(mytest))   
  }
  
  return (
    <>
    <div>School</div>
    {testvalue}
    <form onSubmit={submitForm}>
    <input type="text" placeholder="settest" name='maytest' onChange={(e)=>onInputChange(e)}  />
    <button type="submit" >update test</button>
    </form>
    </>
  )
}

export default School