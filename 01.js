// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const CryptoJS = require("crypto-js");
// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Store latest QR string
// let latestQRString = "";
// let latestMD5Hash = "";

// // CRC Calculation
// function calculateCRC(inputStr) {
//   let crc = 0xffff;
//   for (let i = 0; i < inputStr.length; i++) {
//     crc ^= inputStr.charCodeAt(i) << 8;
//     for (let j = 0; j < 8; j++) {
//       crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
//     }
//   }
//   return (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");
// }

// // Generate Custom Timestamp
// function generateCustomTimestamp() {
//   return `99170013${Date.now()}`;
// }

// // Generate KHQR Data
// function generateKHQRData(merchantName, transactionAmount) {
//   const payloadFormatIndicator = "000201";
//   const pointOfInitiationMethod = "010212";
//   const globallyUniqueIdentifier = "29210017lyouy_sochea@aclb";
//   const mcc = "52045999";
//   const countryCode = "5802KH";
//   const formattedMerchantName = `5912${merchantName}`;
//   const merchantCity = "6010PHNOM PENH";
//   const transactionCurrency = "5303840";
//   const formattedTransactionAmount = `5404${parseFloat(
//     transactionAmount
//   ).toFixed(2)}`;
//   const timestamp = generateCustomTimestamp();

//   const khqrDataWithoutCRC =
//     payloadFormatIndicator +
//     pointOfInitiationMethod +
//     globallyUniqueIdentifier +
//     mcc +
//     transactionCurrency +
//     formattedTransactionAmount +
//     countryCode +
//     formattedMerchantName +
//     merchantCity +
//     timestamp;

//   const dataToCalculateCRC = khqrDataWithoutCRC + "6304";
//   const crc = calculateCRC(dataToCalculateCRC);
//   return khqrDataWithoutCRC + "6304" + crc;
// }

// // POST /generate-qr
// app.post("/generate-qr", (req, res) => {
//   const { amount } = req.body;

//   if (!amount || isNaN(amount)) {
//     return res.status(400).json({ error: "Valid amount is required" });
//   }

//   const merchantName = "Sochea Lyouy";
//   const khqrCode = generateKHQRData(merchantName, amount);

//   // Save as latest QR string
//   latestQRString = khqrCode;
//   latestMD5Hash = CryptoJS.MD5(khqrCode).toString();

//   res.json({
//     qrString: khqrCode,
//     md5Hash: latestMD5Hash,
//     amount: amount,
//     timestamp: new Date().toISOString(),
//   });
// });

// // GET /get-latest-qr
// app.get("/get-latest-qr", (req, res) => {
//   if (!latestQRString) {
//     return res
//       .status(404)
//       .json({ error: "No QR code has been generated yet." });
//   }

//   res.setHeader("Content-Type", "text/plain");
//   res.send(latestQRString);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// //////1
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const CryptoJS = require("crypto-js");

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Store latest QR string and hash
// let latestQRString = "";
// let latestMD5Hash = "";

// // CRC Calculation
// function calculateCRC(inputStr) {
//   let crc = 0xffff;
//   for (let i = 0; i < inputStr.length; i++) {
//     crc ^= inputStr.charCodeAt(i) << 8;
//     for (let j = 0; j < 8; j++) {
//       crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
//     }
//   }
//   return (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");
// }

// // Custom Timestamp Generator
// function generateCustomTimestamp() {
//   return `99170013${Date.now()}`;
// }

// // KHQR Generator
// function generateKHQRData(merchantName, transactionAmount) {
//   const payloadFormatIndicator = "000201";
//   const pointOfInitiationMethod = "010212";
//   const globallyUniqueIdentifier = "29210017lyouy_sochea@aclb";
//   const mcc = "52045999";
//   const countryCode = "5802KH";
//   const formattedMerchantName = `5912${merchantName}`;
//   const merchantCity = "6010PHNOM PENH";
//   const transactionCurrency = "5303840";
//   const formattedTransactionAmount = `5404${parseFloat(
//     transactionAmount
//   ).toFixed(2)}`;
//   const timestamp = generateCustomTimestamp();

//   const khqrDataWithoutCRC =
//     payloadFormatIndicator +
//     pointOfInitiationMethod +
//     globallyUniqueIdentifier +
//     mcc +
//     transactionCurrency +
//     formattedTransactionAmount +
//     countryCode +
//     formattedMerchantName +
//     merchantCity +
//     timestamp;

//   const dataToCalculateCRC = khqrDataWithoutCRC + "6304";
//   const crc = calculateCRC(dataToCalculateCRC);
//   return khqrDataWithoutCRC + "6304" + crc;
// }

// // Preset options for IDs
// const presetOptions = {
//   ID1: 0.01,
//   ID2: 0.02,
//   ID3: 0.03,
//   ID4: 0.04,
//   ID5: 0.05,
//   ID6: 0.06,
// };

