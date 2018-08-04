import { delay } from "redux-saga";

export default {

    async getNotifications(){
        console.log("REAL NOTIFICATION SERVICE");

        await delay(1000);
        return {count: 42};
    }
}