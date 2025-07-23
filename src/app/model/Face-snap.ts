export class Facesnap{
location?:string;

constructor(public title:string,
            public description:string,
             public imageUrl:string,
            public createdAt:Date,
            public snap:number
){
}


addSnap(): void {
    this.snap++;
  }

  removeSnap(): void {
    this.snap--;
  }

  setlocation(location:string):void{
    this.location=location;
  }

}