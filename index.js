const data = {
    "curlRequest": "curl -X POST https://example.com/api/path/uuid/subpath --data-raw '{"key": "value"}'",
}

function extractDataRaw(curlString) {
    const dataRawRegex = /--data-raw '([^']*)'/;

    const matches = dataRawRegex.exec(curlString);

    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null;
    }
}

function extractUUID(curlString) {
    const uuidRegex = /path\/([^\/]+)\/subpath/;
    const matches = uuidRegex.exec(curlString);

    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null; 
    }
}


const curlString = data.curlRequest
const dataRaw = extractDataRaw(curlString);
const uuid = extractUUID(curlString);
console.log(dataRaw);
console.log(orderRefId)
