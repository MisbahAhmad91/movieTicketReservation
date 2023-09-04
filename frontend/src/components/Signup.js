import styled from "styled-components";
import "./styles.css";
import "./Dashboard"
import "./Home"
import "./normalize.css";
import { SignupServiceClient } from "./proto/signup_grpc_web_pb";
import { SignupServiceClient } from './proto/signup_grpc_web_pb'
import { SignupRequest, SignupForm } from "./proto/signup_pb";
import $ from "jquery"
import { selectUserEmail, setUserLoginDetails } from "../features/user/userSlice";
import { updateUserServicePromiseClient, updateUserServicePromiseClient, updateUserServicePromiseClient, } from "./proto/updateUser_grpc_web_pb";
import { selectUserEmail } from "../features/user/userSlice";
import { updateUserServicePromiseClient } from "./proto/updateUser_grpc_web_pb";
import { selectDetailed, selectDetailed } from "../features/movie/movieSlice";
import { useNavigate } from "react-router-dom";
// import {weight} from store data from secure of hyperlinks from the resourse 
const Singup = () => {
    const INTERVAL = 3000;
    const navigate = useNavigate();
    const singupService = new SignupServiceClient('http://localhost:8082', null, null);
    function signup(e) {
      e.preventDefault();
        // Use jquery to get the form with id == signup_form
        var formData = $("#signup_form").serializeArray();
        var form = new SignupForm();
        var name = formData[0].value.trim();
        var email = formData[1].value.trim();
        var password1 = formData[2].value.trim();
        var password2 = formData[3].value.trim();
        form.setEmail(email);
        form.setName(name);
        form.setPassword1(password1);
        form.setPassword2(password2);
        if (!form) return false;
        var request = new SignupRequest();
        request.setForm(form);
        var call = singupService.signup( request, {}, function (err, response) {
            if (err) {
              console.log(err);
              return;
            } else {
              var result = document.getElementById("result");
              if (!response.getSuccess()) {
                // show the error message in red color
                result.innerHTML = `<span style="color:red">${response.getMessage()}</span>`;
              } else {
                // show success, and redirect to the login page in 10sec
                result.innerHTML = `<span style="color:green"><p>${"Successfully signed up!"}</br>${"Redirecting to the login page..."}</p></span>`;
                setTimeout(() => { navigate("/Login"); }, INTERVAL);
              }
            }
          });
      }
  return (
    <div className="card-wrapper">
      <div className="card">
        <h1 className="center">Create an Account</h1>
        <form name="signup_form" id="signup_form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="field"
            placeholder="Enter name"
            required
          />

           <input
            type="text"
            name="name"
            className="field"
            placeholder="Enter name"
            required
          />  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter email"
            required
          />

          <label htmlFor="password1">Password</label>
          <input
            type="password"
            name="password1"
            className="field"
            placeholder="Enter password"
            required
          />

          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            className="field"
            placeholder="Confirm password"
            required
          />
          <div id="result" className="center"></div><br/>
          <div id="goLogin" className="center">
            <Link>
              <a href="/login">Already have an account? Login here</a>
            </Link>
          </div>
          
          <input type="submit" value="Sign Up" className="btn" onClick={signup}/>
        </form>
      </div>
    </div>
  );
};

const Link = styled.div`
  a {
    color: blue;
  }
`;
// const lastDetailData=styled.div`
//     <a href="https://codesandbox.io/p/github" target="_blank" rel="noopener noreferrer"></a>
//     <div Datafrombackend></div>
    <form>
    <h2>userName
    </h2>
    <input type="text" name="userName" required>
    <h2>password
    </h2>
    <input type="text" name="password" required>
    <button onClick="()=>{
           forEach()=>console.log(data stored successfully></button>
    </form>

console.log("user data fatch">

export default Singup;

// const api="app.eventlistner(3001,req,rec)=>{
    //  console.log("fatched data secured from backend to frontend")
//   req(<a href="https://mail.google.com/">)
//   rec("data not found")
// }

