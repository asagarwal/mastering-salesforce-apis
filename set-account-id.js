var jsonData = JSON.parse(responseBody);
pm.collectionVariables.set("AccountId", jsonData.id);
