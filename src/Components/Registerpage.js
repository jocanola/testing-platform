import React,{ useState } from 'react';
import './Registerpage.css';

function Registerpage(){

const [register, setRegister] = useState(true);
const [email, setEmail] = useState('')
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmpassword] = useState('');
const [confirmregister, setConfirmregister] = useState('');


		return(
			<div className="register">
				<div className="register_container">
				{
					register?(	
						<>
						<h2 id="heading">Login</h2>
						<label ><h3> Email </h3></label>
						<input type="text" className="register_input" 
						onChange={(e)=>setEmail(e.target.value)}
						/>

						<label ><h3> Password </h3></label>
						<input type="password" className="register_input" 
						onChange={(e)=>setPassword(e.target.value)}
						/>

						<label ><input type="checkbox" />Remember me</label>
						<button className="button">Sign In</button>
						<p>if you have no click me <button onClick={()=>setRegister(false)} className="button_extra">Create account</button></p>

						</>
						):(

						<>
						<h2 id="heading">Create Account</h2>
						<label ><h3> Email </h3></label>
						<input type="text" className="register_input"
						onChange={(e)=>setEmail(e.target.value)} 
						/>
						<label ><h3> Password </h3></label>
						<input type="password" className="register_input" 
						onChange={(e)=>setPassword(e.target.value)}

						/>
						
						<label ><h3> Confirm Password </h3></label>
						<input type="password" className="register_input"
						onChange={e =>setConfirmpassword(e.target.value)}
						
						/>
						{(confirmpassword !== password && confirmpassword)? (<p style={{color:"red"}}>the password not match</p>):""}
						<label ><input type="checkbox" />Remember me</label>
						<button className="button">Sign up</button>
						<p>if you have an account. <button onClick={()=>setRegister(true)} className="button_extra">Login in</button></p>
						</>

						)
				}
				</div>
			</div>
		)
	
}


export default Registerpage;