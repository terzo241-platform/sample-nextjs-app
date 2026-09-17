"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div>
        <h1 data-testid="success-heading">Message Sent!</h1>
        <p data-testid="success-message">
          Thanks {name}, we received your message.
        </p>
        <button
          data-testid="reset-button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setMessage("");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 data-testid="contact-heading">Contact Us</h1>
      <form onSubmit={handleSubmit} data-testid="contact-form">
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            data-testid="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            data-testid="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
            rows={4}
            cols={40}
          />
        </div>
        <button type="submit" data-testid="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
