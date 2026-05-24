exports.handler = async (event) => {
  try {
    const params = new URLSearchParams(event.body);

    const name = params.get("name");
    const attendance = params.get("attendance");
    const comment = params.get("comment");

    const now = new Date();

    const date =
      now.toLocaleDateString("ru-RU") +
      " " +
      now.toLocaleTimeString("ru-RU");

    console.log({
      date,
      name,
      attendance,
      comment
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.toString()
      })
    };
  }
};