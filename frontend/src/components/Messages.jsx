function create_request_container(
  top,
  left,
  height,
  width,
  rotation,
  down,
  sender_name,
  receiver_name,
  color
) {
  return (
    <div
      id={sender_name + "_" + receiver_name}
      className={"absolute z-10 flex items-center overflow-hidden"}
      style={{
        backgroundColor: color,
        top: top + "px",
        left: left + "px",
        height: height + "px",
        width: width + "px",
        clipPath:
          rotation == "-"
            ? down
              ? "polygon(99% 0%, 100% 0%, 1% 100%, 0% 100%)"
              : "polygon(0% 0%, 1% 0%, 100% 100%, 99% 100%)"
            : down
            ? "polygon(0% 0%, 1% 0%, 100% 100%, 99% 100%)"
            : "polygon(99% 0%, 100% 0%, 1% 100%, 0% 100%)",
      }}
    ></div>
  );
}

function create_one_sender_messages(
  positions,
  sender_position,
  sender_name,
  color
) {
  let messages = [];
  for (const key in positions) {
    let top = 0;
    let height = 0;
    let left = 0;
    let rotation = "";
    let width = 0;
    let down = true;
    const position = positions[key];
    if (sender_position.top < position.top) {
      top = Math.floor(sender_position.top);
      height = Math.floor(position.top - sender_position.top);
    } else {
      top = Math.floor(position.top);
      height = Math.floor(sender_position.top - position.top);
      down = false;
    }
    if (sender_position.left < position.left) {
      left = Math.floor(sender_position.left);
      width = Math.floor(position.left - sender_position.left);
    } else {
      left = Math.floor(position.left);
      width = Math.floor(sender_position.left - position.left);
      rotation = "-";
    }
    let container = create_request_container(
      top,
      left,
      height,
      width,
      rotation,
      down,
      sender_name,
      key,
      color
    );
    messages.push(container);
  }
  return messages;
}

function Messages({ messages, positions, all_positions, color }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full -z-10">
      <div className="h-full w-full relative">
        {messages.map((message) => {
          let sender_position = all_positions[message];
          const one_sender_messages = create_one_sender_messages(
            positions,
            sender_position,
            message,
            color
          );
          return one_sender_messages;
        })}
      </div>
    </div>
  );
}

export default Messages;
