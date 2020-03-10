const schema = {
    "type": "object",
    "description": "JSONSchema for the Sicredi apiUrl",
    "required": [
        "id",
        "meses",
        "valor"
    ],
    "properties": {
        "id": {
            "type": "integer",
            "title": "The Id Schema",
            "examples": [1]
        },
        "meses": {
            "type": "array",
            "default": [],
            "items": {
                "type": "string",
                "examples": [
                    "112",
                    "124",
                    "136",
                    "148"
                ]
            }
        },
        "valor": {
            "type": "array",
            "default": [],
            "items": {
                "type": "string",
                "examples": [
                    "2.802",
                    "3.174",
                    "3.564",
                    "3.971"
                ]
            }
        }
    }
}

export default schema;