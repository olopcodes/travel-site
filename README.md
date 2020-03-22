#Travel Website

This site demonstrates a developer's workflow and uses webpack to bundle files together.

## This uses postcss as the preprocessor

Make changes to the VSCode editor
1.  go to settings at the bottom of the code editor
2.  check the top right of the settings page with a paper with an arrow icon and click on it
3.  add a comma and add this to the json
    "files.associations": {
        "*.css": "scss"
    }
4.  keep naming your css files .css and should be able to do most of the things you do with sass with postcss
5. need to add postcss-sassy to use sass like mixins
    - npm install postcss-sassy-mixins
6. Else you can write mixins in postCss like this:

        @define-mixin atMedium {
            // content
        }
    
    use a mixin like this:
        @mixin atMedium {
            // content
        }