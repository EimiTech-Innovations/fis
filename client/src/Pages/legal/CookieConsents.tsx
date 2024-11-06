import React from 'react'
import CookieConsent, { Cookies } from "react-cookie-consent"
import { Link } from 'react-router-dom';

const CookieConsents: React.FC = () => {
  const hasConsent = Cookies.get("userConsent");

  if (hasConsent === "true") {
    //TODO: handle consent
    // Load Google Analytics or other tracking scripts
    console.log(hasConsent)

  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={() => {
        console.log("Cookies accepted");
      }}

      cookieName="userConsent"
      style={{ background: "#2b373bae", padding: "20px" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonStyle={{ color: "#9fccffce", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <Link to="/cookie-policy" style={{ color: "#01B399" }}>
        Learn more
      </Link>
    </CookieConsent>
  )
}

export default CookieConsents