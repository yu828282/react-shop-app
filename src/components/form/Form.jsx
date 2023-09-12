import React, {FC} from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'
import { FieldValue } from 'firebase/firestore';


const Form = ({title, getDataForm, firebaseError} ) => {

  const {register, handleSubmit, formState : {errors}, reset } = useForm({
    mode : 'onBlur' // 유효성 검사를 어느 동작때 시행할지 설정가능
  })

  const onSubmit = ({email, password}) => { //react-hook-form에서 제공하는 타입
    getDataForm(email, password);
    reset();
  }

  const userEmail = {
    required: "필수 필드입니다."
  }

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {value: 6, message: "최소 6자입니다." },
    maxLength: {value: 13, message: "최대 13자입니다." },
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='email' placeholder='이메일을 입력해주세요.' {...register('email', userEmail)}></input>
        {errors?.email &&
         <div><span className={styles.form_error}>{errors.email.message}</span></div>
        }
      </div>            
      <div>
        <input type='password' placeholder='비밀번호을 입력해주세요.' {...register('password', userPassword)}></input>
        {errors?.password &&
         <div><span className={styles.form_error}>{errors.password.message}</span></div>
        }
      </div>      
      <button type='submit'>{title}</button>
      {firebaseError && (
       <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  )
}

export default Form
