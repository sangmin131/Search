import React from 'react';
import { useParams } from "react-router-dom";
export default function Videos() {
  const {keyword} = useParams();
  return (
    <div>검색결과 {keyword ? `😎${keyword}`:'🥺'}</div>
  );
}

