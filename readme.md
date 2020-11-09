![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | CSS Instagram Clone

## Introduction

One of the best ways to sharpen your CSS skills is to try to recreate an existing style and layout, so take a look at the deliverable below, work with a partner, and build your own version of Instagram.com. Don't worry if you can't get it to look _exactly_ as you see but try your best to get as close as possible.

There's a bit of starter code, so you can jump right into it.

## Requirements

- Fork this repo
- Clone this repo

* Use one of the CSS layout techniques to position elements on the page ([display](https://developer.mozilla.org/en-US/docs/Web/CSS/display), [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float), [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), or [grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids))
* Look up in [MDN](https://developer.mozilla.org/en/) and use CSS properties and values that may not have been covered in class, for example:
  - `background: url("YOUR-LINK.COM")`
  - `list-style`
  - `text-decoration`
  - `text-transform`
* Use a single external CSS stylesheet to style all pages
* Use the images provided to construct the appropriate elements on the page:
  - the iPhone
  - App Store and Google Play buttons
  - Instagram Logo
  - Login button

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.

## Instructions

You are provided with files, images, and text content needed to create the page. The text is in the `index.html`, and the color palette is in `styles/style.css` file.

## Deliverable

Please find a screenshot of the expected result below:

![Instagram lab Screenshot](https://i.imgur.com/DQ9fk1u.png)

## Extra Resources

- [CSS Reference from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

**Happy coding!** :heart:
Colors to use:
/*
dark blue: #06365f
light blue: #1c5380
*/

body{
  font: 200 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
}

.background {
  background: linear-gradient(180deg, #1c5380 50%, white 50%);
  display: flex;
  justify-content: center;
  position: absolute;
  
}
.background > img {
  padding : 200px 30px 100px 100px ;
  max-height: 800px;
  position : relative;
  width: 60%; 
  min-width: 10%;

}
.instadiv {
  padding: 200px 200px 200px 30px;
  max-height: 800px;
  max-height: 600px;
  position: relative;
  justify-content: space-between;  
}

.instadiv > img {
  min-width: 10%;
}

.button {
  background-image: url("./images/home.png");
  }

.text-box {
  background-color: white;
  padding: 20px;  
  border-radius:1.5% ;
  line-height: 190%;
  font-size: 130%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.text-box > h2 {
  color: #06365f ;
  line-height: 120%;
}
.appstore {

  
}


.ended {
  color: black;
  display:flex;
  position: relative;
  justify-content: space-around;

    
  

  

}

