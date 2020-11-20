import app_config from "../config/app_config"

const api = app_config[app_config.ENV].API

export const getAllPost = async () => {
    try {
        const res = await fetch(api + 'posts')
        const resjson = await res.json()

        return resjson
        // callback(resjson)
    } catch (error) {
        // callback(error)
    }
}