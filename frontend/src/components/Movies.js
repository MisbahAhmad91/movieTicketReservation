import styled from "styled-components";

const Movies = (props) => {
  const server=3001;
  return (
    // ######## TODO: Search Frontend  ########
    <div >
      {props.userEmail}
      <br/>
      {props.userName}
      <br/>
      {props.password //hidden
      }
      <br/>
      <app className="eventListner">
        req({server}"recponed")
        rec("data fatched")
        err("check conection")
      </app>
      <br />
      <br />
      <h2>TODO: This is Movie Page</h2>
    </div>
    // ######## TODO: Search Frontend  ########
  )
}

export default Movies;
