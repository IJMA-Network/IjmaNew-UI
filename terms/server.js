const express = require("express");
 const cors = require("cors");
 const bodyParser = require("body-parser");
// const admin = require("firebase-admin");
 const multer = require("multer");
 const morgan = require("morgan");
// const postmark = require("postmark");
const app = express();
let authRoutes = require("./auth");
let authRoutesDas = require("./dasboard");
let kuickpayRoutes = require("./kuickpay");
let ijmaRoutes = require("./routes/terms");
////let nodemailer = require("nodemailer");
const https = require("https");
//let parseString = require("xml2js").parseString;
let date_ob = new Date();
const { ServerSecretKey, PORT } = require("./core/index");
const {
  terms
} = require("./dbase/models");
//const serviceAccount = require("./firebase/firebase.json");
let http = require("http");
const { log } = require("console");







app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("short"));
app.use("/ijma", ijmaRoutes);
app.use("/auth", authRoutes);
app.use("/dash", authRoutesDas);
app.use("/kuickpay", kuickpayRoutes);





// Upload Imag Api

// app.post("/upload", upload.any(), (req, res, next) => {
//   bucket.upload(req.files[0].path, (err, file, apiResponse) => {
//     if (!err) {
//       file
//         .getSignedUrl({
//           action: "read",
//           expires: "03-09-2491",
//         })
//         .then((urlData, err) => {
//           !err
//             ? res.status(200).send({
//                 ImageUrl: urlData[0],
//               })
//             : res.send(err);
//         });
//     } else {
//       res.status(500).send();
//     }
//   });
// });

// Otp Send Api

//  Rendom 5 number Otp




















//API to receive filter and return filtered Payments
app.post("/filteredPayments", (req, res, next) => {
  if (!req.body.filter) {
    res.status(409).send(`
        Please send filter in json body
        e.g:
        "filter":"{}",
    `);
  } else {
    payment.find(req.body.filter, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.send(err);
      }
    });
  }
});

// collectionsby
app.post("/collectionBy", (req, res, next) => {
  let item = {
    name: res.heldby,
    cheque: 0,
    cash: 0,
    count: 0,
    totalAmount: 0,
  };
  payment.find({ heldby: req.body.heldby }, (err, data) => {
    if (!err) {
      //  res.send(data);
      for (let i = 0; i < data.length; i++) {
        item.totalAmount = item.totalAmount + parseInt(data[i].PaymentAmount);
        item.count = data.length;
        if (data[i].PaymentMode == "Cash") {
          item.cash += data[i].PaymentAmount;
        } else if (data[i].PaymentMode == "Cheque") {
          item.cheque += parseInt(data[i].PaymentAmount);
        } else {
          item.others += dparseInt(data[i].PaymentAmount);
        }
        console.log("Item", item);
      }
      res.send(item);
    } else {
      res.status(500).send("error");
    }
  });
});

app.get("/heldBy", (req, res, next) => {
  payment.find({ heldby: req.body.heldby }, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send("error");
    }
  });
});

/* summary by cashier
 */
app.post("/CashierSummary", (req, res, next) => {
  let collections = [];
  let cashiers = [];
  employee.find({ Role: "Cashier" }, (err, data) => {
    if (!err) {
      cashiers = data;
      console.log("Cashiers length", cashiers.length);
      let result = test(data);
      res.send(result);
    }
  });
  // function test(cashiers){
  //     console.log("Cashiers lengthin test",cashiers.length);
  //     return"done testing";
  // }
  console.log("Cashiers outside", cashiers);
});

function test(cashiers) {
  console.log("Cashiers length in test", cashiers.length);
  let collections = [];
  for (let i = 0; i < cashiers.length; i++) {
    //    console.log("in cashier loop");
    let payments = [];
    payment.find({ heldby: cashiers[i].employeeName }, (err, data) => {
      // finding all payments held by cashier
      if (!err) {
        payments = data; // stores all  payments of specific cashier
        //  console.log("Payments by casier",cashiers[i].employeeName ,payments.length);
        let item = getsummaryItems(cashiers[i].employeeName, payments);
        collections.push(item);
      } else {
        res.status(500).send("errorin finding payments of a cashier");
      }
    });
    let item = getsummaryItems(cashiers[i].employeeName, payments);
    collections.push(item);
  }
  //  console.log("Collections",collections);
  return collections;
}

//- internal function
function getsummaryItems(name, payments) {
  let item = {
    employeeNamr: name,
    cheques: 0,
    cash: 0,
    count: 0,
    others: 0,
    totalAmount: 0,
  };
  console.log("in Summary Item", name, payments.length);
  for (let i = 0; i < payments.length; i++) {
    item.totalAmount = item.totalAmount + payments[i].PaymentAmount;
    item.count = payments.length;
    if (payments[i].PaymentMode == "Cash") {
      item.cash += payments[i].PaymentAmount;
    } else if (payments[i].PaymentMode == "Cheque") {
      item.cheque += payments[i].PaymentAmount;
    } else {
      item.others += payments[i].PaymentAmount;
    }
  }
  return item;
}

//Post All Api with ClientData

app.post("/ClientData", (req, res, next) => {
  if (!req.body.ClientId || !req.body.ClientName) {
    res.status(409).send(`
                    Please send PaymentName  in json body
                    e.g:
                    "ClientId":"ClientId",
                    "ClientName": "ClientName",
                    "ClientPhoneNumber": "ClientPhoneNumber",
                    "ClientAmount": "ClientAmount"
                    "ClientEmail": "ClientEmail"
                `);
    return;
  } else {
    const newClient = new clientdata({
      ClientId: req.body.ClientId,
      ClientName: req.body.ClientName,
      ClientPhoneNumber: req.body.ClientPhoneNumber,
      ClientAmount: req.body.ClientAmount,
      ClientEmail: req.body.ClientEmail,
      ClientRider: "Select Rider",
      BelongsTo: req.body.BelongsTo,
    });
    newClient
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "an error occured : " + err,
        });
      });
  }
});

//Get All Api with ClientData
app.get("/ClientData", (req, res, next) => {
  console.log("in ClientData");
  clientdata.find({}, (err, data) => {
    if (!err) {
      res.send({
        Data: data,
      });
    } else {
      res.status(500).send("error");
    }
  });
});

app.post("/ClientDataUpdate", (req, res, next) => {
  // console.log(req.body.id);
  // console.log(req.body.ClientRider);

  let updateObj = {};

  if (req.body.ClientRider) {
    updateObj.ClientRider = req.body.ClientRider;
  }
  if (req.body.ClientRiderObjectId) {
    updateObj.ClientRiderObjectId = req.body.ClientRiderObjectId;
  }
  if (req.body.CashierName) {
    updateObj.CashierName = req.body.CashierName;
  }
  if (req.body.AssignedBy) {
    updateObj.AssignedBy = req.body.AssignedBy;
  }
  if (req.body.amount) {
    updateObj.ClientAmount = req.body.amount;
  }
  clientdata.findByIdAndUpdate(
    req.body.id,
    updateObj,
    { new: true },
    (err, data) => {
      if (!err) {
        res.send({
          data: data,
          message: "Rider assigned successfully",
          // status: 200
        });
      } else {
        res.status(500).send("error happened");
      }
    }
  );
});









app.listen(PORT, () => {
  console.log("start server....", `http://localhost:${PORT}`);
});
