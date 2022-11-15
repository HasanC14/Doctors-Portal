import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10  text-base-content max-w-7xl mx-auto mt-16 ">
        <div>
          <span className="footer-title">Services</span>
          <Link to={"/"} className="link link-hover">
            Branding
          </Link>
          <Link to={"/"} className="link link-hover">
            Design
          </Link>
          <Link to={"/"} className="link link-hover">
            Marketing
          </Link>
          <Link to={"/"} className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to={"/"} className="link link-hover">
            About us
          </Link>
          <Link to={"/"} className="link link-hover">
            Contact
          </Link>
          <Link to={"/"} className="link link-hover">
            Jobs
          </Link>
          <Link to={"/"} className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to={"/"} className="link link-hover">
            Terms of use
          </Link>
          <Link to={"/"} className="link link-hover">
            Privacy policy
          </Link>
          <Link to={"/"} className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <div className="mt-3">
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
