import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {Button, Checkbox, Divider, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import styles from './style.module.css'

const schema = yup.object({
   Login: yup.string().required('Enter your email'),
   Password: yup.string().required('Пустой пароль').min(8, 'Пароль должен составлять 8 символов'),
}).required();

const FormModule = () => {

   const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
   });
   const onSubmit = data => console.log(data);

   return (
       <div>

          <form onSubmit={handleSubmit(onSubmit)}>
             <div>
                <Button
                    sx={{marginBottom: 3, width: '340px'}}
                    variant="outlined"
                    className={styles.googleIcon}
                >Continue with Google</Button>
                <Divider>OR</Divider>
                <p>Email Address</p>
                <TextField sx={{width: '336px' }}
                    id='outlined'
                    {...register("Login")}
                    error
                    id="outlined-error"
                    label={errors.Login?.message}
                />
             </div>
             <div>
                <p>Password</p>
                <TextField sx={{width: '336px' }}
                    {...register("Password")}
                />
                <p>{errors.Password?.message}</p>
             </div>

             <div className={styles.RememberBlock}>
                <Checkbox/> <p>Remember me</p> <p>Forgot Password?</p>
             </div>

             <Button
                 sx={{width: '336px', height: '56px'}}
                 type='submit' variant="contained">Log In</Button>
             <h4>Don't have an account?  <Link to='/password'>Sign Up</Link></h4>
          </form>
       </div>

   );
};

export default FormModule;