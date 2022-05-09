node {
    def app 
    stage('Clone repository') {
        checkout scm  
    }
    stage('Build docker Image'){
        app = docker.build("sriram1999/sriram-cicd-task1")
    }
    stage('Test Image'){
        app.inside {
            sh 'echo "TEST PASSED"'
        }  
    }
    stage('Push Image'){
        docker.withRegistry('https://registry.hub.docker.com', 'a05abf3f-ad1a-4b9d-a8e5-ec4586d113d3') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")   
        }
    }
}