function solve () {

    class Post {
        constructor (title,content) {
            this.title=title;
            this.content=content;
        }
        toString () {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor (title,content,likes,dislikes) {
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.comments=[];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString () {
            let resultCommets='';
            this.comments.forEach(c=>resultCommets+=` * ${c}\n`)
            resultCommets.trim();
            return `${super.toString()}\nRating: ${this.likes - this.dislikes}${this.comments.length!==0?`\nComments:\n${resultCommets}`:''}`.trim();
        }
    }

    class BlogPost extends Post {
        constructor (title,content,views) {
            super(title,content);
            this.views=views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString()+`\nViews: ${this.views}`
        }
    }

    return {Post,SocialMediaPost,BlogPost}
}

let result=solve();

let post = new result.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new result.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!


console.log('____________________')

let test = new result.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");

console.log(test.toString());

console.log('____________________')
let test2 = new result.BlogPost("TestTitle", "TestContent", 5);

test2.view().view().view();
console.log(test2.toString())
