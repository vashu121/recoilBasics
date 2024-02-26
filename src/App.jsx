import { countAtom, isEven } from './store/atoms/count';
import {useSetRecoilState,useRecoilValue, RecoilRoot } from 'recoil';
import './App.css'


function App() {

  return (
    <div>
       <RecoilRoot>
       <Count1 />
       </RecoilRoot>
    </div>
   
  )
}

function Count1(){
    return <div>
      <CountRerender/> 
      <Buttons/>
      <Check/>
      </div>
}

function Check(){
    const isItEven=useRecoilValue(isEven);
    return <div>
      { isItEven ? null: "Is a Even Number"}
    </div>

}
function CountRerender(){
    const count =useRecoilValue(countAtom);
    return <div>
      {count}
    </div>
}

function Buttons(){
  const setCount =useSetRecoilState(countAtom);
  console.log("re_rendered");
  return  <div>
    <button onClick= {()=> {
        setCount(count=>count+1);
      }}>Increase number</button>

      <button onClick= {()=>{
        setCount(count=>count-1);
      }}>Decrease number</button>
  </div>
}


export default App