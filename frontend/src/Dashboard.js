import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const { state } = useLocation();
  const userId = state?.userId;
  const [accounts, setAccounts] = useState([]);
  const [accountHolder, setAccountHolder] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [nextOfKin, setNextOfKin] = useState('');
  const [bvn, setBvn] = useState('');
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const response = await fetch('http://localhost:8080/api/banking/accounts');
    const data = await response.json();
    setAccounts(data);
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/banking/create-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ accountHolder, address, occupation, nextOfKin, bvn }),
    });
    if (response.ok) {
      const newAccount = await response.json();
      setMessage(`Account created successfully! Account ID: ${newAccount.id}, Account Number: ${newAccount.accountNumber}`);
      fetchAccounts();
    } else {
      const error = await response.text();
      setMessage('Account creation failed: ' + error);
    }
  };

  const handleDeposit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/banking/deposit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ accountId, amount }),
    });
    if (response.ok) {
      setMessage('Deposit successful!');
      fetchAccounts();
    } else {
      setMessage('Deposit failed');
    }
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/banking/withdraw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ accountId, amount }),
    });
    if (response.ok) {
      setMessage('Withdrawal successful!');
      fetchAccounts();
    } else {
      setMessage('Withdrawal failed: Insufficient balance or invalid account');
    }
  };

  return (
    <div className="dashboard">
      <header>
        <h1>GoldenCat Bank Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <h2>Welcome, User {userId}</h2>

        <h3>Create Account</h3>
        <form onSubmit={handleCreateAccount}>
          <label>Account Holder: </label>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            required
          /><br />
          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          /><br />
          <label>Occupation: </label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          /><br />
          <label>Next of Kin: </label>
          <input
            type="text"
            value={nextOfKin}
            onChange={(e) => setNextOfKin(e.target.value)}
            required
          /><br />
          <label>BVN (11 digits): </label>
          <input
            type="text"
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            required
            pattern="\d{11}"
            title="BVN must be an 11-digit number"
          /><br />
          <button type="submit">Create Account</button>
        </form>

        <h3>Accounts</h3>
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              ID: {account.id}, Account Number: {account.accountNumber}, Holder: {account.accountHolder}, 
              Address: {account.address}, Occupation: {account.occupation}, Next of Kin: {account.nextOfKin}, 
              BVN: {account.bvn}, Balance: ${account.balance}
            </li>
          ))}
        </ul>

        <h3>Deposit</h3>
        <form onSubmit={handleDeposit}>
          <label>Account ID: </label>
          <input
            type="number"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit">Deposit</button>
        </form>

        <h3>Withdraw</h3>
        <form onSubmit={handleWithdraw}>
          <label>Account ID: </label>
          <input
            type="number"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit">Withdraw</button>
        </form>

        <p>{message}</p>
      </div>
      <footer>
        <p>© 2024 CODE WITH GOLDENCAT. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default Dashboard;