var jsonObject = xml2Json(responseBody);
postman.setEnvironmentVariable("SessionId", jsonObject["soapenv:Envelope"]["soapenv:Body"]["loginResponse"]["result"]["sessionId"]);
