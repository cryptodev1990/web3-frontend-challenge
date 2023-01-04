/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        app: {
          dark: {
            swap: "#0d111c",
            token: "#131a2a",
            select: "#293249",
          },
          blue: {
            connect: "#203059",
            swapConnect: "#1c2c51",
          }
        }
      },
      textColor: {
        app: {
          dark: {
            headerColor: "#8e98b5",
            amountColor: "#5d6785"
          },
          blue: {
            connectButton: "#487bec",
            swapConnectButton: "#4c82fb",
          }
        }
      },
      placeholderColor: {
        app: {
          dark: {
            amountColor: "#5d6785"
          }
        }
      },
      borderColor: {
        app: {
          dark: {
            DEFAULT: "#1b2236",
          }
        }
      }
    },
  },
  plugins: [],
}
