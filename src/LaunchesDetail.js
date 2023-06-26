import React, { useState } from "react";

const LaunchesDetail = ({ allLaunches }) => {
  const [year, setYear] = useState("Alle Jahre");

  const getAllUniqueYears = () => {
    const allYears = ["Alle Jahre"];
    allLaunches.map((item) => {
      const yyyy = new Date(item.date_unix * 1000).getFullYear().toString();
      allYears.push(yyyy);
      return []; // to avoid eslint warning
    });
    const withoutDuplicates = [...new Set(allYears)];
    return withoutDuplicates;
  };

  const allStartedLaunches = allLaunches.filter((item) => {
    const launchYear = new Date(item.date_unix * 1000).getFullYear().toString();
    if (year === "Alle Jahre") {
      return allLaunches;
    } else {
      return launchYear === year;
    }
  });

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <>
      <p>
        <i>WIFI Pflichtübung 5 - ReactJS (SpaceX Starts)</i>
      </p>
      <br />
      <div>
        <div>
          <h3>Bitte das gewünschte Jahr auswählen:</h3>
          <select value={year} onChange={handleChange}>
            {getAllUniqueYears().map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {` In ${year} wurden ${allStartedLaunches.length} Missionen gestartet`}
        </div>
        <br />
        <h3>Flug, Logo, Bezeichnung</h3>
      </div>
      {allStartedLaunches.map((item, index) => {
        return (
          <div key={index}>
            <table>
              <tbody>
                <tr>
                  <td>#{item.flight_number}</td>
                  <td>
                    <img
                      src={item.links.patch.small}
                      alt={item.name}
                      height="70"
                    />
                  </td>
                  <td>{item.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default LaunchesDetail;
