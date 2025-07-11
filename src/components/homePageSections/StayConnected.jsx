import { useState } from "react";

const StayConnected = () => {
  const [formData, setFormData] = useState({
    userName: "",
    companyName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userName && formData.email) {
      alert("Subscription successful");
      setFormData({ userName: "", companyName: "", email: "" });
    }
  };

  return (
    <section id="stayconnect" className="bglight position-relative">
      <div className="container">
        <div className="contactus-wrapp">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="heading-title text-center text-md-left">
                <h3 className="darkcolor bottom20">Stay Connected</h3>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <form className="getin_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        required
                        name="userName"
                        style={{ fontSize: "16px" }} // Add this
                        value={formData.userName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Company"
                        name="companyName"
                        value={formData.companyName}
                        style={{ fontSize: "16px" }} // Add this
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ fontSize: "16px" }} // Add this
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <button type="submit" className="button gradient-btn w-100">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
