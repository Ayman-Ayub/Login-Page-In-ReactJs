import logo from './logo.png';
import './App.css';

function App() {
  return (
    
   
    <body class="simple-bg-screen" style={{ 
		backgroundImage: `url("assets/img/banner-10.jpg")` 
	  }} >
    <section className="login-screen-sec" >
				<div className="container">
					<div className="login-screen">
						<a href="index-2.html"><img src={logo} className="img-responsive" alt=""></img></a>
						<form>
							<input type="text" className="form-control" placeholder="Useraname"></input>
							<input type="password" className="form-control" placeholder="Password"></input>
							<button className="btn btn-login" type="submit">Login</button>
							<span>You Have No Account? <a href="signup.html"> Create An Account</a></span>
							<span><a href="lost-password.html"> Forget Password</a></span>
						</form>
					</div>
				</div>
			</section>
			</body> 
);
}

export default App;
