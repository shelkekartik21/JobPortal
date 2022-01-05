import { useState } from 'react';


const CreatJob = ({ submit }) => {
    const [form, setForm] = useState({
        title: "",
        company: "",
        city: "",
        description: "",
    });

    const handleInput = (event) =>{
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        submit({...form, id: new Date().getTime().toString() });
    }


  return (
    <div className="box">
      <h1 className="title is-5"> Create A Vacancy </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Job Title"
          value={form.title}
          name="title"
          onChange={handleInput}
          required
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Company Name"
          value={form.company}
          name="company"
          onChange={handleInput}
          required
        ></input>
        <input
          className="input"
          type="text"
          placeholder="City Name"
          value={form.city}
          name="city"
          onChange={handleInput}
          required
        ></input>
        <textarea
          className="input"
          type="text"
          placeholder="Description"
          value={form.description}
          name="description"
          onChange={handleInput}
          required
        ></textarea>
        <button className="button is-primary">Create</button>
      </form>
    </div>
  );
};

export default CreatJob;
