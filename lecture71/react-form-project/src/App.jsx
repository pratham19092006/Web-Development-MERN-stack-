import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitted data:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input 
        className={errors.firstName ? 'input-error': " "}
        {...register('firstName', {required: true,
         minLength: {value:3  , message: "First name must be at least 3 characters long"},
          maxLength: {value:5, message: "First name must be at most 5 characters long"}
          })} />
          {errors.firstName && <p className='error-msg'> {errors.firstName.message}</p>}  
        <br /><br />
        <label>Middle Name: </label>
        <input 
        className={errors.firstName ? 'input-error': " "}
        {...register('middleName')} />
        <br /><br />
        <label>Last Name: </label>
        <input 
        className={errors.firstName ? 'input-error': " "}
        {...register('lastName', {
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Last name must contain only letters"
          }
        })} />
        {errors.lastName && <p className='error-msg'> {errors.lastName.message}</p>}
        <br /><br />
        <input type="submit" disabled={isSubmitting}
        value = {isSubmitting ? "Submitting..." :  "Submit" }/>
      </div>
    </form>
  )
}

export default App
