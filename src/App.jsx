import React from 'react'
import AirportFarms from './page/AirportFarms'
import AirportFarmswithslider from './page/AirportFarmswithslider'
import UniversalCursor from './components/UniversalCursor';


export default function App() {
  return (
    <>
      <UniversalCursor />
      {/* <AirportFarms/>  */}
      <AirportFarmswithslider />
    </>
  );
}
