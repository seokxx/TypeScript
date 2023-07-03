import React, {useState} from 'react';

function App(){

let [user, setUser] = useState<string |number>('hong')

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props:{name:string, age:string}) :JSX.Element{
  return(
    <div>{props.name}입니다.</div>
  )
}

export default App;
