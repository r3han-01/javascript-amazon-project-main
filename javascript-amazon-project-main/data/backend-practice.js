const xhr = newXMLHttpsRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send();