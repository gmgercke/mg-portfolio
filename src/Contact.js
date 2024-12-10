import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "./App.css";
import { InputText } from "primereact/inputtext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [comp, setComp] = useState("");

  console.log(name, mail, comp);

  function handleClick(e) {
    e.preventDefault();

    var templateParams = {
      name: name,
      mail: mail,
      comp: comp,
      text: text,
    };

    emailjs.init({
      publicKey: "eliLMjA8RZ9u6hsUI",
    });

    emailjs.send("service_5l7uq8g", "template_a55aarb", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Great, your E-Mail has beend sent! Thank you!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Sorry, something went wrong. Please try again!");
      }
    );
  }

  return (
    <div className="Contact mb-8" id="contact">
      <div className="contact-head mb-4">Contact</div>
      <div className="contact">
        <p className="contact">
          You can directly send me an E-Mail by clicking on the E-Mail-Adress
          below,
          <br /> or quickly fill in your details into the form underneath and
          click Send Mail.
        </p>
        <a href="mailto:gmgercke@zoho.com" className="contact">
          gmgercke@zoho.com
        </a>
      </div>

      <div className="card flex flex-column justify-content-center md:flex-row gap-2 mt-4 md:w-8 eform">
        <div className="p-inputgroup flex-1 justify-content-center">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>

        <div className="p-inputgroup flex-1 justify-content-center">
          <span className="p-inputgroup-addon">
            <i className="pi pi-envelope"></i>
          </span>
          <InputText
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Your Email"
          />
        </div>

        <div className="p-inputgroup flex-1 justify-content-center">
          <span className="p-inputgroup-addon">
            <i className="pi pi-globe"></i>
          </span>
          <InputText
            value={comp}
            onChange={(e) => setComp(e.target.value)}
            placeholder="Website or Company"
          />
        </div>
      </div>
      <div className="card flex justify-content-center mt-2 flex-column md:w-8 eform">
        <InputTextarea
          value={
            text
              ? text
              : setText(
                  "Hey there Gesa-Maria! I really like what you did with this website, and I'm very interested in working with you! Please contact me using the details I provided. Kind regards."
                )
          }
          placeholder="Hey there Gesa-Maria! I really like what you did with this website, and I'm very interested in working with you! Please contact me using the details I provided. Kind regards.
          (leave this section free to send the default text)"
          onChange={(e) => setText(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
      <Button
        label="Send Mail"
        outlined
        raised
        onClick={handleClick}
        className="flex justify-content-center mt-2 flex-column w-8 eform Button"
      />
    </div>
  );
}
