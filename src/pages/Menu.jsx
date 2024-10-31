import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
const Menu = () => {
  const [data, setData] = useState({
    category: "19",
    quantity: "15",
    level: "easy",
    type: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  }

  return (
    <>
      <div className="m-8 p-8 pt-0 rounded-lg border-2 border-blue-600">
        <Header />
        <div className="text-center text-blue-600 mb-5">
          Please choose your desired type of quiz to start! Good Luck
        </div>
        <form className="flex flex-col">
          <label className="text-white">Category:</label>
          <select
            name="category"
            className="p-2 outline-none border-2 border-pink-600 rounded-md"
            value={data.category}
            onChange={handleChange}
          >
            <option value="19">Math</option>
            <option value="21">Sport</option>
            <option value="18">Computer</option>
            <option value="17">Nature</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politic</option>
            <option value="20">Methodlogy</option>
            <option value="25">Art</option>
            <option value="26">Celebrety</option>
            <option value="27">Animal</option>
            <option value="28">Vehicle</option>
            <option value="29">Comic</option>
            <option value="10">Books</option>
            <option value="11">Music</option>
            <option value="12">Film</option>
            <option value="31">Anime and Manga</option>
            <option value="9">General Knowledge</option>
          </select>
          <br />
          <label className="text-white">Number of question:</label>
          <input
            className="p-2 outline-none border-2 border-pink-600 rounded-md"
            type="number"
            name="quantity"
            min="1"
            max="50"
            value={data.quantity}
            onChange={handleChange}
          />
          <br />
          <label className="text-white">Level:</label>
          <select
            name="level"
            className="p-2 outline-none border-2 border-pink-600 rounded-md"
            value={data.level}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Meduim</option>
            <option value="hard">Hard</option>
          </select>
          <br />
          <label className="text-white">Type of quiz:</label>
          <select
            name="type"
            className="p-2 outline-none border-2 border-pink-600 rounded-md"
            value={data.type}
            onChange={handleChange}
          >
            <option value="">Both</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>

          <Link
            to={`/quiz?category=${data.category}&quantity=${data.quantity}&level=${data.level}&type=${data.type}`}
            className="mt-6 p-2 bg-pink-600 text-center text-white rounded-md border-2 border-white"
          >
            Start Quiz
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
