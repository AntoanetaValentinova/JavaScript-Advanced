class Story {

    constructor(title, creator) {
        this.title =title;
        this.creator=creator;
        this._comments=[];
        this._likes =[];
    }


    get likes () {
        if (this._likes.length===0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length===1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
        }
    }

    like (username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (username===this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike (username) {
        if (this._likes.includes(username)===false) {
            throw new Error('You can\'t dislike this story!');
        }
        let index=this._likes.findIndex(e=>e===username);
        this._likes.splice(index,1);
        return `${username} disliked ${this.title}`
    }

    comment (username, content, id) {
        let comment=this._comments.find(e=>e.Id===id);
        if (id===undefined||comment===undefined) {
            let newComment={
                Id:this._comments.length+1, 
                Username:username, 
                Content:content, 
                Replies:[]
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        } else {
            let newRepply={
                Id:comment.Id+"."+(comment.Replies.length+1), 
                Username:username, 
                Content:content
            }
            comment.Replies.push(newRepply);
            return `You replied successfully`;
        }
    }

    toString (sortingType) {
        let output='';
        output+=`Title: ${this.title}\n`;
        output+=`Creator: ${this.creator}\n`;
        output+=`Likes: ${this._likes.length}\n`;
        output+=`Comments:\n`;
        if (sortingType==='asc') {
            this._comments.sort((a,b)=>a.Id-b.Id);
            this._comments.forEach(c=>{
                c.Replies.sort((a,b)=>a.Id-b.Id)
            });
        } else if (sortingType==='desc') {
            this._comments.sort((a,b)=>b.Id-a.Id);
            this._comments.forEach(c=>{
                c.Replies.sort((a,b)=>b.Id-a.Id)
            });
        } else if (sortingType==='username') {
            this._comments.sort((a,b)=>a.Username.localeCompare(b.Username));
            this._comments.forEach(c=>{
                c.Replies.sort((a,b)=>a.Username.localeCompare(b.Username))
            });
        }
        this._comments.forEach(c=> {
            output+=`-- ${c.Id}. ${c.Username}: ${c.Content}\n`;
            c.Replies.forEach(r=>output+=`--- ${r.Id}. ${r.Username}: ${r.Content}\n`);
        })
        return output.trim();
    }
   
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
