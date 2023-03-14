var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://ws.ocasa.com/testecommerceV2/service.asmx',
  'headers': {
    'Content-Type': 'text/xml'
  },
  body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">\r\n   <soap:Header>\r\n      <tem:SecurityAccess>\r\n         <!--Optional:-->\r\n         <tem:UserName>0102002760</tem:UserName>\r\n         <!--Optional:-->\r\n         <tem:PassWord>Q2345*RTD9</tem:PassWord>\r\n      </tem:SecurityAccess>\r\n   </soap:Header>\r\n   <soap:Body>\r\n      <tem:Cotizar>\r\n         <!--Optional:-->\r\n         <tem:Request>\r\n            <!--Optional:-->\r\n            <tem:CotizarList>\r\n               <!--Zero or more repetitions:-->\r\n               <tem:Cotizar>\r\n                  <!--Optional:-->\r\n                  <tem:CodigoCliente>0102002760</tem:CodigoCliente>\r\n                  <!--Optional:-->\r\n                  <tem:AcuerdoProducto>004003812800010</tem:AcuerdoProducto>\r\n                  <!--Optional:-->\r\n                  <!--Optional:-->\r\n                  <tem:CPOrigen>1427</tem:CPOrigen>\r\n                  <!--Optional:-->\r\n                  <tem:CPDestino>3400</tem:CPDestino>\r\n                  <!--Optional:-->\r\n                  <tem:Peso>6000</tem:Peso>\r\n                  <!--Optional:-->\r\n                  <tem:Volumen>100</tem:Volumen>\r\n               </tem:Cotizar>\r\n            </tem:CotizarList>\r\n         </tem:Request>\r\n      </tem:Cotizar>\r\n   </soap:Body>\r\n</soap:Envelope>'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
