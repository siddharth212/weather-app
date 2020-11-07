const router = require('express').Router();

const fetch = require('node-fetch');
router.get('/',(req,res) =>{
    res.render('index',{
                 city :null,
                des: null,
                icon: null,
                temp: null    
    });
})


router.post('/',async (req,res)=>{
    const city = req.body.city;
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21fa57b1e192195b3f37934c0a47e2cb`;
    
    try
    {
      await  fetch(url_api )
    .then(res=>res.json())
    .then(data => {
        if(data.message ==='city not found'){
            res.render('index',{
                city : data.message,
                des: null,
                icon: null,
                temp: null
            })
        } else{
            const city = data.name;
            const des = data.weather[0].description;
            const icon = data.weather[0].icon;
            const temp = data.main.temp;
            res.render('index',{
                city, des, icon, temp 
            });
        }
    });

    } 
    catch(err)
    {
 res.render('index',{
     city: 'something wrong',
     desc: null,
     icon: null,
     temp: null
 })
    }



  
})

module.exports = router;  