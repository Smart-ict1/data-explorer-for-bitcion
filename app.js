var express = require("express");
var app = express();
var request = require("request");
var bitcore = require("bitcore-lib");
var fetch = require("node-fetch");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/js',express.static(__dirname+'public/js'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/png',express.static(__dirname+'public/png'));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index");
});

app.get("/verefications", function(req,res){
    res.render("index3");
});

app.get("/bitcionInfo", async function(req,res){
    const api_url="https://sochain.com/api/v2/get_price/BTC"
    const response= await fetch(api_url);
    const json = await response.json();
    const priceUSD=json.data.prices[0].price
    console.log(priceUSD)
    res.render("index4",{price:priceUSD});
});

function  brainWallet(uinput, callback){
    var input = new Buffer(uinput);
    var hash = bitcore.crypto.Hash.sha256(input);
    var bn = bitcore.crypto.BN.fromBuffer(hash);
    var pk = new bitcore.PrivateKey(bn).toWIF();
    var addy = new bitcore.PrivateKey(bn).toAddress();
    callback(pk, addy);
};

app.post("/wallet", function(req,res){
    var brainsrc = req.body.brainsrc;
    console.log(brainsrc);
    brainWallet(brainsrc, function(priv, addr){
        res.render('index2',{title:brainsrc,adress:addr,privetkey:priv});
        app.post("/verefication",async function(req,res){
            
            const api_url="https://sochain.com/api/v2/get_address_balance/BTC/"+addr;
            console.log(api_url);
            const response= await fetch(api_url);
            const json = await response.json();
            const confbal=json.data.confirmed_balance
            console.log(confbal);
            const unconfbal=json.data.unconfirmed_balance
            res.render('index33',{adress:addr,Text:'Your adress is Corect',confbala:confbal,unconfbala:unconfbal});
            console.log(json);
            });
        
        });
    });

app.post("/checkthesolde", async function(req,res){
    var addrr=req.body.addrr;
    const api_url="https://sochain.com/api/v2/is_address_valid/BTC/"+addrr;
    const response= await fetch(api_url);
    const json = await response.json();
    const condition=json.data.is_valid;
    if (condition) {
        const api_url="https://sochain.com/api/v2/get_address_balance/BTC/"+addrr;
        const response= await fetch(api_url);
        const json = await response.json();
        const confbal=json.data.confirmed_balance
        const unconfbal=json.data.unconfirmed_balance
        res.render('index33',{adress:addrr,Text:'Your adress is corect',confbala:confbal,unconfbala:unconfbal});

    } else {
        res.render('index33',{adress:addrr,confbala:'NON',unconfbala:'NON',Text:'Your adress is not defind'});
    }
    
});

app.listen(80, function(){
    console.log("go");
});