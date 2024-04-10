export const MURL="https//localhost:5000/api";
export const PostRequest=async(url,body)=>{
 const response=await fetch(url,{
    method: "POST",
    Header:{"Content-Type":"application/json"},
    body,
 });
 const data=await response.JSON();
 if(!response.ok){
    let message;
    if(data?message){
        message=data.message;
       }
        else{
            message=data;
        }
    return{error:true,message}
 }
 return data;
}