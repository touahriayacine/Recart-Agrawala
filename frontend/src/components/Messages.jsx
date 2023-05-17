function create_one_sender_messages(positions, sender_position) {
  let messages = [];
  for (const key in positions) {
    const position = positions[key];
    if (sender_position.top < position.top) {
      var top = Math.floor(sender_position.top);
      var height = Math.floor(position.top - sender_position.top);
      // var bottom = window.innerHeight - position.top;
    } else {
      // var bottom = window.innerHeight - sender_position.top;
      var top = Math.floor(position.top);
      var height = Math.floor(sender_position.top - position.top);
    }
    if (sender_position.left < position.left) {
      var left = Math.floor(sender_position.left);
      var width = Math.floor(position.left - sender_position.left);
      // var right = window.innerWidth - position.left;
      var rotation = "";
    } else {
      // var right = window.innerWidth - sender_position.left;
      var left = Math.floor(position.left);
      var width = Math.floor(sender_position.left - position.left);
      var rotation = "-";
    }
    messages.push(
      <div
        className={
          "absolute top-[" +
          top +
          "px] left-[" +
          left +
          "px] h-[" +
          height +
          "px] w-[" +
          width +
          "px] z-10"
        }
      >
        <div
          className={"bg-ok-message w-full h-2 " + rotation + "rotate-45"}
        ></div>
      </div>
    );
  }
  return messages;
}

function Messages({ messages, positions }) {
  return (
    <>
      {messages.map((message) => {
        let sender_position = positions[message];
        const one_sender_messages = create_one_sender_messages(
          positions,
          sender_position
        );
        return one_sender_messages;
      })}
    </>
  );
}

export default Messages;
