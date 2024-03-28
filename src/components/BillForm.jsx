import React, { useState } from "react";

export default function BillForm({
  selectedFriend,
  setFriends,
  toggleBillForm,
}) {
  const [bill, setbill] = useState(null);
  const [payer, setPayer] = useState("You");
  const [mypart, setMyPart] = useState(null);

  const friendPart = bill - mypart;

  const handleBillSplit = () => {
    if (!(bill && payer && mypart)) return;

    setFriends((friends) => {
      const newState = friends.map((friend) => {
        if (friend.id === selectedFriend.id) {
          const currentBalance = friend.balance;

          let newFriend;
          if (payer === "You") {
            newFriend = { ...friend, balance: currentBalance + friendPart };
            return newFriend;
          } else {
            newFriend = { ...friend, balance: currentBalance - mypart };
            return newFriend;
          }
        }

        return friend;
      });

      return newState;
    });

    toggleBillForm();
  };

  return (
    <div className="d-flex flex-column justify-content-start">
      <form
        className="bill-form px-5 py-3 bg-light-color rounded-2 "
        onSubmit={(e) => {
          e.preventDefault();
          handleBillSplit();
        }}
      >
        <h3 className="fw-bold fs-4 text-uppercase ">
          SPLIT A BILL WITH {selectedFriend.name}
        </h3>

        <form className="input-group mt-3 d-flex align-items-center gap-5">
          <label className="fw-bold">💰Bill Value</label>
          <input
            type="number"
            className="form-control rounded-2 w-auto"
            onChange={(e) => {
              setbill(Number(e.target.value));
            }}
            value={null}
          />
        </form>

        <div className="input-group mt-3 d-flex align-items-center gap-5">
          <label className="fw-bold">🧍‍♂️ Your Expense</label>
          <input
            type="number"
            className="form-control rounded-2 w-auto"
            onChange={(e) => {
              setMyPart(
                Number(e.target.value) > bill ? mypart : Number(e.target.value)
              );
            }}
            value={mypart}
          />
        </div>

        <div className="input-group mt-3 d-flex align-items-center gap-5">
          <label className="fw-bold">
            👩🏼‍🤝‍🧑🏻 {selectedFriend.name}'s Expense
          </label>
          <input
            type="number"
            className="form-control rounded-2 w-auto bg-light-color"
            disabled
            value={friendPart}
          />
        </div>

        <div className="input-group mt-3 d-flex align-items-center gap-5 cursor-pointer">
          <label className="fw-bold">🤑 Who is paying the bill ?</label>
          <select
            className="form-select rounded-2 form-control w-auto "
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value="You">You</option>
            <option value={`${selectedFriend.name}`}>
              {selectedFriend.name}
            </option>
          </select>
        </div>

        <button
          className="bg-dark-color border-0 btn d-block ms-auto mt-4 fw-bold"
          type="submit"
        >
          SPLIT BILL
        </button>
      </form>
    </div>
  );
}
