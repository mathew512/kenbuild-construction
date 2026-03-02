pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        BUILD_DIR = "built"
        REPO_URL = "https://github.com/mathew512/kenbuild-construction.git"
        BRANCH = "main"
        PROJECT_DIR = "kenbuild-construction"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: "${BRANCH}",
                    credentialsId: 'jenkins-github-creds',
                    url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm test'
                }
            }
        }

        stage('Create built Directory') {
            steps {
                sh '''
                    mkdir -p ${BUILD_DIR}
                    cp -r ${PROJECT_DIR}/dist/* ${BUILD_DIR}/
                '''
            }
        }
    }

    post {
        success {
            echo "Build successful. Artifacts stored in built/"
            archiveArtifacts artifacts: 'built/**', fingerprint: true
        }
        failure {
            echo "Build failed"
        }
    }
}