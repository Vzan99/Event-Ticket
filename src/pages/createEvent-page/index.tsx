export default function CreateEvent() {
  return (
    <div>
      <div className="page-details">
        <div className="card-create-event">
          <div className="title2">Create Your New Event!</div>
          <div className="card-text-group-divider">
            {/* Left Part */}
            <div className="card-text-group">
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Event Name</div>
                </div>
                <input className="text-box" placeholder="Event Name"></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Price</div>
                </div>
                <input className="text-box" placeholder="IDR"></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Start Date</div>
                </div>
                <input
                  className="text-box"
                  placeholder="DD/MM/YYYY"
                  type="date"
                ></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">End Date</div>
                </div>
                <input
                  className="text-box"
                  placeholder="DD/MM/YYYY"
                  type="date"
                ></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Available Seats</div>
                </div>
                <input
                  className="text-box"
                  placeholder="Available Seats"
                ></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Description</div>
                </div>
                <textarea
                  className="text-box-large"
                  placeholder="Give a brief description of the events"
                ></textarea>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Ticket Types</div>
                </div>
                <input className="text-box" placeholder="Ticket Types"></input>
              </div>
            </div>

            {/* Right Part */}
            <div className="card-text-group">
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Promotion Code</div>
                </div>
                <input
                  className="text-box"
                  placeholder="Create your own promotion code"
                ></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Discount Amount</div>
                </div>
                <input className="text-box" placeholder="IDR"></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">Start Date Voucher</div>
                </div>
                <input
                  className="text-box"
                  placeholder="DD/MM/YYYY"
                  type="date"
                ></input>
              </div>
              <div className="text-box-wrapper">
                <div className="text-box-divider">
                  <div className="card-text">End Date Voucher</div>
                </div>
                <input
                  className="text-box"
                  placeholder="DD/MM/YYYY"
                  type="date"
                ></input>
              </div>

              <button className="buttonC">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
