import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, CoinPage } from "./pages";

function App() {

  return (
    <BrowserRouter>
      <div className="w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="coin" element={<CoinPage />}>
            <Route path=":id" element={<CoinPage />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
