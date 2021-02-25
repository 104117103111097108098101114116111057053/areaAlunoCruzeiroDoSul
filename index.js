var nativefier = require('nativefier').default;

var options = {
    singleInstance: true,
    name: 'Cruzeiro do sul',
    platform: 'windows',
    arch: 'x64',
    counter: true,
    honest: true,
    internalUrls: '.*?',
    maximize: 'true',
    //basicAuthUsername: '',
    //basicAuthPassword: '', 
    fileDownloadOptions: {
        saveAs: true,
    },
}

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});