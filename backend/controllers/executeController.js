const { runCode } = require("../services/dockerService");

const executeCode = async (req, res) => {
  try {

    const { language, code } = req.body;

    const output = await runCode(language, code);

    res.json({
      output,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
};

module.exports = {
  executeCode,
};