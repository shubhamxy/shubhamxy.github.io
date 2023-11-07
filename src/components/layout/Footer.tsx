import { Flex, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HorizontalLine from "../HorizontalLine";
import Image from "next/image";

const Footer = () => {
  const { colorMode } = useColorMode();
  const [lastUpdated, setLastUpdated] = useState("");
  const [emoji, setEmoji] = useState("🔮");

  useEffect(() => {
    // Function to get the current date and format it as "Month Year"
    const getCurrentDate = () => {
      const currentDate = new Date();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();
      return `${month} ${year}`;
    };

    // Set the lastUpdated state with the current date
    setLastUpdated(getCurrentDate());
  }, []);

  const handleMyUpdatesClick = () => {
    // Redirect to https://t.shubm.me/ in a new tab
    window.open(
      "https://blog.shubm.me/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleEmojiHover = () => {
    setEmoji("👾");
    setTimeout(() => {
      setEmoji("🔮");
    }, 2000);
  };

  return (
    <>
      <div className="footer-container">
        <div className="left-content">
          {/* Updated: October 2022 */}
          <p
            className="updated"
            style={{
              color: colorMode === "light" ? "gray.500" : "#718196",
            }}
          >
            {`Updated: ${lastUpdated}`}
          </p>
        </div>
      </div>

      <HorizontalLine />

      <p
        style={{
          color: colorMode === "light" ? "gray.500" : "#718196",
          // Add more styles as needed
        }}
        className="designed"
      >

        <Image
          src={"/assets/nyan-cat-nyan.gif"}
          alt={`nyan cat`}
          width={200}
          height={200}
          objectFit="cover" // Maintain aspect ratio and cover the container
        />

        © Made with ❤️ by Shubham Jain

      </p>


      <style jsx>{`
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-top: 1px solid #eaeaea;

          @media (max-width: 600px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 0; // Adjust padding for better spacing
          }
        }

        p {
          margin: 0;
          font-size: 0.875rem;
          text-align: center;
        }

        .updated {
          font-size: 1rem;
          font-weight: bold;
          color: #555;
        }

        .my-life-updates {
          display: flex;
          align-items: center;
        }

        .my-updates {
          font-size: 1rem;
          font-weight: bold;
          color: #6b46c1;
          cursor: pointer; /* Add cursor pointer to indicate it's clickable */
          transition: color 0.2s ease, transform 0.2s ease; /* Add transition for color and transform */

          @media (max-width: 600px) {
            margin-top: 10px; // Add spacing between elements
          }
        }

        .my-updates:hover {
          color: teal; /* Change color on hover to teal */
          transform: translateY(-2px); /* Add floating effect on hover */
        }

        .my-updates span {
          font-size: 0.75rem;
          color: #555;
        }

        .emoji {
          font-size: 2rem;
          margin-bottom: -0.75rem; /* Adjust the value to reduce space */
          margin-top: 3rem;
        }

        .designed {
          font-size: 0.875rem;
          margin-top: 1rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: bold;
          color: #555;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          @media (max-width: 600px) {
            margin-top: 10px; // Add spacing between elements
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
