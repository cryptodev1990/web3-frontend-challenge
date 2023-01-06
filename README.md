# Web3-Front-End-Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Project Structure

There are 2 tabs : swap(main page) and balance page.
In swap page you can mint Foo token, swap Foo Token -> Bar Token, swap Bar Token -> Foo Token.
Before swap, you have to approve the amount of tokens of original token.  

### Component

Header: Navbar of page
NavbarButton: Button of Headers:(swap, balance)
SelectToken: Switch Original Token and input the amount of token.
Button: Mint, Approve and Swap buttons of swap page are from this component

### State Management

Context is used for state management.

const fooToken = FooToken__factory.connect(FooTokenAddress, signer);
const barToken = BarToken__factory.connect(BarTokenAddress, signer);
const exchange = Exchange__factory.connect(ExchangeAddress, signer);

Some global states including above are in context.
