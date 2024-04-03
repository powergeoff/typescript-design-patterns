class User {
  constructor(name: string, email: string) {}
  //not gonna do any auth - that's seperate
}

class UserAuthentication {
  constructor(user: User) {} //has a user
  authenticate(password: string) {
    //whatever
  }
}

class BlogPost {
  constructor(
    public title: string,
    public content: string,
  ) {}
}

class BlogPosts {
  public Posts: BlogPost[];

  addPost(blog: BlogPost): void {
    this.Posts.push(blog);
  }
  updatePost(blog: BlogPost): void {
    //find it in posts and update it
  }
  deletePost(blog: BlogPost): void {
    //find it in Posts and delete it
  }
}

class BlogPostDisplay {
  display(blog: BlogPost): string {
    return `<h1>${blog.title}</h1><p>${blog.content}</p>`;
  }
}
