import React from 'react';

const Home = ({ loggedIn }) => {
  if (loggedIn) {
    return null;
  } else {
    return <img src="https://bsmedia.business-standard.com/_media/bs/img/misc/2020-12/17/full/market-markets-stock-market-stock-stocks-rise-stock-rally-1608188452-80872620.jpg?im=Resize,width=540" alt="stock image"/>;
  }
}
export default Home;