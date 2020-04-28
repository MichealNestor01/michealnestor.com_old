//This app is used to enable swapping between projects on the projects picture

//This function allows you to insert variable values into a string, it works the same as the .format() function in python, which is the language I am most familiar with. 
//I found this function on stack overflow -> Inspite my searching I can't seem to find the poster, though I think it may be burried in this thread: https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

//The next two variable store the next button and previous button from the bottom of the projects projectNumber
next = document.querySelector('.next-button')
previous = document.querySelector('.previous-button')

//The projects array stores all of the items of a single project, as a single item of the array
projects = [document.querySelectorAll('#project-A'), document.querySelectorAll('#project-B'), document.querySelectorAll('#project-C')];

//project number stores the paragrah where the project number will be displayed 
projectNumber = document.querySelector('#page-number')

//this line uses the .format() function defined earlier 
projectNumber.innerHTML = 'Project 1/{}'.format(projects.length);

//current stores which project we are currently looking at
current = 0

//The following function is ran when the next button is clicked
next.addEventListener('click', () => {
    //currentProject is the project that the user is currently viewing
    currentProject = projects[current]
    //This for loop removes the class active-project-content from all of the items related to the current project
    for (i = 0; i < currentProject.length; i++) {
        currentProject[i].classList.toggle('active-project-content')
    }
    //current is then incremented by 1 because the user is trying to move forward in the projects
    current += 1
    //This if statement checks if the user has reached the last project and will take the user back to the first
    if (current > (projects.length - 1)) {
        current = 0
    }
    //currentProject is changed to the next project in projects array
    currentProject = projects[current]
    //This for loop adds the class active-project-content to all of the items related to the new current project
    for (i = 0; i < currentProject.length; i++) {
        currentProject[i].classList.toggle('active-project-content')
    }
    //The project number at the bottom of the page is the updated
    projectNumber.innerHTML = 'Project {}/{}'.format(current+1, projects.length);
});

//The following function is ran when the previous button is clicked, the logic is similar to the next function
previous.addEventListener('click', () => {
    //currentProject is the project that the user is currently viewing
    currentProject = projects[current]
    //This for loop removes the class active-project-content from all of the items related to the current project
    for (i = 0; i < currentProject.length; i++) {
        currentProject[i].classList.toggle('active-project-content')
    }
    //current is the decremented by one because the user is trying to move backwards in the projects
    current -= 1
    //This if statement checks if the user has reached the first project and will take the user to the last 
    if (current < 0) {
        current = (projects.length - 1)
    }
    //currentProject is changed to the previous project in projects array
    currentProject = projects[current]
    //This for loop adds the class active-project-content to all of the items related to the new current project
    for (i = 0; i < currentProject.length; i++) {
        currentProject[i].classList.toggle('active-project-content')
    }
    //The project number at the bottom of the page is the updated
    projectNumber.insnerHTML = 'Project {}/{}'.format(current+1, projects.length);
});
