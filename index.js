
export function extractDataRaw(curlString) {
    const dataRawRegex = /--data-raw '([^']*)'/;

    const matches = dataRawRegex.exec(curlString);

    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null;
    }
}

export function extractUUID(curlString) {
    const uuidRegex = /path\/([^\/]+)\/subpath/;
    const matches = uuidRegex.exec(curlString);

    if (matches && matches.length > 1) {
        return matches[1];
    } else {
        return null;
    }
}
