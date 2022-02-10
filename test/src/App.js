import { useEffect, useState } from "react";

const App = () => {
  const [holidays, setHoliday] = useState([]);

  useEffect(() => {
    
  })

  fetch("/holidays")
  .then(
    (data) => data.json(),
    (err) => console.log(err)
  )
  .then(
    (parsedData) => console.log(parsedData),
    (err) => console.log(err)
  );

  return (
    <div className="container">
      <h1>Holidays! Celebrate!</h1>
    </div>
  );
};

export default App;