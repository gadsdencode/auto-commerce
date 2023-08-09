import React from "react";
export const Footer1 = () => {
    return (
        <section>
        <footer id="footer">
<div className="inner">
  <h3>Get in touch</h3>
  <form action="#" method="post">
    <div className="field half first">
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" placeholder="Name" />
    </div>
    <div className="field half">
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="email" placeholder="Email" />
    </div>
    <div className="field">
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        rows={6}
        placeholder="Message"
        defaultValue={""}
      />
    </div>
    <ul className="actions">
      <li>
        <input
          defaultValue="Send Message"
          className="button alt"
          type="submit"
        />
      </li>
    </ul>
  </form>
</div>
</footer>
                        </section>
    )}