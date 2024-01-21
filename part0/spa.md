```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: Same number of fetches and resources but different endpoints
    rect green
        activate server
        server-->>browser: GET https://studies.cs.helsinki.fi/exampleapp/spa
        server-->>browser: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        server-->>browser: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        deactivate server
    end
    Note over browser: The difference between main.js and spa.js is that the latter<br>is refactored and maintains its own storage in the browser<br>to show updates without unnecessary calls

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "...", "date": "XXXX-X-X" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```
