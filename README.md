# video_streaming

This project aims to explore various techniques involved in streaming videos over the internet.


### Demo

[http://www.youtube.com/watch?v=P5ZLoHmLKnk](http://www.youtube.com/watch?v=P5ZLoHmLKnk)

[![YouTube Link](https://img.youtube.com/vi/P5ZLoHmLKnk/0.jpg)](http://www.youtube.com/watch?v=P5ZLoHmLKnk)


### Folder Structure
- "initial-attempt" => This is a simple node js server which utilizes polling for keeping the video in sync
- "dash-streaming" => In this, we've used adaptive bitrate (abr) streaming technology mpeg-dash for low bandwidth support
- "dash-live-streaming" => In here we've used [Learn2Adapt-LowLatency algorithm](https://engineering.purdue.edu/~isl/papers/sigcomm18-final128.pdf) on top of mpeg-dash for low latency sync between abr video streams

### Up and running

For running any project in the sub-folder. First download and extract [files.zip](https://drive.google.com/file/d/1hFWmqu36zFWX_CHiaKYB156k93C3bl_T/view?usp=sharing) in the root of the project

```
$ npm install
```

```
$ cd <project-folder> 
```

```
$ node server.js
```

In Browser open port with project-port mentioned in the terminal output while starting the server

```
http://localhost:<project-port>
```


For opening in mobile on same network. 

1. Determine ip of your computer system from network preferences or using ipconfig(windows) / ifconfig(unix based OS)
2. type following in url bar

```
http://<ip>:<project-port>
```

3. press enter
