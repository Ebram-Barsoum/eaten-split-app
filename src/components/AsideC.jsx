import FriendsList from "./FriendsList";
import AddFriendForm from "./AddFriendForm";
import React, { useState } from "react";

export default function AsideC({
  friends,
  addFriend,
  onSelectFriend,
  selectedFriend,
}) {
  const [formOpened, setFormOpened] = useState(false);
  const toggleForm = () => {
    setFormOpened((formOpened) => !formOpened);
  };

  return (
    <div className="">
      <FriendsList
        friends={friends}
        onSelectFriend={onSelectFriend}
        selectedFriend={selectedFriend}
      />
      {formOpened && (
        <AddFriendForm onSubmit={addFriend} toggleForm={toggleForm} />
      )}
      <button
        className="bg-dark-color border-0 btn ms-auto mt-3 px-4"
        onClick={toggleForm}
      >
        {formOpened ? "Close" : "ADD FRIEND"}
      </button>
    </div>
  );
}
