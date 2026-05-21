exports.handler = async (event) => {

 const data = JSON.parse(event.body);

 const uid = data.uid;

 const item = data.item;

 const BOT_TOKEN =
 "8960233712:AAFe7KEsj2BLb4AjwIiy5KQEdlke8CFmeLw";

 const CHAT_ID =
 "7090493537";

 const message =

`🎮 New Order

UID: ${uid}

Top Up: ${item}`;

 await fetch(

`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,

 {

  method:"POST",

  headers:{
   "Content-Type":"application/json"
  },

  body: JSON.stringify({

   chat_id: CHAT_ID,

   text: message

  })

 }

 );

 return {

  statusCode:200,

  body:JSON.stringify({

   success:true

  })

 };

};
