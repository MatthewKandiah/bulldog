# bulldog
Somehow I've never actually tried just building a simple site and server. Going to have a go at writing some really basic HTML/CSS/JS to make a really simple site. Writing the server in Rust with actix-web because I've played with it a little bit before. 

## Gameplan
- make a server that will just serve some directory of static files
- follow a tutorial to build a todo list, going to need some hand holding to build any sort of UI that isn't just painful to look at
- apply ideas from tutorial to build a calculator with your calculation history displayed
- make an index page with a menu of buttons to navigate to the other pages

If we get that far, maybe we'll try something a little more ambitious. Some ideas:
- extend the todo list to have account creation, authentication, and a database that stores your todo list items across sessions
- play with setting up an audio graph for audio recording and playback
- similar idea but for video
- set up a web worker to apply some real-time transformation to a media stream -> turn video monochrome / apply noise cancellation to audio 

