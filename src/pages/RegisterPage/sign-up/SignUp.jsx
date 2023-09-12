import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../../../firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../stores/user/user.slice'
import { setUserId } from '../../../stores/cart/cart.slice'

const SignUp = () => {
  const navigate = useNavigate()
  const [firebaseError, setFirebaseError] = useState('')

  const dispatch = useDispatch();
  const auth = getAuth(app)

  const handleSighupAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
      //리덕스 스토어에 담는 로직
      dispatch(setUser({
        email : userCredential.user.email,
        token : userCredential.user.refreshToken,
        id : userCredential.user.uid,
      }))
      dispatch(setUserId(userCredential.user.uid)); //로그인하면 cart.slice 의 초기 uid를 불러온다
      navigate('/');
    }).catch(error=>{
      return error && setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.')
    })
  }

  return (
    <Form title={'가입하기'} getDataForm = {handleSighupAndLogin} firebaseError={firebaseError}></Form>
  )
}

export default SignUp
