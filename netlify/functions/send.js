exports.handler = async (event) => {

 try{

  const data =
  JSON.parse(event.body);

  const uid =
  data.uid;

  const item =
  data.item;

  const photo =
  data.photo;


  const BOT_TOKEN =
  "8960233712:AAFe7KEsj2BLb4AjwIiy5KQEdlke8CFmeLw";

  const CHAT_ID =
  "7090493537";


  const caption =

`🎮 New Order

UID: ${uid}

Top Up: ${item}`;


  await fetch(

  `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,

  {

   method:"POST",

   headers:{
    "Content-Type":"application/json"
   },

   body: JSON.stringify({

    chat_id: CHAT_ID,

    photo: photo,

    caption: caption

   })

  }

  );


  return{

   statusCode:200,

   body:JSON.stringify({

    success:true

   })

  };

 }catch(error){

  return{

   statusCode:500,

   body:error.toString()

  };

 }

};