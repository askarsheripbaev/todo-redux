import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup'

const schema = yup.object({
   Login: yup.string().required('Пустой логин'),
   Password: yup.number().positive().integer().typeError('Пустой пароль').required(),
}).required();

const FormModule = () => {


   const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
   });
   const onSubmit = data => console.log(data);

   return (
       <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Login")} />
          <p>{errors.Login?.message}</p>

          <input {...register("Password")} />
          <p>{errors.Password?.message}</p>

          <input type="submit" />
       </form>
   );
};

export default FormModule;