let count = 0;
export default {

    __setCount(__count){
        count = __count;
    },
    async getNotifications(){
        console.warn("Good Job! USING MOCK SERVICE");
        return {count};
    }
}