// // POST /generate-qr
// app.post("/generate-qr", (req, res) => {
//   let { amount, id } = req.body;

//   // Use preset amount if ID is given
//   if (id && presetOptions[id]) {
//     amount = presetOptions[id];
//   }

//   if (!amount || isNaN(amount)) {
//     return res.status(400).json({ error: "Valid amount or ID is required" });
//   }

//   const merchantName = "Sochea Lyouy";
//   const khqrCode = generateKHQRData(merchantName, amount);

//   // Store the latest QR string and MD5
//   latestQRString = khqrCode;
//   latestMD5Hash = CryptoJS.MD5(khqrCode).toString();

//   res.json({
//     id: id || null,
//     amount: parseFloat(amount),
//     qrString: khqrCode,
//     md5Hash: latestMD5Hash,
//     timestamp: new Date().toISOString(),
//   });
// });

// // GET /get-latest-qr
// app.get("/get-latest-qr", (req, res) => {
//   if (!latestQRString) {
//     return res
//       .status(404)
//       .json({ error: "No QR code has been generated yet." });
//   }

//   res.setHeader("Content-Type", "text/plain");
//   res.send(latestQRString);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });

// //2
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const CryptoJS = require("crypto-js");

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Store latest QR string
// let latestQRString = "";
// let latestMD5Hash = "";

// // ID to Amount mapping
// const idToAmountMap = {
//   ID1: 0.01,
//   ID2: 0.02,
//   ID3: 0.03,
//   ID4: 0.04,
//   ID5: 0.05,
//   ID6: 0.09,
// };

// // CRC Calculation
// function calculateCRC(inputStr) {
//   let crc = 0xffff;
//   for (let i = 0; i < inputStr.length; i++) {
//     crc ^= inputStr.charCodeAt(i) << 8;
//     for (let j = 0; j < 8; j++) {
//       crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
//     }
//   }
//   return (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");
// }

// // Generate Custom Timestamp
// function generateCustomTimestamp() {
//   return `99170013${Date.now()}`;
// }

// // Generate KHQR Data
// function generateKHQRData(merchantName, transactionAmount) {
//   const payloadFormatIndicator = "000201";
//   const pointOfInitiationMethod = "010212";
//   const globallyUniqueIdentifier = "29210017lyouy_sochea@aclb";
//   const mcc = "52045999";
//   const countryCode = "5802KH";
//   const formattedMerchantName = `5912${merchantName}`;
//   const merchantCity = "6010PHNOM PENH";
//   const transactionCurrency = "5303840";
//   const formattedTransactionAmount = `5404${parseFloat(
//     transactionAmount
//   ).toFixed(2)}`;
//   const timestamp = generateCustomTimestamp();

//   const khqrDataWithoutCRC =
//     payloadFormatIndicator +
//     pointOfInitiationMethod +
//     globallyUniqueIdentifier +
//     mcc +
//     transactionCurrency +
//     formattedTransactionAmount +
//     countryCode +
//     formattedMerchantName +
//     merchantCity +
//     timestamp;

//   const dataToCalculateCRC = khqrDataWithoutCRC + "6304";
//   const crc = calculateCRC(dataToCalculateCRC);
//   return khqrDataWithoutCRC + "6304" + crc;
// }

// // POST /generate-qr
// app.post("/generate-qr", (req, res) => {
//   const { id, amount } = req.body;

//   let selectedAmount;

//   if (id && Object.keys(idToAmountMap).includes(id)) {
//     selectedAmount = idToAmountMap[id];
//   } else if (amount && !isNaN(amount) && amount > 0) {
//     selectedAmount = parseFloat(amount);
//   } else {
//     return res.status(400).json({
//       error: `Either provide a valid ID (${Object.keys(idToAmountMap).join(
//         ", "
//       )}) or a valid positive number for 'amount'.`,
//     });
//   }

//   const merchantName = "Sochea Lyouy";
//   const khqrCode = generateKHQRData(merchantName, selectedAmount);

//   // Save as latest QR string
//   latestQRString = khqrCode;
//   latestMD5Hash = CryptoJS.MD5(khqrCode).toString();

//   res.json({
//     qrString: khqrCode,
//     md5Hash: latestMD5Hash,
//     amount: selectedAmount,
//     id: id || null,
//     timestamp: new Date().toISOString(),
//   });
// });

// // GET /get-latest-qr
// app.get("/get-latest-qr", (req, res) => {
//   if (!latestQRString) {
//     return res
//       .status(404)
//       .json({ error: "No QR code has been generated yet." });
//   }

//   res.setHeader("Content-Type", "text/plain");
//   res.send(latestQRString);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

