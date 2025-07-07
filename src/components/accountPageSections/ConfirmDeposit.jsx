/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Notiflix from "notiflix";
import AccountSidehead from "./AccountSidehead";
import SideBar from "./SideBar";

const ConfirmDeposit = () => {
  const [depositData, setDepositData] = useState(null);
  const [transactionHash, setTransactionHash] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("depositData");
    if (storedData) {
      setDepositData(JSON.parse(storedData));
    } else {
      Notiflix.Notify.failure("No deposit data found!");
      window.location.href = "/deposit"; // Redirect user back to deposit page
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionHash.trim()) {
      Notiflix.Notify.failure("Transaction hash cannot be empty!");
      return;
    }

    Notiflix.Notify.success("Transaction hash submitted successfully!");
    setTransactionHash("");
  };

  // Define wallet details based on selected currency
  const getWalletDetails = () => {
    if (!depositData) return { image: "", address: "" };

    if (depositData.currency === "BTC") {
      return {
        image: "btcw.jpg",
        address: "bc1q9kh3dcpaa5hvxtmp8hcyrgtuzpp0krjqhsghn2",
      };
    } else if (depositData.currency === "ETH") {
      return {
        image: "ethw.jpg",
        address: "0x61a08b0f880A6206Bf2d5601e293AFCAB1825525",
      };
    } else {
      return { image: "", address: "Invalid Currency Selected" };
    }
  };

  const { image, address } = getWalletDetails();

  return (
    <>
      <SideBar />
      <div className="main-container">
        <AccountSidehead />
        <main className="main-content overflow-hidden">
          <div id="dashboard" className="inner-body overflow-hidden">
            <div className="container-fluid pt-7 pb-3">
              <div className="row flex-wrap align-items-center py-3">
                <div className="col mb-4 mb-md-0">
                  <div className="text-light">
                    <h3 className="fw-100 mb-1">Confirm Your Deposit</h3>
                    <span className="text-info">Deposit Confirmation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <h3>Please confirm your deposit:</h3>
              <p>
                Steps to make a deposit:
                <br />
                1. Copy the Company {depositData?.currency} wallet address
                below.
                <br />
                2. Transfer the exact crypto amount chosen to invest, then copy
                the transaction hash.
                <br />
                3. Paste the transaction hash below and click Save.
              </p>
              <br />
              <center>
                {image && (
                  <img
                    src={image}
                    alt={`${depositData?.currency} Wallet`}
                    style={{ width: "150px", height: "150px" }}
                  />
                )}
              </center>
              <br />
              <p>
                <center>
                  <mark>{address}</mark>
                </center>
              </p>
              <br />

              {depositData && (
                <table
                  cellSpacing={0}
                  cellPadding={2}
                  className="form deposit_confirm"
                >
                  <tbody>
                    <tr>
                      <th>Plan:</th>
                      <td>{depositData.plan}</td>
                    </tr>
                    <tr>
                      <th>Profit:</th>
                      <td>{depositData.profit} daily</td>
                    </tr>
                    <tr>
                      <th>Currency:</th>
                      <td>{depositData.currency}</td>
                    </tr>
                    <tr>
                      <th>Credit Amount:</th>
                      <td>${depositData.amount}</td>
                    </tr>
                  </tbody>
                </table>
              )}

              <br />
              <form onSubmit={handleSubmit}>
                <table cellSpacing={0} cellPadding={2} border={0}>
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <b>Required Information:</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Transaction Hash</td>
                      <td>
                        <input
                          type="text"
                          value={transactionHash}
                          onChange={(e) => setTransactionHash(e.target.value)}
                          className="inpts"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <input type="submit" value="Save" className="sbmt" /> &nbsp;
                <input
                  type="button"
                  className="sbmt"
                  value="Cancel"
                  onClick={() => (window.location.href = "/deposit")}
                />
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ConfirmDeposit;
