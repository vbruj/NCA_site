import axios from "axios"

export default {
    actions: {
        LOGIN: ({
            commit
        }, payload) => {
            return new Promise((resolve, reject) => {
                axios.post("login", payload).then(({
                    data,
                    status
                }) => {
                    if (status === 200) {
                        // console.log(commit)
                        // console.log(data)
                        localStorage.setItem("nomer_tor", data["nomer_tor"])
                        localStorage.setItem("auth_key", data["auth_key"])
                        sessionStorage.setItem("nomer_tor", data["nomer_tor"])
                        sessionStorage.setItem("auth_key", data["auth_key"])
                        // this.$store.state.nomer_tor = data["nomer_tor"];
                        // this.$store.state.auth_key = data["auth_key"];

                        resolve(true)
                    }
                    console.log(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}