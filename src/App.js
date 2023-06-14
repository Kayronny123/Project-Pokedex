import { useState } from "react";
import Header from "./Components/Header/Header";
import Router from "./Router/Router";

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header page={page} setPage={setPage} />
      <Router />
    </>
  );
}
