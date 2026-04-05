import { useState, useEffect } from "react";
import { fetchBio } from "./fetchBio";


const Lesson2_2 = () => {
  const [selectedPerson, setSelectedPerson] = useState("ShinCode");
  const [bio, setBio] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(e.target.value);
  };
  console.log(selectedPerson);

  useEffect(() => {
    let ignore = false;
    const startfetchingData = async () =>  {
      const respone = await fetchBio(selectedPerson);
      // console.log(respone);
      if (!ignore) {
        setBio(respone);
      }
    }
    startfetchingData(); 
    return () => {
      // setBio("");
      ignore = true;
    }
  
    // console.log(selectedPerson);
  }, [selectedPerson]);

  return (
    <div>
      <select onChange={handleChange}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

     {/* <p className="text-black">{selectedPerson}</p> */}
      <p className="text-black">{bio}</p>
    </div>
  );
};

export default Lesson2_2;
