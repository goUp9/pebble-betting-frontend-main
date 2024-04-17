import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
// import Bet from './pages/Bet';
import "@solana/wallet-adapter-react-ui/styles.css";
import "./App.css";
import WalletContextProvider from './pages/wallet/WalletContext.jsx';
// import HaryBet from "./pages/HaryBet/index.jsx";
import Match from './pages/Match.jsx';
import Dashboard from './pages/Dashboard/index.jsx';

function App() {
  return (
    <>
      <WalletContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:matchId' element={<Match />} />
          {/* <Route path='/bet' element={<Bet />} /> */}
          {/* <Route path="/harybet" element={<HaryBet />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </WalletContextProvider>
    </>
  )
}

export default App
