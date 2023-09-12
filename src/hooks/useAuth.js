import { useAppSelector } from "./redux";

export function useAuth (){
  const {id, email, token} = useAppSelector((state)=> state.userSlice);
  return{
    isAuth : !!email, //이메일 정보가 있으면 true
    email, id, token
  }
}
 