pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    IMAGE_NAME = 'gvtrindade/firebase-demo'
    IMAGE_TAG = 'latest'
    APP_NAME = 'firebase-demo'
  }

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
      }
    }
  }
}