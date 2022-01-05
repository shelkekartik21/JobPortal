import { useState, useEffect } from "react";
import { vacancies as jobs } from "../data";
import Vacancy from "../components/Vacancy";
import CreatJob from "../components/CreatJob";

const Home = () => {
  const [vacancies, setVacancies] = useState();

  useEffect(() => {
    setVacancies(jobs);
  }, []);

  const handleSubmit = (form) =>{
    setVacancies([form, ...vacancies]);
  }

  const handleDelete = (id) =>{
    const _vacancies = vacancies.filter(vacancy => vacancy.id !== id);
    setVacancies(_vacancies);
  }

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Find your dream job today</p>
          <p className="subtitle">Apply for any vacancies below</p>
        </div>
      </section>

      <section>
        <CreatJob submit={handleSubmit}/>
      </section>

      <section>
        {vacancies.map((vacancy) => (
          <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete={handleDelete}/>
        ))}
      </section>
    </>
  );
};

export default Home;
