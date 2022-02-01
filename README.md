steps to run this app:
1) download docker desktop app;
2) run powershell or any other terminal and type "docker pull webbylabhub/movies" - this would download backend part for the app;
3) run docker desktop -> go to "images" tab -> you should see our backend image "webbylabhub/movies". Run it through typing "docker run --name movies -p 8000:8000 webbylabhub/movies" in powershell;
4) in powershell run "docker pull bogdankol/test-react-repo" - this would download our front-end part of the app;
5) in docker desktop you should see a new image called "bogdankol/test-react-repo". Now run it either through docker desktop (just press run button on the right side of image and choose a local port for app to run) or the same way as we ran "webbylabhub/movies" (powershell -> "docker run --name front-end -p 4000:3000 bogdankol/test-react-repo")
6) Now in docker desktop go to the "containers/apps" tab -> you should see two green boxes - these are our running images. one named "movies" and other one named "front-end";
7) move cursor to our front-end part this tab -> there would be a button "open in browser" - press it and wait for a few;
8) A browser should open automatically with new tab;
9) if you did all right - you should be able to register/login without any obstacles;

Link to docker image: https://hub.docker.com/r/bogdankol/test-react-repo