import React from "react";
import "./styles/Demo.css";

const Demo = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-lg-6 ml-3" id="login">
            <h1>Demo Page </h1>
            <form action="/login" method="post">
              <div className="form-group">
                <label htmlFor="username">Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter Email ID"
                />
              </div>
              <div className="form-group1">
                <label htmlFor="username">Email</label> 
                <input
                  type="text"
                />
              </div>
              <div className="form-group2">
                <label htmlFor="username">Topic</label> 
                <input
                  type="text"
                />
              </div>
              <div className="form-group3">
                <label htmlFor="username">description </label> 
                <input
                  type="text"
                />
              </div>
              <div className="form-group4">
                <label htmlFor="username">Tech</label> 
                <input type="text" />
                <select>
                    <option value="apache">apache</option>
                    <option value="apache">springboot</option>
                    <option value="apache">activemq</option>
                </select>
                <select>
                    <option value="apache">apache</option>
                    <option value="apache">springboot</option>
                    <option value="apache">activemq</option>
                </select>
              </div>

              <div className="form-group5">
                <label htmlFor="username">Documentation</label>
                <input type="file" className="form-control-file form-control height-auto"
                />
              </div>

              <div className="form-group6">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <input
                      type="submit"
                      name="login-submit"
                      id="login-submit"
                      className="form-control btn btn-primary"
                      value="Log In"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group5">
                <label htmlFor="username">Documentation</label>
                <input type="date" className="form-control-file form-control height-auto"
                />
                <input type="checkbox" name="Slot" id="" />
                <input type="checkbox" name="" id="" />
              </div>
            </form>
            <div className="form-group7">
              <span>New user? </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
