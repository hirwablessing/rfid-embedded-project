/* eslint-disable linebreak-style */
import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";
import { db } from "../../config/firebase";

export default new Endpoint(
  "addNewTransaction",
  RequestType.POST,
  (request: Request, response: Response) => {
    const cardOwner = request.body["owner"];
    const destination = request.body["destination"];
    const cardUUid = request.body["uuid"];
    const initialBalance = request.body["initialBalance"];
    const newBalance = request.body["newBalance"];

    console.log(cardUUid, cardOwner, initialBalance);

    try {
      const entry = db.collection("tapAndPay").doc();
      const entryObject = {
        card_owner: cardOwner,
        destination: destination,
        cardUUid: cardUUid,
        initial_balance: initialBalance,
        newBalance,
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

    // return response.status(201).send({
    //   uuid: cardUUid,
    //   owner: cardOwner,
    //   balance: initialBalance,
    // });
  }
);
