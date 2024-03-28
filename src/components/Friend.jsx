import { useState } from "react";

export default function Friend({
  id,
  name,
  imgSrc,
  balance,
  onSelectFriend,
  selectedFriend,
}) {
  const handleSelectFriend = () => {
    const friend = {
      id,
      name,
      imgSrc,
      balance,
    };

    onSelectFriend(friend);
  };

  const isSelected = selectedFriend.id === id;
  return (
    <div
      className={`friend py-2 rounded-2 mt-1 ${
        isSelected ? "bg-light-color" : ""
      }`}
    >
      <img src={imgSrc} alt={name} className="avatar" />
      <div className="text">
        <h5 className="name fw-bold">{name}</h5>
        <div
          className={`msg ${balance > 0 ? "green" : balance < 0 ? "red" : ""}`}
        >
          {balance > 0
            ? `${name} owes you ${balance} $`
            : balance === 0
            ? `You and ${name} are even`
            : `You owe ${name} ${-balance} $`}
        </div>
      </div>

      <button
        className="bg-dark-color btn rounded-2 ms-auto border-0 py-1"
        onClick={() => {
          handleSelectFriend();
        }}
      >
        {isSelected ? "Close" : "Select"}
      </button>
    </div>
  );
}
