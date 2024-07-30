import React, { useState } from 'react';
import { dbank } from './agent';

function App() {
  const [balance, setBalance] = useState(0);

  const checkBalance = async () => {
    const response = await dbank.checkBalance();
    setBalance(response);
  };

  const topUp = async (amount) => {
    await dbank.topUp(parseFloat(amount));
    checkBalance();
  };

  const withdraw = async (amount) => {
    await dbank.withdrawl(parseFloat(amount));
    checkBalance();
  };

  const compound = async () => {
    await dbank.compoun();
    checkBalance();
  };

  return (
    <div className="App">
      <div class="container">
      <img src="dbank_logo.png" alt="DBank logo" width="100"/>
      <h1>Current Balance: $<span id="value">{balance}</span></h1>
      <div class="divider"></div>
      <form action="#">
      <h2>Amount to Top Up</h2>
      <input id="input-amount" type="number" step="0.01" min=0 name="topUp" value=""/>
      <h2>Amount to Withdraw</h2>
      <input id="withdrawal-amount" type="number" name="withdraw" step="0.01" min=0 value=""/>
      <input id="submit-btn" type="submit" value="Finalise Transaction" />
    </form>
    </div>
      <header className="App-header">
        <button onClick={() => topUp(100)}>Top Up 100</button>
        <button onClick={() => withdraw(50)}>Withdraw 50</button>
        <button onClick={compound}>Compound</button>
        <button onClick={checkBalance}>Check Balance</button>
      </header>
    </div>
  );
}

export default App;
