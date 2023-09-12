import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../stores/user/user.slice';
import { setUserId } from '../../../stores/cart/cart.slice';

const SignIn = () => {

  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState('');
  const dispatch = useDispatch();

  const auth = getAuth(app);
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      dispatch(setUser({
        email : userCredential.user.email,
        token : userCredential.user.refreshToken,
        id : userCredential.user.uid,
      }))
      dispatch(setUserId(userCredential.user.uid)); //로그인할때 cart.slice.js 안의 초기 userid가 들어간다
      navigate('/')}).catch(error =>{
      return error && setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.')
    })
  }

  return (
    <Form title='로그인' getDataForm={handleLogin} firebaseError={firebaseError}></Form>
  )
}

export default SignIn
