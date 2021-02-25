var nativefier = require('nativefier').default;

var options = {  
    name: 'Cruzeiro do sul',
    singleInstance: true,
    targetUrl: 'https://novoportal.cruzeirodosul.edu.br/',
    platform: 'windows',
    arch: 'x64',
    counter: true,
    honest: true,
    internalUrls: '.*?',
    showMenuBar: true,
    maximize: 'true',
    //basicAuthUsername: '',
    //basicAuthPassword: '', 
    fileDownloadOptions: {
        saveAs: true,
    },
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});