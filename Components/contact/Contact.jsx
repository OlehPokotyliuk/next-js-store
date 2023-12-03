import React from "react";
import classes from "./Contact.module.scss";
import ContactText from "./ContactText/ContactText";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.info}>
        <ContactText
          path={"/icon/phone.svg"}
          spanText={"Call To Us"}
          paragraphText={"We are available 24/7, 7 days a week."}
          secondParagraph={'Phone: +8801611112222'}
        />
        <ContactText
          path={"/icon/mail.svg"}
          spanText={"Write To US"}
          paragraphText={"Fill out our form and we will contact you within 24 hours."}
          secondParagraph={'Emails: customer@exclusive.com'}
        />
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.inputWrapper}>
          <input
            className={classes.input}
            type="text"
            placeholder="Your Name *"
          />
          <input
            className={classes.input}
            type="text"
            placeholder="Your Email *"
          />
          <input
            className={classes.input}
            type="text"
            placeholder="Your Phone *"
          />
          <input
            className={classes.input}
            type="text"
            placeholder="Your Massage *"
          />
        </div>
        <div className={classes.btn}>
          <button className={classes.sendBtn}>Send Message </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
