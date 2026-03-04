import React, {useContext} from 'react'
// import { UserContext } from '../App.jsx'
import { ThemeContext , UserContext} from '../App.jsx'

const ChildC = () => {
    const user = useContext(UserContext);

    const { theme , setTheme} = useContext(ThemeContext);

    function handleClick(){
        if(theme === 'light'){
            setTheme("dark");
        }else{
            setTheme('light');
        }
    }


  return (
    <div>     

      <button onClick={handleClick}>
        Change theme 
      </button>
      data : {user.name}
    </div>
    
  )
}

export default ChildC
