import React, { useEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function SearchH() {
  const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`)
  };
  useEffect(()=> setText(keyword || ''), [keyword])

  return (
    <>
      <Link to='/' >
        <h1>Search</h1></Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} />
        <button>
          <FcSearch />
        </button>
      </form>
    </>

  );
}

