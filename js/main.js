
const { createApp } = Vue
createApp({
    data() {

        return {
            open :false,
            newMessage: {
                date: '',
                message: '',
                status: ""
                
            },
            myAvatar:'img/avatar_io.jpg',
            pathAvatar:'',
            currentUser:{},
            currentAvatar: "",
            messaggiInviati: [],
            messaggiRicevuti: [],
            contatti: [
                {
                    name: "Michele",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                        {
                            date: "11/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        }
                    ],
                },
            ]

        }


    },
    methods: {
        lastDate(item){
            const lastdateIndex =item['messages'].length-1
            //lasteDate prendiamo alla fine del array troviamo un oggetto e lo apriamo con la chiave date 
            let lastDate =item['messages'][lastdateIndex]['date']
            lastDate =lastDate.split(' ')
            lastDateHours = lastDate[1]
            console.log(lastdateIndex)
            console.log(lastDateHours)
            return lastDateHours
        },
        openChat(item) {
            this.open=true
            this.currentAvatar = item['avatar']
            this.currentUser['name'] = item['name']
            this.pathAvatar =`img/avatar${this.currentAvatar}.jpg`
            console.log(this.currentAvatar)
            this.messaggiInviati = []
            this.messaggiRicevuti = []
            for (let i = 0; i < item['messages'].length; i++) {
                const messaggio = item['messages'][i]
                if (messaggio['status'] === "received") {
                    this.messaggiRicevuti.push(messaggio)
                } else if (messaggio['status'] === "sent") {
                    this.messaggiInviati.push(messaggio)
                }
            }
        },
        addNewMessage() {
            let dataMessaggio = new Date
            dataMessaggio = dataMessaggio.getHours() + ':' + dataMessaggio.getMinutes()
            console.log(dataMessaggio)
            const avatar = this.contatti.find((elemnt) => elemnt.avatar === this.currentAvatar)
            this.newMessage['status'] = 'sent'
            this.newMessage['date'] = dataMessaggio
            avatar['messages'].push(this.newMessage)

            this.messaggiInviati.push(this.newMessage)

        }
    },
    beforeMount(){
        this.open = true
        this.currentAvatar =this.contatti[0]['avatar']
        this.currentUser['name'] = this.contatti[0]['name']
        this.pathAvatar =`img/avatar${this.currentAvatar}.jpg`
        const firstUser = this.contatti[0]
        for(let i = 0;i<firstUser['messages'].length;i++){
            console.log(firstUser['messages'][i])
            const messaggio = firstUser['messages'][i]
            if(messaggio['status']=== "sent"){
                this.messaggiInviati.push(messaggio)
            }else if (messaggio['status'] === "received") {
                this.messaggiRicevuti.push(messaggio)
            }
        }

    }
}).mount('#app')