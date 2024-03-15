module.exports = async (req, res) => {
  const { input } = req.body;
  const output = Buffer.from(input).toString('base64');
  res.json({ output });
};
