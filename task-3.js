const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    friends: [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'Bob', lastName: 'Smith' },
      { firstName: 'Alice', lastName: 'Wonderland' },
    ],
    showFriends: function() {
      this.friends.forEach((friend) => {
        console.log(`${friend.firstName} ${friend.lastName}`);
      });
    }
  };
  
  const user2 = {
    name: "Juan",
    surname: "Hernandez",
    friends: [
      { name: "Maria", surname: "Garcia" },
      { name: "Carlos", surname: "Rodriguez" },
      { name: "Ana", surname: "Lopez" }
    ],
    showFriends: function() {
      this.friends.forEach((friend) => {
        console.log(`${friend.name} ${friend.surname}`);
      });
    }
  };
  
  user1.showFriends.call(user1);
  user2.showFriends.apply(user2);
  