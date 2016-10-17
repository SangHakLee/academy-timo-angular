/**
 * Created by user on 2016-06-11.
 */
angular.module("phonebook.service",["ngResource"])
    .service("Phone",function($resource) {

        return $resource("https://api.mlab.com/api/1/databases/ani/collections/phonebook/:id",
            {id:"@_id.$oid",//:id에 들어갈 아이디
                apiKey:"mEnc5U1gz4CKrRrgzKUUkIo2nLSbPNyO"},//@ : 우리가 넣은 인자가 문자열이 아니라 객체
            {update:{method:"PUT"}});

    });//service() end