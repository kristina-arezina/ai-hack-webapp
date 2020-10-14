const express=require('express')

const app=express()

let p = require('python-shell');

app.get('/send',(req,res)=>{

    content=[
        {
        
            "username": "admin",
            "first_name": "",
            "last_name": "",
            "roles": "system_admin system_user",
            "locale": "en",
            "delete_at": 0,
            "update_at": 1511335509393,
            "create_at": 1511335500662,
            "auth_service": "",
            "email": "adminuser@cognizant.com",
            "auth_data": "",
            "position": "",
            "nickname": "",
            "id": "pbjds5wmsp8cxr993nmc6ozodh"
        },
        {
        
            "username": "chatops",
            "first_name": "",
            "last_name": "",
            "roles": "system_user",
            "locale": "en",
            "delete_at": 0,
            "update_at": 1511335743479,
            "create_at": 1511335743393,
            "auth_service": "",
            "email": "chatops@cognizant.com",
            "auth_data": "",
            "position": "",
            "nickname": "",
            "id": "akxdddp5p7fjirxq7whhntq1nr"
        }]


    var options = {
        args:
        [
            JSON.stringify(content)
        ]
      }
      p.PythonShell.run('compute-input.py', options, function  (err, results)  {
        console.log(results.toString())
      });

})

app.listen('5000')