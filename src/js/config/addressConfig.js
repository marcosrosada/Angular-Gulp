angular.module('ssms').constant("config", (function () {

   var url 	 	 = "http://localhost", //http://192.168.",
       port	 	 = ":8080",
       service	 = "/workshop/service",
       upload	 = "/workshop/upload",
       download  = "/workshop/download";

	return {
		baseUrl			: url + port + service,
		baseUrlUpload   : url + port + upload,
		baseUrlDownload : url + port + download
	};
})());