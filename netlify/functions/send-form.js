const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzACM0al5yKqzIlXs1wwwNC5VecYCb2irtEzUVP5YDOMo_lce4myeklTV-09-7QtRjV/exec';

exports.handler = async (event) => {
  try {
    const params = new URLSearchParams(event.body);

    const name = params.get('name') || '';
    const attendance = params.get('attendance') || '';
    const comment = params.get('comment') || '';

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        name,
        attendance,
        comment
      })
    });

    const text = await response.text();
console.log('Google Script response:', text);

if (!response.ok) {
throw new Error('Google Script error: ' + text);
}

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.log('ОШИБКА:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.toString()
      })
    };
  }
};
