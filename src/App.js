// import { collection, onSnapshot, doc, setDoc, addDoc } from 'firebase/firestore';
// import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
// import { db } from './firebase';

function App() {
  // const [data, setData] = useState([])
  // const [name, setName] = useState('')
  // const [location, setLocation] = useState('')
  // const [msg, setMsg] = useState('Add')
  // const [isLoading, setIsLoading] = useState(true)
  // console.log(data)

  // Get data from firestore

  // useEffect(()=>{
  //   onSnapshot(collection(db, "messages"), (snapshot)=>{
  //     setData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
  //   })
  // },
  // []
  // ) 

// set data inside firestore

  // const Hawa = async(eve)=>{
  //   eve.preventDefault()
  //   const collectionref = collection(db, "messages")
  //   const payload = {name,location}
  //   {isLoading && setMsg('Adding...')}

  //   try{
  //     await addDoc(collectionref, payload)
  //     // alert('Data submitted')
  //     setName('')
  //     setLocation('')
  //     setIsLoading(false)
  //     setMsg('Added')
  //   }catch(err){
  //     console.log(err)
  //   }

  // }
  return (
    <div className="App">
      <Chat/>
    </div>
  );
}

export default App;
