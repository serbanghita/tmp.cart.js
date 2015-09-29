<?php
require_once 'vendor/autoload.php';

$endpoint_uri = 'https://secure.avangate.com/order/checkout.php?PRODS=4594167&QTY=1&CART=1&CARD=2&CLEAN_CART=all';

$formFields = [
    'ajaxRouting' => true,
    'prod0' => 4594167,
    'qty0' => 2,
    'fname' => 'Serban',
    'lname' => 'Test',
    'address' => 'str. Washington nr. 7',
    'city' => 'Bucuresti',
    'zipcode' => '011761',
    'billingcountry' => '150',
    'email' => 'sg@avangate.com',
    're_email' => 'sg@avangate.com',
    'payment' => 1,
    'billing_currency' => 'EUR',
    'ccnumber' => '4111111111111111',
    'ccexpmonth' => '01',
    'ccexpyear' => '2017',
    'cvv2' => '123',
    'nameoncard' => 'Serban Test',
    'Submit' => true
];

$jar = new \GuzzleHttp\Cookie\CookieJar;

$client = new \GuzzleHttp\Client(['http_errors' => false, 'cookies' => true]);
$request = $client->createRequest('POST', $endpoint_uri, [
    'headers' => [
        'User-Agent' => 'Mozilla/5.0 Ghita The Baws',
        'Content-Type' => 'application/x-www-form-urlencoded',
        'Accept' => 'application/json',
        'Connection' => 'close'
    ],
    'cookies' => $jar,
    'body' => http_build_query($formFields),
    'verify' => false,
    'proxy' => [
        //'http' => ''
        //'http'  => 'tcp://proxy.avangate.local:8080', // Use this proxy with "http"
        //'https' => 'tcp://proxy.avangate.local:8080', // Use this proxy with "https",
    ]
]);
var_dump($request->getHeaders());
$response = $client->send($request);
var_dump($response->getHeaders());

var_dump($response->getStatusCode());
var_dump($response->getBody()->getContents());