# Netflix Clone REACT APP
## https://netflix-clone-3cd7b.web.app
Netflix Clone is a web app with front end built in REACT and is fetching its data from TMDB API. Hosted on firebase, below are several screenshots and features of the App. It is fully responsive and contents are fecthed dynamically from the API.

## ScreenShots and Features
![Screen Shot 2022-01-13 at 1 28 59 PM](https://user-images.githubusercontent.com/66316798/149388396-ae9f0765-caf9-4234-a08b-4ac995be7fe6.png)
### Navigation Bar -
Navigation bar is a fixed with Netflix logo and Avatar Logo on the right. Once page is scrolled down the black background behind Nav-bar comes in, kick in at 300px and when scrolled up and reaches 300px the black background disappears making the top image of featured movie more visible.
### Featured Movie Image/Contents
This is a dynamc image and changes on every refresh, which is fetched from the API randomly with currently set to Trending Now movies but can be chaged to any movie genre with just couple changes. With contents of the movie like movie title and descriptions are also fetched dynamically with respect to the image. The image description is truncated to 150 words, giving it a more cleaner look. Added a background overlay color to just the text making it more clearer to read and keeping rest of the image more brighter.

![Screen Shot 2022-01-13 at 1 29 10 PM](https://user-images.githubusercontent.com/66316798/149389384-b10c58e3-fefb-47f3-9e25-5da0e7eda8f3.png)
### Movie Rows
All the rows are fetched dynmaically as well from the API and are using seperate row component with Props for row titles, and using map function in the API array to get all the movies and images displayed automatically. All the rows are scrollable as in real Netflix Website and have a really cool transition effects on hover.
You will see the Netflix Originals section images are slightly bigger and differnt type of image is displayed for this, using smae row component but a seperate CSS class is used on the same HTML components with if else statements. 

![Screen Shot 2022-01-13 at 1 29 35 PM](https://user-images.githubusercontent.com/66316798/149390033-9b256c06-bc76-419e-b438-ded989aa27b4.png)
### Movie Trilors
Once cliked on the movies banner the movie trailor part shows under the row and clicking the movie banner again makes it disappear. React-Youtube repository is used to get movie trailors fetched from Youtube directly and is happening dynamically for all the movies, youtube searches for the movie with the movie title automatically and displays the trailor of the movie if found with matching name, as it is fetched from an API some movie names/titles are not appropriate or according to real movies and youtube cannot look for them making it not show and log the error in console in these cases.
