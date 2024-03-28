import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <div className="friends  d-flex flex-column gy-2">
      {friends.map((friend) => {
        return (
          <Friend
            name={friend.name}
            id={friend.id}
            imgSrc={friend.image}
            balance={friend.balance}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
            key={friend.id}
          />
        );
      })}
    </div>
  );
}
