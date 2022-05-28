import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

type People = any;

const App: React.FC = () => {
  const [people, setPeople] = useState({});
  const [tableData, setTableData] = useState({
    headers: [],
    data: [],
  });

  const getData = () => {
    return axios
      .get('https://randomuser.me/api/?results=2')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData().then((apiPeople) => {
      setPeople(apiPeople);
    });
  }, []);

  const getTableHeaders = (people: People[]) => {
    const headers = [];
    for (const { email, gender, name, location, dob } of people) {
      headers.push({
        email: email,
        gender: gender,
        name: `${name.first} ${name.last}`,
        city: location.city,
        age: dob.age,
      });
    }
    console.log(headers);
  };

  const getTableHeaders2 = (people: People[]) => {
    const headers = [];
    for (const { email, gender, name, location, dob } of people) {
      headers.push({
        email: email,
        gender: gender,
        name: `${name.first} ${name.last}`,
        city: location.city,
        age: dob.age,
      });
    }
    console.log(headers);
  };

  return <div className="App">This is an app</div>;
};

export default App;
