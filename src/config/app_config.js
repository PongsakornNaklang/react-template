const app_config = {
    NAME: "app-name",
    VERSION: "1.0.0",
    AUTHOR: "Pongsakorn N.",

    // ENV : "PROD",
    // ENV : "TEST",
    ENV: "DEV",
    // Usage => Ex. App_config[App_config.ENV].API

    DEV: {
        API: "https://jsonplaceholder.typicode.com/"
    },
    PROD: {
        API: "http://localhost:5000/prod"
    },
    TEST: {
        API: "http://localhost:5000/test"
    },
}

export default app_config
