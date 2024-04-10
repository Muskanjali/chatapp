import { useCallback } from "react";
import { createContext, useState } from "react";
export const AutoContext = createContext;
export const AutoContextPro = ({ children }) => {
    const [user, setUser] = useState(null);
    const [regInfo, setRegInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    const userInfo=useState((info)=>{
        setRegInfo(info)},[]);
        //effect perform
    useEffect=(()=>{
        const user=localStorage.getItem("user");
        setUser(JSON.parse(user));
    })
        //to provide registartion error
    const [regError,setRegError]=useState(null);
    //provide registered useer list
    const[listofregLoading,setListofregLoading]=useState(false);

    //create reg user function
    const regUser=useCallback(async(e)=>{
        e.preventDefault();
        const response =await PostRequest(`${MURL}/user/reg`);
        JSON.stringify(regInfo);
        if(response.json){
            return setRegError(response);
        }
            localStorage.setItem("user", JSON.stringify(response));
            setUser(response);

        setListofregLoading(true);
        setRegError(false);
    
    } );
    //show user registration
    localStorage.setItem("user",JSON.stringify(response),
    [regInfo]);
    //logout user 
    const logoutUser=useCallback(()=>{
        localStorage.removeItem("user");
        setUser(null);
    })
    return ( 
         <AutoContext.provide value={{user,regInfo,userInfo,regUser,regError,logoutUser}}>{children}</AutoContext.provide>
     );
}