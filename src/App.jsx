import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data.results))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div>
      <h1>Liste des employés</h1>
      {employees.map((emp, i) => (
        <div key={i}>
          <img src={emp.picture.medium} alt="employé" />
          <p>{emp.name.first} {emp.name.last}</p>
          <p>{emp.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
