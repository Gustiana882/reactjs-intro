def builderImage
def imagename = 'gustiana/front-blanja:1.0'
pipeline {
    agent any

    stages {
        // stage('Instaling') {
        //     steps {
        //         nodejs("nodejs") {
        //             sh 'ls'
        //         }
        //     }
        // }
        stage("Build image") {
            steps {
                script {
                    builderImage = docker.build("${imagename}")
                }
            }
        }
        stage("Push Image") {
            steps {
                script {
                    builderImage.push()
                }
            }
        }
        stage("finish") {
            steps {
                sh "docker image prune -f"
                sh "echo 'success runing'"
            }
        }
    }
}