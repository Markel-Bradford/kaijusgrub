import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  //define where emails will be sent using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendform("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="filler2"></div>
      <h1>Contact Us</h1>
      <div className="email-form-container">
        <div className="contact-msg">
          <p className="contact-info">
            If you would like to request a quote or learn more about our
            products, please complete the email contact form. You can also send
            us a message and drop us a follow on instagram at{" "}
            <a
              href="https://www.instagram.com/kaijusgrub/"
              target="_blank"
              className="ig-link">
              @kaijusgrub
            </a>
            .
          </p>
          <div className="icons">
            <img
              src="/kaijusgrub/images/QR.jpg"
              alt="IG QR code"
              className="qrCode"
            />
          </div>
        </div>

        <div className="form">
          <form ref={form} onSubmit={sendEmail} className="email-form">
            {/*Group all relevant items into a form group div to format*/}
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Jane Doe"
              />
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="jane.doe96@gmail.com"
              />
            </div>
            <div className="form-group">
              <p className="menu-opt">Which items are you interested in?</p>
              <label className="label-cbox" htmlFor="special">
                <input
                  type="checkbox"
                  name="special"
                  id="special"
                  className="input-cbox"
                />
                Specialized Meals
              </label>
              <label className="label-cbox" htmlFor="meals">
                <input
                  type="checkbox"
                  name="meals"
                  id="meals"
                  className="input-cbox"
                />
                Menu Meals
              </label>
              <label className="label-cbox" htmlFor="treats">
                <input
                  type="checkbox"
                  name="treats"
                  id="treats"
                  className="input-cbox"
                />
                Treats
              </label>
              <label className="label-cbox" htmlFor="dessert">
                <input
                  type="checkbox"
                  name="dessert"
                  id="dessert"
                  className="input-cbox"
                />
                Desserts
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="info">
                Please provide details below about your friend and thier needs:
              </label>
              <textarea name="info" id="info" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className="email-btn">
              <span id="send">Send Email</span>
              <i className="fa-solid fa-envelope"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
