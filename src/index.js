async function getMyInfo() {
    try {
        const response = await fetch('https://fdnd.directus.app/items/person/222');  // Waits for fetch to complete
        const data = await response.json();                            // Waits for JSON parsing to complete
        console.log(data);                                             // Logs the data
    } catch (error) {
        console.error('Error:', error);                                // Catches and logs any errors
    }
}

getMyInfo();  // Call the function