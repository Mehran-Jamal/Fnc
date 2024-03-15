exports.handler = async (event) => {
  const { input } = JSON.parse(event.body);
  const output = Buffer.from(input).toString('base64');

  return {
    statusCode: 200,
    body: JSON.stringify({ output }),
  };
};
