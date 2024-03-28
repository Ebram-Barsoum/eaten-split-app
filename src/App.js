import { useState } from "react";
import AsideC from "./components/AsideC";
import BillForm from "./components/BillForm";

function App() {
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);
 
  const [selectedFriend, setSelectedFriend] = useState({});

  const addFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  }

  const handleSelectFriend = (friend) => {
    setSelectedFriend((current)=>current.id === friend.id?{}:friend);
  }
  
  const toggleBillForm = () => {
    setSelectedFriend({});
  }

  return (
    <div className="app d-flex flex-wrap gap-5  m-auto py-5 container">
     
      <AsideC friends={friends} addFriend={addFriend} onSelectFriend={handleSelectFriend} selectedFriend={selectedFriend} />
       
      {selectedFriend.id && <BillForm selectedFriend={selectedFriend} setFriends={setFriends} toggleBillForm={ toggleBillForm} />}
      
    </div>
  );
}

export default App;
