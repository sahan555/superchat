import { auth } from '../config/firebase'

const SignOut = () => {
  return auth.currentUser &&(
   <button onClick={()=>auth.signOut()}></button>
  )
}

export default SignOut
