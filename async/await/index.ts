async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async data has been fetched!");
        }, 2000);
    });
}

async function fetchDataAsync(): Promise<void> {
    try {
        const result = await fetchData();
        console.log(result); // Output: Async data has been fetched!
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
fetchDataAsync();