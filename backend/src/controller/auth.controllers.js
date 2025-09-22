export const signup = async (req, res) => {
  const { FullName, Email, Number, Password } = req.body;

  try {
    // Check required fields
    if (!FullName || !Email || !Number || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check password length
    if (Password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check if email is valid: regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // ✅ If everything is fine
    res.status(201).json({ message: "Validation passed. User can be created." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
