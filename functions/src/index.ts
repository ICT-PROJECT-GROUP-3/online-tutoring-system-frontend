import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import axios from "axios";

admin.initializeApp();

export const createChatEngineUser = functions.auth.user().onCreate((user) => {
    axios.post(
        "https://api.chatengine.io/users/",
        {
        username: user.email,
        secret: user.uid,
        email: user.email,
        first_name: user.displayName,
        },
        { headers: { "Private-Key": "be1cedf1-6e2e-4a00-9105-afe77d8bc202" } }
        );
});

export const deleteChatEngineUser = functions.auth.user().onDelete((user) => {
    axios.delete("https://api.chatengine.io/users/me/", {
        headers: {
        "Project-ID": "0e9a66df-61c6-47d2-b4f0-0515eef04fe0",
        "User-Name": user.email,
        "User-Secret": user.uid,
        },
        });
});