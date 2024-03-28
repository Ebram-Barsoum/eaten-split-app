import { useState } from "react";

export default function AddFriendForm({ onSubmit, toggleForm }) {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("https://i.pravatar.cc/48?");

  const handleAddFriend = () => {
    if (!(name.trim("") && URL.trim(""))) return;
    const id = crypto.randomUUID();
    const friend = {
      id,
      name,
      image: URL + { id },
      balance: 0,
    };

    onSubmit(friend);
    setName("");
    setURL("");
    toggleForm();
  };

  return (
    <form
      className="form  d-flex flex-column gap-3 bg-light-color mt-5 p-3 rounded-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddFriend();
      }}
    >
      <div className="input-group d-flex align-items-center justify-content-between">
        <div className="label d-flex gap-2">
          <span className="emoji">👩🏼‍🤝‍👩🏻</span>
          <span className="text fw-bold">Friend Name</span>
        </div>

        <div className="input">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="input-group d-flex align-items-center justify-content-between">
        <div className="label d-flex gap-2">
          <span className="emoji">🖼</span>
          <span className="text fw-bold">Image URL</span>
        </div>

        <div className="input">
          <input
            type="text"
            className="form-control"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
        </div>
      </div>

      <button className="bg-dark-color border-0 btn ms-auto mt-3 col-4">
        ADD
      </button>
    </form>
  );
}
