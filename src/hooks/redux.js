import { useDispatch, useSelector } from "react-redux";

export const useAppdispatch = () => useDispatch(); //액션을 발생시켜서 상태값을 변경
export const useAppSelector = useSelector; //초기 상태값을 등록