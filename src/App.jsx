import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://abeqegewvkkoinddhbml.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZXFlZ2V3dmtrb2luZGRoYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3OTAwNTcsImV4cCI6MjA0MDM2NjA1N30.1zGyf1jSPNcnMGBBJHxmOtW10EwDnwX6K_Mhz27ClPY");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;