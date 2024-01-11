pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
      }

	tools {
        nodejs 'node' // 'node' is the tool name defined in Jenkins Global Tool Configuration
    }

    triggers {
        pollSCM '* * * * *'
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
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                npm install
                npm start
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                npm test
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