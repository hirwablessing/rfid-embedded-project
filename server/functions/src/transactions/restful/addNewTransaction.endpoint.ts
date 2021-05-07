import { Request, Response } from "express";
import firebase from "firebase";
import { Endpoint, RequestType } from "firebase-backend";
import { db } from "../../config/firebase";

export default new Endpoint(
  "addNewTransaction",
  RequestType.POST,
  (request: Request, response: Response) => {
    const cardOwner = request.body["owner"];
    const destination = request.body["destination"];
    const cardUUid = request.body["uuid"];
    const transportFare = request.body["transportFare"];
    const initialBalance = request.body["initialBalance"];
    const newBalance = request.body["newBalance"];

    try {
      const entry = db.collection("tapAndPay").doc();
      const entryObject = {
        card_owner: cardOwner,
        destination: destination,
        card_uuid: cardUUid,
        transport_fare: transportFare,
        initial_balance: initialBalance,
        new_balance: newBalance,
        transaction_time: firebase.firestore.FieldValue.serverTimestamp(),
      };

      entry.set(entryObject);

      response.status(200).send({
        status: "success",
        message: "Transaction added successfully",
        data: entryObject,
      });
    } catch (error) {
      response.status(500).send(error.message);
    }
  }
);
