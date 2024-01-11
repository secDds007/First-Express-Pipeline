pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
      }

	tools {
        nodejs 'node' // 'node' is the tool name defined in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js and npm') {
            steps {
                script {
                    // Install Node.js and npm using the tool defined above
                    def nodeHome = tool 'node'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"

                    // Print Node.js and npm versions for verification
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }

    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                npm install
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                npm start server.js
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
