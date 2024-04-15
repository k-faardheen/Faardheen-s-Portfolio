"use client";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <div className="flex items-center justify-center space-x-2 mx-3 py-3">
      <SocialIcon
        style={{
          height: "2.5rem",
          width: "2.5rem",
        }}
        url="https://github.com/k-faardheen"
        fgColor="white"
        bgColor="transparent"
      />
      <SocialIcon
        style={{
          height: "2.5rem",
          width: "2.5rem",
        }}
        url="https://www.linkedin.com/in/faardheen-khodabuccus/"
        fgColor="white"
        bgColor="transparent"
      />
      <SocialIcon
        style={{
          height: "2.5rem",
          width: "2.5rem",
        }}
        url={`mailto:${process.env.EMAIL_ADDRESS}`}
        fgColor="white"
        bgColor="transparent"
      />
    </div>
  );
}

export default Header;
