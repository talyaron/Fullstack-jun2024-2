// async await
async function getData() {
    console.time("fetching data");
    const r = await fetch("https://jsonplaceholder.typicode.com/posts"); //--> Event loops
    const data = await r.json();
    console.log(data);
    console.timeEnd("fetching data");
}
getData();

//Promise getData2
function getData2() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                resolve(data);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
                reject(error);
            });
    });
}

// Example usage
getData2()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
// Callback getData

// Callback getData3
function getData3(callback: (error: Error | null, data?: any) => void) {
    console.time("fetching data with callback");
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.timeEnd("fetching data with callback");
            callback(null, data);
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
            console.timeEnd("fetching data with callback");
            callback(error);
        });
}

// Example usage



const callbackFunction = (error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data received 2222222:", data);
    }
}

getData3(callbackFunction);

console.log("after callback");

//Promise.all
// with dog api

const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

async function fetchDogImages() {
    try {
        const responses = await Promise.all([
            fetch(dogApiUrl),
            fetch(dogApiUrl),
            fetch(dogApiUrl),
        ]);

        const dataPromises = responses.map((response) => response.json());
        const data = await Promise.all(dataPromises);

        console.log("Dog images:", data);
    } catch (error) {
        console.error("Error fetching dog images:", error);
    }
}

//Promise.race
async function fetchFirstDogImage() {
    try {
        const responses = await Promise.race([
            fetch(dogApiUrl),   
            fetch(dogApiUrl),
            fetch(dogApiUrl),
        ]);
        const data = await responses.json();
        console.log("First dog image:", data);
    }
    catch (error) { 
        console.error("Error fetching first dog image:", error);
    }
}


useEffect(() => {
    //some function
    const interval = setInterval(() => {
        console.log("Interval running");
    }, 1000);

    return () => {
        clearInterval(interval);
    }
}, []);
