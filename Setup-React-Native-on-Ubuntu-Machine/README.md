 Installing Node, NPM
     * sudo apt install nodejs
     * sudo apt install npm

- Installing JDK, Android Studio, Android SDK
      * sudo apt install default-jdk

- Installing  Android Studio

      * sudo apt update
      * sudo apt install android-studio

- Configuring the ANDROID_SDK_ROOT environment variable
    
     - nano ~/.bash_profile
     * export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
     * export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
     * export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tool

- Installing React Native Project
     * npx react-native init AwesomeProject

- Running the project on an android emulator.  
     * npx react-native start
     * npx react-native run-android