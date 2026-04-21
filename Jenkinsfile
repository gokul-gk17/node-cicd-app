pipeline {
    agent any

    environment {
        APP_PORT = '3000'
        APP_DIR  = '/home/ubuntu/node-cicd-app'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/gokul-gk17/node-cicd-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Stop Existing App') {
            steps {
                sh '''
                    PID=$(lsof -t -i:${APP_PORT}) || true
                    if [ -n "$PID" ]; then
                        kill -9 $PID
                    fi
                '''
            }
        }
        stage('Deploy App') {
            steps {
                sh '''
                    pm2 delete all || true
                    pm2 start app.js
                    pm2 save
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'curl -s -o /dev/null -w "HTTP Status: %{http_code}" http://localhost:${APP_PORT}'
            }
        }
    }
}