///3
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const CryptoJS = require("crypto-js");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Store generated QR data by ID
const qrStore = {};

// ID to Amount mapping
const idToAmountMap = {
  ID1: 0.01,
  ID2: 0.02,
  ID3: 0.03,
  ID4: 0.04,
  ID5: 0.05,
  ID6: 0.06,
};

// CRC Calculation
function calculateCRC(inputStr) {
  let crc = 0xffff;
  for (let i = 0; i < inputStr.length; i++) {
    crc ^= inputStr.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
    }
  }
  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");
}

// Generate Custom Timestamp
function generateCustomTimestamp() {
  return `99170013${Date.now()}`;
}

// Generate KHQR Data
function generateKHQRData(merchantName, transactionAmount) {
  const payloadFormatIndicator = "000201";
  const pointOfInitiationMethod = "010212";
  const globallyUniqueIdentifier = "29210017lyouy_sochea@aclb";
  const mcc = "52045999";
  const countryCode = "5802KH";
  const formattedMerchantName = `5912${merchantName}`;
  const merchantCity = "6010PHNOM PENH";
  const transactionCurrency = "5303840";
  const formattedTransactionAmount = `5404${parseFloat(
    transactionAmount,
  ).toFixed(2)}`;
  const timestamp = generateCustomTimestamp();

  const khqrDataWithoutCRC =
    payloadFormatIndicator +
    pointOfInitiationMethod +
    globallyUniqueIdentifier +
    mcc +
    transactionCurrency +
    formattedTransactionAmount +
    countryCode +
    formattedMerchantName +
    merchantCity +
    timestamp;

  const dataToCalculateCRC = khqrDataWithoutCRC + "6304";
  const crc = calculateCRC(dataToCalculateCRC);
  return khqrDataWithoutCRC + "6304" + crc;
}

// POST /generate-qr
app.post("/generate-qr", (req, res) => {
  const { id, amount } = req.body;

  let selectedAmount;
  let selectedId = null;

  if (id && Object.keys(idToAmountMap).includes(id)) {
    selectedAmount = idToAmountMap[id];
    selectedId = id;
  } else if (amount && !isNaN(amount) && amount > 0) {
    selectedAmount = parseFloat(amount);
  } else {
    return res.status(400).json({
      error: `Either provide a valid ID (${Object.keys(idToAmountMap).join(
        ", ",
      )}) or a valid positive number for 'amount'.`,
    });
  }

  const merchantName = "Sochea Lyouy";
  const khqrCode = generateKHQRData(merchantName, selectedAmount);
  const md5Hash = CryptoJS.MD5(khqrCode).toString();

  // Save QR data under the provided ID
  if (selectedId) {
    qrStore[selectedId] = {
      qrString: khqrCode,
      md5Hash,
      amount: selectedAmount,
      timestamp: new Date().toISOString(),
    };
  }

  res.json({
    qrString: khqrCode,
    md5Hash,
    amount: selectedAmount,
    id: selectedId || null,
    timestamp: new Date().toISOString(),
  });
});

// POST /check-transaction
app.post("/check-transaction", async (req, res) => {
  const { id } = req.body;

  if (!id || !Object.keys(idToAmountMap).includes(id)) {
    return res.status(400).json({
      error: `Valid ID is required. Allowed values: ${Object.keys(
        idToAmountMap,
      ).join(", ")}`,
    });
  }

  const storedData = qrStore[id];

  if (!storedData) {
    return res.status(404).json({
      error: `No QR code found for ID: ${id}. Please generate one first.`,
    });
  }

  const { md5Hash } = storedData;

  // ✅ Use dynamic import for node-fetch
  const fetchModule = await import("node-fetch");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDU2N2I3NzQ5YWU1NGMzOSJ9LCJpYXQiOjE3Njk2MTIwMTUsImV4cCI6MTc3NzM4ODAxNX0.R7vFtS-poF9jcdPUjzsjDTekGQ3yUewtTsp5x2xFgaY",
  );

  const raw = JSON.stringify({ md5: md5Hash });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetchModule.default(
      "https://api-bakong.nbc.gov.kh/v1/check_transaction_by_md5",
      requestOptions,
    );

    let result;
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    return res.json({
      success: true,
      id,
      md5Hash,
      result, // This will be shown in Postman
    });
  } catch (error) {
    console.error("Transaction check failed:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to check transaction.",
    });
  }
});

// GET /get-latest-qr
app.get("/get-latest-qr", (req, res) => {
  const latestQR = Object.values(qrStore).pop(); // Get last generated QR
  if (!latestQR) {
    return res
      .status(404)
      .json({ error: "No QR code has been generated yet." });
  }

  res.setHeader("Content-Type", "text/plain");
  res.send(latestQR.qrString);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
//lyouy
//oooo
