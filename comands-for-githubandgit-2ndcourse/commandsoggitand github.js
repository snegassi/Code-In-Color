
// Command of git and github

//1st way of creating repository for Cloning so basically copy and linking it to our git (local) from scratch since we don't have it in our local pc 
// 1)Create a repository on GitHub
// 2)Clone the Repository Locally 
//      a) Navigate to your desired directory (where you want the repository to be cloned)
//      b)Clone repo:  git clone git@github.com:your-username/repository-name.git
//  3)Verify the Connection
//     a)git remote -v
// 4)Add and Push Files 
//    a)touch README.md    or   echo. > README.md     (create a README file)
//    b)git add .                                   (Stage)
//    c)git commit -m "Initial commit"              (commit)
//    d)git pull origin main					   (pull from GitHub. Make branches in Sync)
//    e)git push origin main                       (push changes to GitHub)



// 2nd way of creating repository that we created on our pc 1st then trying to link it to github, from scratch since we don't have it in our local pc

//1)git init   (this initiated, basically made my folder repository)
//2)Create an empty repository on GitHub and name it 
//3)touch README.md         (create a README file)
//4)git add .               (Stage)
//5)git commit -m "Initial commit so any message about what you commited"    (commit)   
//6)git branch -M main	
//7)git remote add origin ,(then) the link from copy in green color the http one. (ensures current branch is main)
//Example "git remote add origin git@github.com:snegassi/Commands-for_gitand-github.git "
                  //so all it does is (link your local Git repository to a remote repository)
//git push origin main       (push changes to GitHub)

//git pull origin main (for pulling command but if its new foloow the 1st method so as to clone it)