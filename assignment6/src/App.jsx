import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import GenreLogin from "../src/views/GenreLogin"
import DetailsView from "../src/views/DetailsView";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="genre" element={<GenreLogin />} />
          <Route path=":id" element={<DetailsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
