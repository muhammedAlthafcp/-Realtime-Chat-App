import Message from "../models/messages.js";
import User from "../models/Users.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user?._id; // ✅ safer check
        console.log(loggedInUserId, "hello");

    if (!loggedInUserId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    console.log(loggedInUserId, "hello");

    // Example: fetch all users except the logged-in user
    const contacts = await User.find({ _id: { $ne: loggedInUserId } });

    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

