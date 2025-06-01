//handle the ff erros: network failures, JSON parsing erros, missing data, missing props.
async function getUserData(userId) {
 try{ 
 const user = await fetch(`/api/users/${userId}`);
   if(user.status>=200 && user.status<300){
   const userData = await user.json();
   console.log(userData.name.toUpperCase()); // What if name is undefined?
   return userData;
  }
 }catch(err){
  throw new Error(err);
 }
}
