const GOOGLE_SCRIPT_URL =
'https://script.google.com/macros/s/AKfycbzACM0al5yKqzIlXs1wwwNC5VecYCb2irtEzUVP5YDOMo_lce4myeklTV-09-7QtRjV/exec';

exports.handler = async (event) => {
try {

const data = JSON.parse(event.body);

const response = await fetch(GOOGLE_SCRIPT_URL,{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body: JSON.stringify({
name:data.name || '',
attendance:data.attendance || '',
comment:data.comment || ''
})
});

if(!response.ok){
throw new Error('Google Script error');
}

return {
statusCode:200,
body:JSON.stringify({
success:true
})
};

}catch(error){

console.log(error);

return{
statusCode:500,
body:JSON.stringify({
success:false,
error:error.toString()
})
};

}
};
