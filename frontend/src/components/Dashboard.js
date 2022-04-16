import "./bootstrap.css"
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
  selectUserReservations,} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Dashboard = (props) => {
  const userName = useSelector(selectUserName);
  const reservations = useSelector(selectUserReservations);
  const reserved = []
  const reservedForDisplay = []
  reservations.forEach(a => reserved.push(a.array))
  reserved.map(function(reservation) {
    reservedForDisplay.push(<div className="card" key={reservation}>
    <div className="card-body" >
    <div className="flex flex-column align-items-center text-left">
        <div className="row">
        <h2 className="d-flex align-items-center text-info mb-5">🎟 Movie Ticket 🎟</h2>
        </div>
        <div className="row">
          <div className="col-sm-3"><h6 className="mb-0">Title</h6></div>
          <div className="col-sm-9 text-secondary">{reservation[0]}</div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-3"><h6 className="mb-0">Theatre</h6></div>
          <div className="col-sm-9 text-secondary">{reservation[1]}</div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-3"><h6 className="mb-0">Date</h6></div>
          <div className="col-sm-9 text-secondary">{reservation[2]}</div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-3"><h6 className="mb-0">Time</h6></div>
          <div className="col-sm-9 text-secondary">{reservation[3]}</div>
        </div>
        <hr/>
      </div>
    </div>
  </div>)
  })

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">

            {/* User Icon */}
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                  <div className="mt-3">
                    <h3>John Doe</h3>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="card">
              <div className="card-body">
                <div className="flex flex-column align-items-center text-left">
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Name</h6></div>
                    <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                    <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Phone</h6></div>
                    <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Mobile</h6></div>
                    <div className="col-sm-9 text-secondary">(320) 380-4539</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Address</h6></div>
                    <div className="col-sm-9 text-secondary">Bay Area, San Francisco, CA</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

            {/* Reserved Movies Starts Here */}
            {reservedForDisplay}

            <div className="card">
              <div className="card-body">
              <div className="flex flex-column align-items-center text-left">
                  <div className="row">
                  <h2 className="d-flex align-items-center text-info mb-5" >🎟 Movie Ticket 🎟</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Title</h6></div>
                    <div className="col-sm-9 text-secondary">Frozon II</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Theatre</h6></div>
                    <div className="col-sm-9 text-secondary">Ithaca Movie Center</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Date</h6></div>
                    <div className="col-sm-9 text-secondary">May 28, 2022</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Time</h6></div>
                    <div className="col-sm-9 text-secondary">14:45 - 17:00</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="flex flex-column align-items-center text-left">
                  <div className="row">
                    <h2 className="d-flex align-items-center text-info mb-5" style={h2Style}>🎟 Movie Ticket 🎟</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Title</h6></div>
                    <div className="col-sm-9 text-secondary">Frozon II</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Theatre</h6></div>
                    <div className="col-sm-9 text-secondary">Ithaca Movie Center</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Date</h6></div>
                    <div className="col-sm-9 text-secondary">May 28, 2022</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Time</h6></div>
                    <div className="col-sm-9 text-secondary">14:45 - 17:00</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="flex flex-column align-items-center text-left">
                  <div className="row">
                    <h2 className="d-flex align-items-center text-info mb-5">🎟 Movie Ticket 🎟</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Title</h6></div>
                    <div className="col-sm-9 text-secondary">Frozon II</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Theatre</h6></div>
                    <div className="col-sm-9 text-secondary">Ithaca Movie Center</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Date</h6></div>
                    <div className="col-sm-9 text-secondary">May 28, 2022</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3"><h6 className="mb-0">Time</h6></div>
                    <div className="col-sm-9 text-secondary">14:45 - 17:00</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const h2Style = {
  "textAlign": 'center',
}

export default Dashboard;
