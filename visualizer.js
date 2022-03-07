var template = `
    <style type="text/css">

    table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 50%;
            }

            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }

            tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
    
    <table>
        <tr>
            <th>Name</th>
            <th>Billing City</th>
        </tr>
        
        {{#each response.records}}
            <tr>
                <td>{{Name}}</td>
                <td>{{BillingCity}}</td>
            </tr>
        {{/each}}
    </table>
`;
pm.visualizer.set(template, {
    response: pm.response.json()
});
