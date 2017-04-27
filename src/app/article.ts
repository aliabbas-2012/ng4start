export class Article {  
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