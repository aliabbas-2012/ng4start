//creating interface

interface ArticleJSON {
  author:string;
  url: string;
  title: string;
  description: string;
  urlToImage: string;
  votes: number;
  publishedAt: Date;
}

export class Article {  

  //creating Interface

  static getFromJSON(json: ArticleJSON):Article {
    let article = Object.create(Article.prototype);
    return Object.assign(article,json,{
      votes: json.votes? json.votes : 0, 
      title: json.title,
      description: json.description, 
      imageUrl: json.urlToImage? json.urlToImage : '', 
      publishedAt: json.publishedAt? new Date(json.publishedAt) : new Date()
    })
  }

  //no need to define like javastyle , Typescript will handle
  public publishedAt:Date;
  constructor(public title: string,public description: string,public imageUrl:string,public votes?:number){
    this.votes = votes || 0
    this.publishedAt = new Date()
  }

  public voteUp():void{
    this.votes +=1
  }

  public voteDown():void{
    this.votes -=1
  }
}