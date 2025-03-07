import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function First() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      firstName: fname,
      lastName: lname,
      countryName: country,
      Score: score,
    };

    setTask((prevTask) => {
      const newTasks = [...prevTask, obj];

      arraySort(newTasks);
      return newTasks;
    });

    setFname("");
    setLname("");
    setCountry("");
    setScore("");
  };

  function increase5(idToModify) {
    setTask(
      task.map((obj) => {
        if (obj.id === idToModify) {
          obj.Score = Number(obj.Score) + 5;

          return obj;
        } else return obj;
      })
    );
    arraySort(task);
  }

  function decrease5(idToModify) {
    setTask(
      task.map((obj) => {
        if (obj.id === idToModify) {
          obj.Score = Number(obj.Score) - 5;

          return obj;
        } else return obj;
      })
    );
    arraySort(task);
  }

  function deleteData(idToDelete) {
    const indexToDelete = task.findIndex((obj) => {
      return obj.id === idToDelete;
    });
    setTask(
      task.filter((obj, index) => {
        return index !== indexToDelete;
      })
    );
  }

  function arraySort(newTask) {
    const sortedTasks = [...newTask].sort((a, b) => b.Score - a.Score);
    setTask(sortedTasks);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <select
          name="country"
          value={country}
          id=""
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" disabled>
            select country
          </option>
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="west indies">West indies</option>
        </select>
        <input
          type="text"
          placeholder="Score"
          name="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div id="leaderBoard">
        {task.map((obj) => {
          return (
            <div className="record" key={obj.id}>
              <p>{obj.firstName + " " + obj.lastName}</p>
              <p>{obj.countryName}</p>
              <p>{obj.Score}</p>
              <p className="actions">
                <span onClick={() => increase5(obj.id)}>+5</span>
                <span onClick={() => decrease5(obj.id)}>-5</span>
                <FaTrash onClick={() => deleteData(obj.id)} />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default First;
