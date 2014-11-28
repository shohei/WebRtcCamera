module.exports  = function(grunt){
    grunt.initConfig({
        jade:{
            compile:{
                options:{
                    // debug:true,
                    pretty: true 
                },
                files:{
                    "index.html":["templates/index.jade"]
                }
            }
        },
        connect:{
            server:{
                options:{
                    port:9000,
                    keepalive:true,
                    hostname:'localhost'
                }
            }
        },
        watch:{
            scripts:{
                files:["templates/*.jade"],
                tasks:['jade:compile']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default','jade'); 

}
