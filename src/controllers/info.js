import { StatusCodes } from "http-status-codes";
export const info=(req,res)=>{
   res.status(StatusCodes.OK).json({
    status:true,
    message:"Api is live",
    error:[],
    data:[]
   });;
}