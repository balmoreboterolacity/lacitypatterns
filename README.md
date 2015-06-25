## City of Los Angeles Pattern Library

GovStyle LA / Style LA

Take part in a unique opportunity to help unify and improve the design and usability of City of LA websites and apps.  The City’s Web Team has been working on a proposed Style Guide to be used as the go-to style resource for all site and app development.  Not only is this Style Guide supposed to help streamline development, but it should provide great-looking style that can be used by all City Departments while ensuring responsiveness and accessibility.  

View the Style Guide at [contact.lacity.org/style/](http://contact.lacity.org/style/).

Here are instructions on how you can participate:

1.Software Requirements 

Install the following in the order listed:

- Git 
    - [https://git-scm.com/downloads](https://git-scm.com/downloads)
    - For Windows : Make sure you select “Use Git from the Windows Command Prompt”

- PHP 5.3+
    - For Windows: [http://windows.php.net/download/#php-5.5](http://windows.php.net/download/#php-5.5)
    - For Mac OS X, PHP already installed

- Ruby
    - [https://www.ruby-lang.org/en/documentation/installation/#homebrew](https://www.ruby-lang.org/en/documentation/installation/#homebrew)



- Sass
    - [http://sass-lang.com/install](http://sass-lang.com/install)

- Compass
    - [http://thesassway.com/beginner/getting-started-with-sass-and-compass](http://thesassway.com/beginner/getting-started-with-sass-and-compass)


2.GitLab.com Instructions

- Create a free GitLab.com account and sign in
    - https://gitlab.com/users/sign_in
    
- Go to the ITA LA City Patterns GitLab.com Repo
    - https://gitlab.com/itawebservices/lacitypatterns
    
- Fork the repo to your account ( The Fork link is in the top right of the page )

- Run the following Git Commands from the command line

    - Bring in the forked repo locally
        - git clone [fork-repo-url]
        
    - Branch off of Master with your own branch 
        - git checkout -b [branch-name]
        
    - Add an Upstream Remote
        - git remote add upstream https://gitlab.com/itawebservices/lacitypatterns.git
        
3.Pattern Lab Instructions

The LA City Style Guide is built using Pattern Lab.  Those new to Pattern Lab should get more acquainted with its structure with the instructions below:

- Go to the Pattern Lab site for documentation
    - http://patternlab.io/docs/index.html
    
- Once the LACity Patterns repo is cloned locally open the “lacitypatterns” folder
    - rename the “_public” folder to “public”
    
- Use the command line to run Compass Watch on the “source” folder in “lacitypatterns”
    - compass watch
    - Leave the Compass watch terminal window open
    
- Use the command line to generate and watch the “lacitypatterns” folder
    - php core/builder.php -w -r
    - Leave the PHP watch command terminal window open
    
- Edit the files in the “source” folder ONLY 

- Work on LACity Patterns files. Upon save, the Compass and PHP watch commands will run and rewrite the “public” folder 

- Run the following Git Commands from the command line
    - Commit your changes to your own forked repo
        - git add [files-to-add] or git add -A
        - git commit -m "Commit message"
        - git push origin [branch-name] -u
        
4.Hack Night Instructions

On Hack Night all participants who have forked the LACity Patterns repo will be given collaborator access in order to push their branches directly into the LACity Patterns Repo.
- Committed changes upstream to the LACity Patterns repo (Note the following step can only be done at Hack Night after you have been added as a collaborator )
    - git push -u upstream  [branch-name]
